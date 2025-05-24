"use client";
import { GenericList } from "@/components/reusable/GenericList";
import { EducationItem } from "./EducationItem";
import { Education, WithId } from "@/types/cv";

type EducationListProps = {
  educations: WithId<Education>[];
  onEdit?: (education: WithId<Education>) => void;
  onDelete?: (id: string) => Promise<void>;
  onReload?: () => void;
};

export default function EducationList({
  educations,
  onEdit,
  onDelete,
  onReload,
}: EducationListProps) {
    const handleDelete = async (id: string) => {
        if(onDelete) {
            await onDelete(id);
    } else {
        // Default implementation if onDelete not provided
        await fetch(`/api/education/${id}`, { method: "DELETE" });
    }
    onReload?.();
    }
    return (
        <GenericList
          items={educations}
          renderItem={(education) => <EducationItem education={education} />}
          actions={{
            onEdit,
            onDelete: handleDelete,
            customActions: [
              {
                label: "View",
                handler: (education) =>
                  window.open(`/education/${education.id}`, "_blank"),
                className: "bg-green-500 hover:bg-green-600 text-white",
              },
            ],
          }}
        />
      );
    }
    