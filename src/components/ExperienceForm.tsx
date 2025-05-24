"use client";

import { useState, useEffect, FormEvent } from "react";

// import { ExperienceProps } from "@/types/cv";
import { BaseFormProps, Experience } from "@/types/cv";
// type Props = {
//   experiences?: Experience & { id: string };
//   onSuccess: () => void;
// };
type ExperienceFormProps = BaseFormProps<Experience, "experiences">;

export default function ExperienceForm({
  experiences,
  onSuccess,
}: ExperienceFormProps) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");

  useEffect(() => {
    if (experiences) {
      setName(experiences.name);
      setLocation(experiences.location);
      setFrom(experiences.from);
      setTo(experiences.to);
      setPosition(experiences.position);
      setDescription(experiences.description);
      setTechnologies(experiences.technologies);
    } else {
      setName("");
      setLocation("");
      setFrom("");
      setTo("");
      setPosition("");
      setTechnologies("");
      setDescription("");
    }
  }, [experiences]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      location,
      from,
      to,
      position,
      description,
      technologies,
    };

    const method = experiences ? "PUT" : "POST";
    const url = experiences
      ? `/api/education/${experiences.id}`
      : `/api/education`;

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
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Major"
        className="border p-2 w-full"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 w-full"
      />
      <input
        value={technologies}
        onChange={(e) => setTechnologies(e.target.value)}
        placeholder="Degree"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {experiences ? "Update" : "Add"} Experience
      </button>
    </form>
  );
}
