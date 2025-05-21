"use client";

import { Education } from "@/types/cv";

type Props = {
  educations: (Education & { id: string })[];
  onEdit: (educations: Education & { id: string }) => void;
  onReload: () => void;
};

export default function EducationList({ educations, onEdit, onReload }: Props) {
  const handleDelete = async (id: string) => {
    await fetch(`/api/education/${id}`, { method: "DELETE" });
    onReload();
  };

  return (
    <div className="mt-4">
      {educations.map((education) => (
        <div key={education.id} className="flex justify-between border p-2 mb-2">
          <div>
            <p>
              <strong>{education.name}</strong>
            </p>
            <p>{education.location}</p>
            <p>{education.from}</p>
            <p>{education.to}</p>
            <p>{education.major}</p>
            <p>{education.degree}</p>
            <p>{education.gpa}</p>
            <p>{education.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(education)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(education.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
