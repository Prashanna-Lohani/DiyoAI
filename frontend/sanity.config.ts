"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { SINGLETON_IDS, structure } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Diyo AI",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "create new" menu.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_IDS.includes(schemaType)),
  },
  document: {
    // Singletons can be edited and published, never duplicated or deleted.
    actions: (input, { schemaType }) =>
      SINGLETON_IDS.includes(schemaType)
        ? input.filter(
            ({ action }) =>
              action && ["publish", "discardChanges", "restore"].includes(action),
          )
        : input,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
