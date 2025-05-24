import { ReactNode } from "react";

type GenericCardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export function GenericCard({
  children,
  className = "",
  title,
}: GenericCardProps) {
  return (
    <div className={` shadow-md rounded-xl p-6 border ${className}`}>
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
}
