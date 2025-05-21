import type { Shadows } from "@mui/material";

const shadow: Shadows = [
  "none",
  "0px 1px 3px rgba(0,0,0,0.12)",
  "0px 1px 5px rgba(0,0,0,0.2)",
  "0px 1px 8px rgba(0,0,0,0.3)",
  "0px 2px 4px rgba(0,0,0,0.12)",
  "0px 3px 6px rgba(0,0,0,0.16)",
  "0px 3px 8px rgba(0,0,0,0.2)",
  "0px 4px 10px rgba(0,0,0,0.25)",
  "0px 6px 12px rgba(0,0,0,0.3)",
  "0px 8px 14px rgba(0,0,0,0.35)",
  "0px 10px 16px rgba(0,0,0,0.4)",
  ...Array(15).fill("none"),
] as Shadows;

export default shadow;
