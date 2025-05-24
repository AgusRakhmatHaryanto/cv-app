"use client";

import { GenericList } from "@/components/reusable/GenericList";
import { LangItem } from "./LangItem";
import { Language, WithId } from "@/types/cv";

type LangListProps = {
  languages: WithId<Language>[];
  onEdit?: (language: WithId<Language>) => void;
  onDelete?: (id: string) => Promise<void>;
  onReload?: () => void;
};

export default function LangList({
  languages,
  onEdit,
  onDelete,
  onReload,
}: LangListProps) {
  const handleDelete = async (id: string) => {
    if (onDelete) {
      await onDelete(id);
    } else {
      // Default implementation if onDelete not provided
      await fetch(`/api/language/${id}`, { method: "DELETE" });
    }
    onReload?.();
  };
  return (
    <GenericList
      items={languages}
      renderItem={(language) => <LangItem lang={language} />}
      actions={{
        onEdit,
        onDelete: handleDelete,
        customActions: [
          {
            label: "View",
            handler: (language) =>
              window.open(`/language/${language.id}`, "_blank"),
            className: "bg-green-500 hover:bg-green-600 text-white",
          },
        ],
      }}
    />
  );
}
