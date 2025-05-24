"use client";
import { useState, useEffect } from "react";
import TechForm from "./techForm/TechForm";
import TechList from "./techList/TechList";
import { Technology } from "@/types/cv";

export default function TechSection() {
  const [showTechForm, setShowTechForm] = useState(false);
  const [techs, setTechs] = useState<(Technology & { id: string })[]>([]);
  const [selectedTech, setSelectedTech] = useState<
    (Technology & { id: string }) | undefined
  >(undefined);

  const fetchTechs = async () => {
    const res = await fetch("/api/tech");
    const json = await res.json();
    setTechs(json.data);
  };

  useEffect(() => {
    fetchTechs();
  }, []);

  const handleAddTech = () => {
    setSelectedTech(undefined);
    setShowTechForm(true);
  };

  const handleEditTech = (tech: Technology & { id: string }) => {
    setSelectedTech(tech);
    setShowTechForm(true);
  };

  const handleFormSuccess = () => {
    fetchTechs();
    setShowTechForm(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Tech</h2>
      <button
        onClick={handleAddTech}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Tech
      </button>

      {showTechForm && (
        <TechForm technology={selectedTech} onSuccess={handleFormSuccess} />
      )}

      <TechList
        technologies={techs}
        onEdit={handleEditTech}
        onReload={fetchTechs}
      />
    </div>
  );
}
