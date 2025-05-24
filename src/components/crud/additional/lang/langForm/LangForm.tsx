import GenericForm from "@/components/reusable/GenericForm";
import { BaseFormProps, FormField, Language } from "@/types/cv";

const langFields: FormField<Language>[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    placeholder: "Language name",
  },
  {
    key: "level",
    label: "Level",
    type: "text",
    placeholder: "Language level",
  },
];

type LangFormProps = Omit<
  BaseFormProps<Language, "language">,
  "fields" | "entityType"
>;

export default function LangForm(props: LangFormProps) {
  return (
    <GenericForm<Language, "language">
      {...props}
      fields={langFields}
      entityType="language"
    />
  );
}
