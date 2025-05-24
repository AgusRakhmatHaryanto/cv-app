import GenericForm from "@/components/reusable/GenericForm";
import { BaseFormProps, FormField, Certificate } from "@/types/cv";

const certificateFields: FormField<Certificate>[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    placeholder: "Certificate name",
  },
  {
    key: "date",
    label: "Date",
    type: "date",
    placeholder: "Certificate date",
  },
  {
    key: "link",
    label: "Link",
    type: "text",
    placeholder: "Certificate link",
  },
  {
    key: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Certificate description",
  },
];

type CertificateFormProps = Omit<
  BaseFormProps<Certificate, "certificate">,
  "fields" | "entityType"
>;

export default function CertificateForm(props: CertificateFormProps) {
  return (
    <GenericForm<Certificate, "certificate">
      {...props}
      fields={certificateFields}
      entityType="certificate"
    />
  );
}
