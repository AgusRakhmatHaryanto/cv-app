"use client";

import { useEffect, useState, FormEvent } from "react";
import { BaseFormProps, WithId } from "@/types/cv";

export default function GenericForm<T, K extends string>(
  props: BaseFormProps<T, K>
) {
  const { onSuccess, fields, entityType } = props;
  const item = props[entityType];

  const [formData, setFormData] = useState<Partial<T>>({});

  useEffect(() => {
    if (item) {
      setFormData(item);
    } else {
      const empty: Partial<T> = {};
      fields.forEach((field) => {
        empty[field.key] = "" as unknown as T[typeof field.key];
      });
      setFormData(empty);
    }
  }, [item, fields]);

  const handleChange = (key: keyof T, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const method = item ? "PUT" : "POST";
    const url = item
      ? `/api/${entityType}/${(item as WithId<T>).id}`
      : `/api/${entityType}`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      {fields.map((field) => (
        <div key={String(field.key)}>
          {field.type === "textarea" ? (
            <textarea
              value={(formData[field.key] as string) || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              placeholder={field.placeholder || field.label}
              className="border p-2 w-full"
            />
          ) : (
            <input
              type={field.type || "text"}
              value={(formData[field.key] as string) || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              placeholder={field.placeholder || field.label}
              className="border p-2 w-full"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {item ? "Update" : "Add"} {entityType}
      </button>
    </form>
  );
}
