import fs from "fs";
import path from "path";

export const LOGO_BASE64 = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), "public/logo1.png"))
  .toString("base64")}`;
