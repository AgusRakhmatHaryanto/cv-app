import { Experience } from "@/types/cv";

type ExperienceItemProps = {
  experience: Experience;
  className?: string;
};

export function ExperienceItem({
  experience,
  className = "",
}: ExperienceItemProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-lg font-semibold">{experience.name}</h3>
      <div className="text-gray-600">{experience.location}</div>
      <div className="text-gray-600">
        {experience.from} - {experience.to}
      </div>
      <div className="text-gray-600">{experience.position}</div>
      <div className="text-gray-600">{experience.description}</div>
      <div className="text-gray-600">{experience.technologies}</div>
    </div>
  );
}
