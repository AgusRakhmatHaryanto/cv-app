"use client";

import { GenericList } from "@/components/reusable/GenericList";
import { TechItem } from "./TechItem";
import { Technology, WithId } from "@/types/cv";

type TechListProps = {
  technologies: WithId<Technology>[];
  onEdit?: (technology: WithId<Technology>) => void;
  onDelete?: (id: string) => Promise<void>;
  onReload?: () => void;
};

export default function TechList({
  technologies,
  onEdit,
  onDelete,
  onReload,
}: TechListProps) {
  const handleDelete = async (id: string) => {
    if (onDelete) {
      await onDelete(id);
    } else {
      // Default implementation if onDelete not provided
      await fetch(`/api/technology/${id}`, { method: "DELETE" });
    }
    onReload?.();
  };
  return (
    <GenericList
      items={technologies}
      renderItem={(technology) => <TechItem tech={technology} />}
      actions={{
        onEdit,
        onDelete: handleDelete,
        customActions: [
          {
            label: "View",
            handler: (technology) =>
              window.open(`/technology/${technology.id}`, "_blank"),
            className: "bg-green-500 hover:bg-green-600 text-white",
          },
        ],
      }}
    />
  );
}
