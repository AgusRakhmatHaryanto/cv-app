import GenericForm from "@/components/reusable/GenericForm";
import { BaseFormProps, Profile, FormField } from "@/types/cv";

const profileFields: FormField<Profile>[] = [
  { key: "name", label: "Name", type: "text", placeholder: "Your full name" },
  {
    key: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
  },
  { key: "phone", label: "Phone", type: "text", placeholder: "Phone number" },
  {
    key: "github",
    label: "GitHub",
    type: "text",
    placeholder: "GitHub username or link",
  },
  {
    key: "address",
    label: "Address",
    type: "textarea",
    placeholder: "Your address",
  },
  {
    key: "summary",
    label: "Summary",
    type: "textarea",
    placeholder: "Brief summary about you",
  },
];

type ProfileFormProps = Omit<
  BaseFormProps<Profile, "profile">,
  "fields" | "entityType"
>;

export default function ProfileForm(props: ProfileFormProps) {
  return (
    <GenericForm<Profile, "profile">
      {...props}
      fields={profileFields}
      entityType="profile"
    />
  );
}
