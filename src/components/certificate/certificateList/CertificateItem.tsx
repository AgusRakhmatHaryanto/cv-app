import { Certificate } from "@/types/cv";

type CertificateItemProps = {
  certificate: Certificate;
  className?: string;
};

export function CertificateItem({
  certificate,
  className = "",
}: CertificateItemProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-lg font-semibold">{certificate.name}</h3>
      <div className="text-gray-600">{certificate.date}</div>
      <div className="text-gray-600">{certificate.link}</div>
      <div className="text-gray-600">{certificate.description}</div>
    </div>
  );
}
