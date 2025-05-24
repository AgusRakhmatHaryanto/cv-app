"use client";

import { Profile } from "@/types/cv";

type Props = {
  profiles: (Profile & { id: string })[];
  onEdit: (profile: Profile & { id: string }) => void;
  onReload: () => void; 
};

export default function ProfileList({ profiles, onEdit, onReload }: Props) {
  const handleDelete = async (id: string) => {
    await fetch(`/api/profile/${id}`, { method: "DELETE" });
    onReload();
  };

  return (
    <div className="mt-4">
      {profiles.map((profile) => (
        <div key={profile.id} className="flex justify-between border p-2 mb-2">
          <div>
            <p>
              <strong>{profile.name}</strong>
            </p>
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.github}</p>
            <p>{profile.address}</p>
            <p>{profile.summary}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(profile)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(profile.id)}
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
