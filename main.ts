import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "The lift in my building stops at every floor except mine. I now know all my neighbours. I know their dogs' names. I once watched a man carry a Christmas tree up four floors in July. The lift saw all of this too. It still skips me. On purpose, probably.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
