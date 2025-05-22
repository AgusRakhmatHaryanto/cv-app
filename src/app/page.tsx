import ProfileSection from "@/components/ProfileSection";
import EducationSection from "@/components/EducationSection";

export default function HomePage() {
  return (
    <div className="p-4 space-y-8">
      <ProfileSection />
      <EducationSection />
    </div>
  );
}
