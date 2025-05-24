"use client";

import { useState, useEffect } from "react";
import EducationForm from "./educationForm/EducationForm";
import EducationList from "./educetionList/EducationList";
import { Education } from "@/types/cv";

export default function EducationSection() {
  const [educations, setEducations] = useState<(Education & { id: string })[]>(
    []
  );
  const [selectedEducation, setSelectedEducation] = useState<
    (Education & { id: string }) | undefined
  >(undefined);
  const [showEducationForm, setShowEducationForm] = useState(false);

  const fetchEducations = async () => {
    const res = await fetch("/api/education");
    const json = await res.json();
    setEducations(json.data);
  };

  useEffect(() => {
    fetchEducations();
  }, []);

  const handleAddEducation = () => {
    setSelectedEducation(undefined); // Reset supaya form kosong
    setShowEducationForm(true);
  };

  const handleEditEducation = (education: Education & { id: string }) => {
    setSelectedEducation(education); // Isi form dengan data education yg mau diedit
    setShowEducationForm(true);
  };

  const handleFormSuccess = () => {
    fetchEducations(); // Refresh data setelah berhasil submit
    setShowEducationForm(false); // Sembunyikan form
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Educations</h2>
      <button
        onClick={handleAddEducation}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Education
      </button>

      {showEducationForm && (
        <EducationForm education={selectedEducation} onSuccess={handleFormSuccess} />
      )}

      <EducationList
        educations={educations}
        onEdit={handleEditEducation}
        onReload={fetchEducations}
      />
    </div>
  );
}
