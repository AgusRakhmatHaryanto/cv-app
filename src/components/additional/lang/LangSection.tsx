"use client";

import { useState, useEffect } from "react";
import LangForm from "./langForm/LangForm";
import LangList from "./langList/LangList";
import { Language } from "@/types/cv";

export default function LangSection() {
  const [showLangForm, setShowLangForm] = useState(false);
  const [languages, setLanguages] = useState<(Language & { id: string })[]>([]);
  const [selectedLang, setSelectedLang] = useState<
    (Language & { id: string }) | undefined
  >(undefined);

  const fetchLanguages = async () => {
    const res = await fetch("/api/language");
    const json = await res.json();
    setLanguages(json.data);
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  const handleAddLang = () => {
    setSelectedLang(undefined);
    setShowLangForm(true);
  };

  const handleEditLang = (lang: Language & { id: string }) => {
    setSelectedLang(lang);
    setShowLangForm(true);
  };

  const handleFormSuccess = () => {
    fetchLanguages();
    setShowLangForm(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Languages</h2>
      <button
        onClick={handleAddLang}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Language
      </button>

      {showLangForm && (
        <LangForm language={selectedLang} onSuccess={handleFormSuccess} />
      )}

      <LangList
        languages={languages}
        onEdit={handleEditLang}
        onReload={fetchLanguages}
      />
    </div>
  );
}
