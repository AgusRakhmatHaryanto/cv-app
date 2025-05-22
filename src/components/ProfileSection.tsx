"use client";

import { useState, useEffect } from "react";
import ProfileForm from "@/components/ProfileForm";
import ProfileList from "@/components/ProfileList";
import { Profile } from "@/types/cv";

export default function ProfileSection() {
  const [profiles, setProfiles] = useState<(Profile & { id: string })[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<
    (Profile & { id: string }) | undefined
  >(undefined);
  const [showProfileForm, setShowProfileForm] = useState(false);

  const fetchProfiles = async () => {
    const res = await fetch("/api/profile");
    const json = await res.json();
    setProfiles(json.data);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleAddProfile = () => {
    setSelectedProfile(undefined);
    setShowProfileForm(true);
  };

  const handleEditProfile = (profile: Profile & { id: string }) => {
    setSelectedProfile(profile);
    setShowProfileForm(true);
  };

  const handleFormSuccess = () => {
    fetchProfiles();
    setShowProfileForm(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Profiles</h2>
      <button
        onClick={handleAddProfile}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Profile
      </button>

      {showProfileForm && (
        <ProfileForm profile={selectedProfile} onSuccess={handleFormSuccess} />
      )}

      <ProfileList
        profiles={profiles}
        onEdit={handleEditProfile}
        onReload={fetchProfiles}
      />
    </div>
  );
}