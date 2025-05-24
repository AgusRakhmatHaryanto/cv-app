import { Project } from "@/types/cv";

type ProjectItemProps = {
  project: Project;
  className?: string;
};

export function ProjectItem({ project, className = "" }: ProjectItemProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <div className="text-gray-600">{project.description}</div>
      <div className="text-gray-600">{project.technologies}</div>
      <div className="text-gray-600">{project.link}</div>
    </div>
  );
}
