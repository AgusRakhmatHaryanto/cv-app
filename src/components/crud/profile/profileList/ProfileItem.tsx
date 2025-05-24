import { Profile } from "@/types/cv";
import { FaGithub, FaPhone } from "react-icons/fa";

type ProfileItemProps = {
  profile: Profile;
  className?: string;
};

export function ProfileItem({ profile, className = "" }: ProfileItemProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-lg font-semibold">{profile.name}</h3>
      <div className="text-gray-600">{profile.email}</div>

      {profile.phone && (
        <div className="flex items-center gap-2">
          <FaPhone className="w-4 h-4" />
          <span>{profile.phone}</span>
        </div>
      )}

      {profile.github && (
        <div className="flex items-center gap-2">
          <FaGithub className="w-4 h-4" />
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {profile.github}
          </a>
        </div>
      )}

      {profile.address && <div>{profile.address}</div>}
      {profile.summary && (
        <p className="text-gray-700 mt-2">{profile.summary}</p>
      )}
    </div>
  );
}
