"use clinet";
import { useState, useEffect } from "react";
import ProjectForm from "./projectForm/ProjectForm";
import ProjectList from "./projectList/ProjectList";
import { Project } from "@/types/cv";

export default function ProjectSection() {
  const [projects, setProjects] = useState<(Project & { id: string })[]>([]);
  const [selectedProject, setSelectedProject] = useState<
    (Project & { id: string }) | undefined
  >(undefined);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const fetchProjects = async () => {
    const res = await fetch("/api/project");
    const json = await res.json();
    setProjects(json.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProject = () => {
    setSelectedProject(undefined);
    setShowProjectForm(true);
  };

  const handleEditProject = (project: Project & { id: string }) => {
    setSelectedProject(project);
    setShowProjectForm(true);
  };

  const handleFormSuccess = () => {
    fetchProjects();
    setShowProjectForm(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <button
        onClick={handleAddProject}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Project
      </button>

      {showProjectForm && (
        <ProjectForm project={selectedProject} onSuccess={handleFormSuccess} />
      )}

      <ProjectList
        projects={projects}
        onEdit={handleEditProject}
        onReload={fetchProjects}
      />
    </div>
  );
}
