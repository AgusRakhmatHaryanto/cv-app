"use client";
import { Experience, WithId } from "@/types/cv";
import { GenericList } from "@/components/reusable/GenericList";
import {ExperienceItem} from "./ExperienceItem";

type ExperienceListProps = {
    experiences: WithId<Experience>[];
    onEdit?: (experience: WithId<Experience>) => void;
    onDelete?: (id: string) => Promise<void>;
    onReload?: () => void;
};

export default function ExperienceList({
  experiences,
  onEdit,
  onDelete,
  onReload,
}: ExperienceListProps) {
  const handleDelete = async (id: string) => {
    if (onDelete) {
      await onDelete(id);
    } else {
      // Default implementation if onDelete not provided
      await fetch(`/api/experience/${id}`, { method: "DELETE" });
    }
    onReload?.();
  };

  return (
    <GenericList
      items={experiences}
      renderItem={(experience) => <ExperienceItem experience={experience} />}
      actions={{
        onEdit,
        onDelete: handleDelete,
        customActions: [
          {
            label: "View",
            handler: (experience) =>
              window.open(`/experience/${experience.id}`, "_blank"),
            className: "bg-green-500 hover:bg-green-600 text-white",
          },
        ],
      }}
    />
  );
}