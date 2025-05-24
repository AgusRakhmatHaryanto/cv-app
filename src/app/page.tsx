import ProfileSection from "@/components/profile/ProfileSection";
import EducationSection from "@/components/education/EducationSection";
import ExperienceSection from "@/components/experience/ExperienceSesion";
import ProjectSection from "@/components/project/ProjectSection";
import CertificateSection from "@/components/certificate/CertificateSection";
import AdditionalSection from "@/components/additional/AdditionalSection";
export default function HomePage() {
  return (
    <div className="p-4 space-y-8">
      <ProfileSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <CertificateSection />
      <AdditionalSection />
    </div>
  );
}
