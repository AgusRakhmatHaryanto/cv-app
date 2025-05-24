import { Experience, BaseFormProps, FormField } from "@/types/cv";
import GenericForm from "@/components/reusable/GenericForm";

const experienceFields: FormField<Experience>[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
  },
  {
    key: "location",
    label: "Location",
    type: "text",
    placeholder: "Your location",
  },
  {
    key: "from",
    label: "From",
    type: "date",
    placeholder: "From",
  },
  {
    key: "to",
    label: "To",
    type: "date",
    placeholder: "To",
  },
  {
    key: "position",
    label: "Position",
    type: "text",
    placeholder: "Your position",
  },
  {
    key: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Your description",
  },
  {
    key: "technologies",
    label: "Technologies",
    type: "text",
    placeholder: "Your technologies",
  },
];

type ExperienceFormProps = Omit<
  BaseFormProps<Experience, "experience">,
  "fields" | "entityType"
>;

export default function ExperienceForm(props: ExperienceFormProps) {
  return (
    <GenericForm<Experience, "experience">
      {...props}
      fields={experienceFields}
      entityType="experience"
    />
  );
}
