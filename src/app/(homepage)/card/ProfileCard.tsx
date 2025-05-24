"use client";
import { useEffect, useState } from "react";
import { Profile, WithId } from "@/types/cv";
import { GenericCard } from "@/components/reusable/GenericCard";
import { ProfileItem } from "@/components/crud/profile/profileList/ProfileItem";

export default function ProfileCard() {
  const [profiles, setProfiles] = useState<WithId<Profile>[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProfiles = async () => {
    try {
      const res = await fetch("/api/profile");
      const json = await res.json();
      setProfiles(json.data);
    } catch (error) {
      console.error("Failed to fetch profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <GenericCard title="" className="mb-4">
      {loading ? (
        <p>Loading...</p>
      ) : profiles.length > 0 ? (
        <ProfileItem profile={profiles[0]} />
      ) : (
        <p>No profile found.</p>
      )}
    </GenericCard>
  );
}
