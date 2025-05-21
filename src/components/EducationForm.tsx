"use client";

import { useState, useEffect, FormEvent } from "react";
import { Education } from "@/types/cv";

type Props = {
  educations?: Education & { id: string };
  onSuccess: () => void;
};
export default function EducationForm({ educations, onSuccess }: Props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [major, setMajor] = useState("");
  const [degree, setDegree] = useState("");
  const [gpa, setGpa] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (educations) {
      setName(educations.name);
      setLocation(educations.location);
      setFrom(educations.from);
      setTo(educations.to);
      setMajor(educations.major);
      setDegree(educations.degree);
      setGpa(educations.gpa);
      setDescription(educations.description);
    } else {
      setName("");
      setLocation("");
      setFrom("");
      setTo("");
      setMajor("");
      setDegree("");
      setGpa("");
      setDescription("");
    }
  }, [educations]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = { name, location, from, to, major, degree, gpa, description };

    const method = educations ? "PUT" : "POST";
    const url = educations ? `/api/education/${educations.id}` : `/api/education`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 w-full"
      />
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="border p-2 w-full"
      />
      <input
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="Start From"
        className="border p-2 w-full"
      />
      <input
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="End in"
        className="border p-2 w-full"
      />
      <input
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        placeholder="Major"
        className="border p-2 w-full"
      />
      <input
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        placeholder="Degree"
        className="border p-2 w-full"
      />
      <input
        value={gpa}
        onChange={(e) => setGpa(e.target.value)}
        placeholder="GPA"
        className="border p-2 w-full"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {educations ? "Update" : "Add"} Education
      </button>
    </form>
  );
}
