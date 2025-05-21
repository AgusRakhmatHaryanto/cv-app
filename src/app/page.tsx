"use client";

import { useState, useEffect } from "react";
import ProfileList from "@/components/ProfileList";
import ProfileForm from "@/components/ProfileForm";
import EducationForm from "@/components/EducationForm";
import EducationList from "@/components/EducationList";

import { Profile, Education } from "@/types/cv";

export default function HomePage() {
  const [profiles, setProfiles] = useState<(Profile & { id: string })[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<
    (Profile & { id: string }) | undefined
  >(undefined);
  const [educations, setEducations] = useState<(Education & { id: string })[]>(
    []
  );
  const [selectedEducations, setSelectedEducations] = useState<
    (Education & { id: string }) | undefined
  >(undefined);

  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);

  const fetchProfiles = async () => {
    const res = await fetch("/api/profile");
    const json = await res.json();
    setProfiles(json.data);
  };

  const fetchEducation = async () => {
    const res = await fetch("/api/education");
    const json = await res.json();
    setEducations(json.data);
  };

  useEffect(() => {
    fetchProfiles();
    fetchEducation();
  }, []);

  const handleAddProfile = () => {
    setSelectedProfile(undefined);
    setShowProfileForm(true);
  };
  const handleAddEducation = () => {
    setSelectedEducations(undefined);
    setShowEducationForm(true);
  };

  const handleEditProfile = (profile: Profile & { id: string }) => {
    setSelectedProfile(profile);
    setShowProfileForm(true);
  };
  const handleEditEducation = (educations: Education & { id: string }) => {
    setSelectedEducations(educations);
    setShowEducationForm(true);
  };

  const handleFormSuccessEducation = () => {
    fetchEducation();
    setShowEducationForm(false);
  };
  const handleFormSuccessProfile = () => {
    fetchProfiles();
    setShowProfileForm(false);
  };

  return (
    <div className="p-4 space-y-8">
      {/* === Profile Section === */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Profiles</h2>
        <button
          onClick={handleAddProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          + Add Profile
        </button>

        {showProfileForm && (
          <ProfileForm
            profile={selectedProfile}
            onSuccess={handleFormSuccessProfile}
          />
        )}

        <ProfileList
          profiles={profiles}
          onEdit={handleEditProfile}
          onReload={fetchProfiles}
        />
      </div>

      {/* === Education Section === */}
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
            educations={selectedEducations}
            onSuccess={handleFormSuccessEducation}
          />
        )}

        <EducationList
          educations={educations}
          onEdit={handleEditEducation}
          onReload={fetchEducation}
        />
      </div>
    </div>
  );
}
