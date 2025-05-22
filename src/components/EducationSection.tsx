"use client";

import { useState, useEffect } from "react";
import EducationForm from "@/components/EducationForm";
import EducationList from "@/components/EducationList";
import { Education } from "@/types/cv";

export default function EducationSection() {
  const [educations, setEducations] = useState<(Education & { id: string })[]>(
    []
  );
  const [selectedEducation, setSelectedEducation] = useState<
    (Education & { id: string }) | undefined
  >(undefined);
  const [showEducationForm, setShowEducationForm] = useState(false);

  const fetchEducation = async () => {
    const res = await fetch("/api/education");
    const json = await res.json();
    setEducations(json.data);
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  const handleAddEducation = () => {
    setSelectedEducation(undefined);
    setShowEducationForm(true);
  };

  const handleEditEducation = (education: Education & { id: string }) => {
    setSelectedEducation(education);
    setShowEducationForm(true);
  };

  const handleFormSuccess = () => {
    fetchEducation();
    setShowEducationForm(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Educations</h2>
      <button
        onClick={handleAddEducation}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Education
      </button>

      {showEducationForm && (
        <EducationForm
          educations={selectedEducation}
          onSuccess={handleFormSuccess}
        />
      )}

      <EducationList
        educations={educations}
        onEdit={handleEditEducation}
        onReload={fetchEducation}
      />
    </div>
  );
}
