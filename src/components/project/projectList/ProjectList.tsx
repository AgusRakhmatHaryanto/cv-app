"use client";
import { GenericList } from "@/components/reusable/GenericList";
import { ProjectItem } from "./ProjectItem";
import { Project, WithId } from "@/types/cv";

type ProjectListProps = {
  projects: WithId<Project>[];
  onEdit?: (project: WithId<Project>) => void;
  onDelete?: (id: string) => Promise<void>;
  onReload?: () => void;
};

export default function ProjectList({
  projects,
  onEdit,
  onDelete,
  onReload,
}: ProjectListProps) {
  const handleDelete = async (id: string) => {
    if (onDelete) {
      await onDelete(id);
    } else {
      // Default implementation if onDelete not provided
      await fetch(`/api/project/${id}`, { method: "DELETE" });
    }
    onReload?.();
  };

  return (
    <GenericList
      items={projects}
      renderItem={(project) => <ProjectItem project={project} />}
      actions={{
        onEdit,
        onDelete: handleDelete,
        customActions: [
          {
            label: "View",
            handler: (project) =>
              window.open(`/project/${project.id}`, "_blank"),
            className: "bg-green-500 hover:bg-green-600 text-white",
          },
        ],
      }}
    />
  );
}
