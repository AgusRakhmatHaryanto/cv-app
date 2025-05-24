import ProfileSection from "@/components/crud/profile/ProfileSection";
import EducationSection from "@/components/crud/education/EducationSection";
import ExperienceSection from "@/components/crud/experience/ExperienceSection";
import ProjectSection from "@/components/crud/project/ProjectSection";
import CertificateSection from "@/components/crud/certificate/CertificateSection";
import AdditionalSection from "@/components/crud/additional/AdditionalSection";
import Navbar from "@/components/reusable/Navbar";
export default function HomePage() {
  return (
    <div >
      <Navbar />
      <ProfileSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <CertificateSection />
      <AdditionalSection />
    </div>
  );
}
