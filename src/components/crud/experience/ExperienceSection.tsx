"use client";
import { Experience } from "@/types/cv";
import ExperienceForm from "./experienceForm/ExperienceForm";
import ExperienceList from "./experienceList/ExperienceList";
import { useState, useEffect } from "react";

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<
    (Experience & { id: string })[]
  >([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<
    (Experience & { id: string }) | undefined
  >(undefined);

  const fetchExperiences = async () => {
    const res = await fetch("/api/experience");
    const json = await res.json();
    setExperiences(json.data);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleAddExperience = () => {
    setSelectedExperience(undefined);
    setShowForm(true);
  };

  const handleEditExperience = (experience: Experience & { id: string }) => {
    setSelectedExperience(experience);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    fetchExperiences();
    setShowForm(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Experiences</h2>
      <button
        onClick={handleAddExperience}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Experience
      </button>
      {showForm && (
        <ExperienceForm
          experience={selectedExperience}
          onSuccess={handleFormSuccess}
        />
      )}
      <ExperienceList
        experiences={experiences}
        onEdit={handleEditExperience}
        onReload={fetchExperiences}
      />
    </div>
  );
}
