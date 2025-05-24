import ProfileCard from "./(homepage)/card/ProfileCard";
import Navbar from "@/components/reusable/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-4 space-y-8 pt-12">
        <ProfileCard />
      </div>
    </>
  )
}
