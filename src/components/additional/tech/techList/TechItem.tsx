import { Technology } from "@/types/cv";

type TechItemProps = {
  tech: Technology;
  className?: string;
};

export function TechItem({ tech, className = "" }: TechItemProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-lg font-semibold">{tech.name}</h3>
      <div className="text-gray-600">{tech.level}</div>
    </div>
  );
}
