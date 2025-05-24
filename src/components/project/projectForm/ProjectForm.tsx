import GenericForm from "@/components/reusable/GenericForm";
import { BaseFormProps, Project, FormField } from "@/types/cv";

const projectFields: FormField<Project>[] = [
  {
    key: "title",
    label: "Title",
    type: "text",
    placeholder: "Project title",
  },
  {
    key: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Project description",
  },
  {
    key: "technologies",
    label: "Technologies",
    type: "textarea",
    placeholder: "Project technologies",
  },
  {
    key: "link",
    label: "Link",
    type: "text",
    placeholder: "Project link",
  },
];

type ProjectFormProps = Omit<
  BaseFormProps<Project, "project">,
  "fields" | "entityType"
>;

export default function ProjectForm(props: ProjectFormProps) {
  return (
    <GenericForm<Project, "project">
      {...props}
      fields={projectFields}
      entityType="project"
    />
  );
}
