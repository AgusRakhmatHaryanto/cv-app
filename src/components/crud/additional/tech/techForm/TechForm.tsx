import GenericForm from "@/components/reusable/GenericForm";
import { BaseFormProps, FormField, Technology } from "@/types/cv";

const techFields: FormField<Technology>[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
  },
  {
    key: "level",
    label: "Level",
    type: "text",
    placeholder: "Your level",
  },
];

type TechFormProps = Omit<
  BaseFormProps<Technology, "technology">,
  "fields" | "entityType"
>;

export default function TechForm(props: TechFormProps) {
  return (
    <GenericForm<Technology, "technology">
      {...props}
      fields={techFields}
      entityType="technology"
    />
  );
}
