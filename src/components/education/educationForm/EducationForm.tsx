import GenericForm from "@/components/reusable/GenericForm";
import { BaseFormProps, FormField, Education } from "@/types/cv";

const educationFields: FormField<Education>[] = [
    {
        key:"name",
        label:"Name",
        type:"text",
        placeholder:"Your full name"
    },
    {
        key:"location",
        label:"Location",
        type:"text",
        placeholder:"Your location"
    },
    {
        key:"from",
        label:"From",
        type:"date",
        placeholder:"From"
    },
    {
        key:"to",
        label:"To",
        type:"date",
        placeholder:"To"
    },
    {
        key:"major",
        label:"Major",
        type:"text",
        placeholder:"Your major"
    },
    {
        key:"degree",
        label:"Degree",
        type:"text",
        placeholder:"Your degree"
    },
    {
        key:"gpa",
        label:"GPA",
        type:"text",
        placeholder:"Your GPA"
    },
    {
        key:"description",
        label:"Description",
        type:"textarea",
        placeholder:"Your description"
    }
]

type EducationFormProps = Omit<
  BaseFormProps<Education, "education">,
  "fields" | "entityType"
>;

export default function EducationForm(props: EducationFormProps) {
    return (
        <GenericForm<Education, "education">
            {...props}
            fields={educationFields}
            entityType="education"
        />
    );
}