import { Education } from "@/types/cv";
type EducationItemProps = {
  education: Education;
  className?: string;
};

export function EducationItem({
  education,
  className = "",
}: EducationItemProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-lg font-semibold">{education.name}</h3>
      <div className="text-gray-600">{education.location}</div>
      <div className="text-gray-600">
        {education.from} - {education.to}
      </div>
      <div className="text-gray-600">{education.major}</div>
      <div className="text-gray-600">{education.degree}</div>
      <div className="text-gray-600">{education.gpa}</div>
      <div className="text-gray-600">{education.description}</div>
    </div>
  );
}
