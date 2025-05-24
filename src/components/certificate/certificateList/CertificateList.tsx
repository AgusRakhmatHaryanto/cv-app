"use client";
import { GenericList } from "@/components/reusable/GenericList";
import { CertificateItem } from "./CertificateItem";
import { Certificate, WithId } from "@/types/cv";

type CertificateListProps = {
  certificates: WithId<Certificate>[];
  onEdit?: (certificate: WithId<Certificate>) => void;
  onDelete?: (id: string) => Promise<void>;
  onReload?: () => void;
};

export default function CertificateList({
  certificates,
  onEdit,
  onDelete,
  onReload,
}: CertificateListProps) {
  const handleDelete = async (id: string) => {
    if (onDelete) {
      await onDelete(id);
    } else {
      // Default implementation if onDelete not provided
      await fetch(`/api/certificate/${id}`, { method: "DELETE" });
    }
    onReload?.();
  };
  return (
    <GenericList
      items={certificates}
      renderItem={(certificate) => (
        <CertificateItem certificate={certificate} />
      )}
      actions={{
        onEdit,
        onDelete: handleDelete,
        customActions: [
          {
            label: "View",
            handler: (certificate) =>
              window.open(`/certificate/${certificate.id}`, "_blank"),
            className: "bg-green-500 hover:bg-green-600 text-white",
          },
        ],
      }}
    />
  );
}
