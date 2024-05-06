import Handoff from "handoff-app";
import { DocumentationObject, HookReturn } from "handoff-app/dist/types";
import fs from "fs";
import path from "path";

// Instatiate Handoff
const handoff = new Handoff();

// Add custom files to build
handoff.postIntegration(
  (documentationObject: DocumentationObject, data: HookReturn[]) => {
    return data;
  }
);
// Create a source path
const exportedPath = path.join(
  handoff.workingPath,
  "exported",
  handoff.config.figma_project_id
);
// Create a destination path
const drupalPath = path.join(
  "web",
  "themes",
  "contrib",
  "bootstrap5",
  "scss",
  "handoff"
);

// Fetch the tokens
handoff.fetch();

// Remove the existing tokens if they exist
if (fs.existsSync(drupalPath)) {
  fs.rmSync(drupalPath, { recursive: true });
}

fs.renameSync(exportedPath, drupalPath);
