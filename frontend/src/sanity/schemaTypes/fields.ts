import { defineArrayMember, defineField } from "sanity";

import type { IconName } from "@/content/types";

type Opts = {
  description?: string;
  rows?: number;
  required?: boolean;
  initialValue?: string | number | boolean;
};

export const string = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "string",
    description: o.description,
    initialValue: o.initialValue as string | undefined,
    validation: o.required ? (r) => r.required() : undefined,
  });

export const text = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "text",
    rows: o.rows ?? 3,
    description: o.description,
    validation: o.required ? (r) => r.required() : undefined,
  });

export const number = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "number",
    description: o.description,
    initialValue: o.initialValue as number | undefined,
    validation: o.required ? (r) => r.required() : undefined,
  });

export const boolean = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "boolean",
    description: o.description,
    initialValue: (o.initialValue as boolean | undefined) ?? false,
  });

export const image = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    description: o.description,
    fields: [
      defineField({
        name: "alt",
        title: "Alternative text",
        type: "string",
        description: "Describe the image for screen readers.",
      }),
    ],
    validation: o.required ? (r) => r.required() : undefined,
  });

export const select = (
  name: string,
  title: string,
  list: { title: string; value: string }[],
  o: Opts = {},
) =>
  defineField({
    name,
    title,
    type: "string",
    options: { list, layout: "dropdown" },
    description: o.description,
    initialValue: o.initialValue as string | undefined,
  });

export const ICON_OPTIONS: { title: string; value: IconName }[] = [
  { title: "Chat bubble", value: "message" },
  { title: "Chip / AI", value: "cpu" },
  { title: "Layout", value: "layout" },
  { title: "Phone", value: "phone" },
  { title: "Globe", value: "globe" },
  { title: "Flag", value: "flag" },
  { title: "Microphone", value: "mic" },
  { title: "Document", value: "file" },
  { title: "Speaker", value: "volume" },
  { title: "Briefcase", value: "briefcase" },
  { title: "People", value: "users" },
  { title: "Shield", value: "shield" },
];

export const icon = (name = "icon", title = "Icon") =>
  select(name, title, ICON_OPTIONS);

/** `{ label, href }` link object. */
export const link = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "object",
    description: o.description,
    options: { columns: 2 },
    fields: [
      string("label", "Label"),
      string("href", "Link", {
        description:
          "Page anchor (#services), path (/about) or full URL (https://…).",
      }),
    ],
  });

/** Array of simple strings, drag-sortable. */
export const stringList = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "array",
    of: [defineArrayMember({ type: "string" })],
    description: o.description,
  });

/** Array of objects; `preview` picks the row title shown in the Studio list. */
export const objectList = (
  name: string,
  title: string,
  fields: ReturnType<typeof defineField>[],
  preview: { title: string; subtitle?: string; media?: string },
  o: Opts = {},
) =>
  defineField({
    name,
    title,
    type: "array",
    description: o.description,
    of: [
      defineArrayMember({
        type: "object",
        fields,
        preview: {
          select: preview,
        },
      }),
    ],
  });
