import Handoff from "handoff-app";
import { DocumentationObject, HookReturn } from "handoff-app/dist/types";
import fs from "fs";
import path from "path";

const handoff = new Handoff();

handoff.postIntegration(
  (documentationObject: DocumentationObject, data: HookReturn[]) => {
    return data;
  }
);
const exportedPath = path.join(
  handoff.workingPath,
  "exported",
  handoff.config.figma_project_id,
  "tokens"
);
const drupalPath = path.join(
  "web",
  "themes",
  "contrib",
  "bootstrap5",
  "scss",
  "handoff",
  "tokens"
);
handoff.fetch();
fs.rmSync(drupalPath, { recursive: true });
fs.renameSync(exportedPath, drupalPath);
