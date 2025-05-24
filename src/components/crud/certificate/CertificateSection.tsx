"use client";
import { useState, useEffect } from "react";
import CertificateForm from "./certificateForm/CertificateForm";
import CertificateList from "./certificateList/CertificateList";
import { Certificate } from "@/types/cv";

export default function CertificateSection() {
  const [certificates, setCertificates] = useState<
    (Certificate & { id: string })[]
  >([]);
  const [selectedCertificate, setSelectedCertificate] = useState<
    (Certificate & { id: string }) | undefined
  >(undefined);
  const [showCertificateForm, setShowCertificateForm] = useState(false);

  const fetchCertificates = async () => {
    const res = await fetch("/api/certificate");
    const json = await res.json();
    setCertificates(json.data);
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleAddCertificate = () => {
    setSelectedCertificate(undefined); // Reset supaya form kosong
    setShowCertificateForm(true);
  };

  const handleEditCertificate = (certificate: Certificate & { id: string }) => {
    setSelectedCertificate(certificate); // Isi form dengan data certificate yg mau diedit
    setShowCertificateForm(true);
  };

  const handleFormSuccess = () => {
    fetchCertificates(); // Refresh data setelah berhasil submit
    setShowCertificateForm(false); // Sembunyikan form
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Certificates</h2>
      <button
        onClick={handleAddCertificate}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Certificate
      </button>

      {showCertificateForm && (
        <CertificateForm
          certificate={selectedCertificate}
          onSuccess={handleFormSuccess}
        />
      )}

      <CertificateList
        certificates={certificates}
        onEdit={handleEditCertificate}
        onReload={fetchCertificates}
      />
    </div>
  );
}
