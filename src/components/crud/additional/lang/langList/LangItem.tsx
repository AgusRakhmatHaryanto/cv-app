import { Language } from "@/types/cv";

type LangItemProps = {
  lang: Language;
  className?: string;
};

export function LangItem({ lang, className = "" }: LangItemProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-lg font-semibold">{lang.name}</h3>
      <div className="text-gray-600">{lang.level}</div>
    </div>
  );
}
