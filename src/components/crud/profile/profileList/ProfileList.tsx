"use client";
import { GenericList } from "../../../reusable/GenericList";
import { ProfileItem } from "./ProfileItem";
import { Profile, WithId } from "@/types/cv";

type ProfileListProps = {
  profiles: WithId<Profile>[];
  onEdit?: (profile: WithId<Profile>) => void;
  onDelete?: (id: string) => Promise<void>;
  onReload?: () => void;
};

export default function ProfileList({
  profiles,
  onEdit,
  onDelete,
  onReload,
}: ProfileListProps) {
  const handleDelete = async (id: string) => {
    if (onDelete) {
      await onDelete(id);
    } else {
      // Default implementation if onDelete not provided
      await fetch(`/api/profile/${id}`, { method: "DELETE" });
    }
    onReload?.();
  };

  return (
    <GenericList
      items={profiles}
      renderItem={(profile) => <ProfileItem profile={profile} />}
      actions={{
        onEdit,
        onDelete: handleDelete,
        customActions: [
          {
            label: "View",
            handler: (profile) =>
              window.open(`/profile/${profile.id}`, "_blank"),
            className: "bg-green-500 hover:bg-green-600 text-white",
          },
        ],
      }}
    />
  );
}
