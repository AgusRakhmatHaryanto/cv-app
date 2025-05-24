import ProfileSection from "@/components/profile/ProfileSection";
import EducationSection from "@/components/education/EducationSection";
import ExperienceSection from "@/components/experience/ExperienceSesion";
export default function HomePage() {
  return (
    <div className="p-4 space-y-8">
      <ProfileSection />
      <EducationSection />
      <ExperienceSection />
    </div>
  );
}
