"use client";

import { useState, useEffect, FormEvent } from "react";
import { Profile } from "@/types/cv";

type Props = {
  profile?: Profile & { id: string }; // karena kamu pakai `profile.id`
  onSuccess: () => void;
};

export default function ProfileForm({ profile, onSuccess }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [github, setGithub] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setEmail(profile.email);
      setPhone(profile.phone);
      setGithub(profile.github);
      setAddress(profile.address);
      setSummary(profile.summary);
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setGithub("");
      setAddress("");
      setSummary("");
    }
  }, [profile]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = { name, email, phone, github, address, summary };

    const method = profile ? "PUT" : "POST";
    const url = profile ? `/api/profile/${profile.id}` : `/api/profile`;

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 w-full"
      />
      <input 
      value={phone}
      onChange={(e)=> setPhone(e.target.value)}
      placeholder="Phone"
      className="border p-2 w-full"
      />
      <input 
      value={github}
      onChange={(e)=> setGithub(e.target.value)}
      placeholder="Github"
      className="border p-2 w-full"
      />
      <input 
      value={address}
      onChange={(e)=> setAddress(e.target.value)}
      placeholder="Address"
      className="border p-2 w-full"
      />
      <input 
      value={summary}
      onChange={(e)=> setSummary(e.target.value)}
      placeholder="Summary"
      className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {profile ? "Update" : "Add"} Profile
      </button>
    </form>
  );
}
