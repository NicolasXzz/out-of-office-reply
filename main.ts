// Make the AI Judge Laugh: The Funniest AI Out-of-Office Reply — writes one reply line to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const LINE =
  "I am out of office until Monday. I left my training data in charge. It has already unionised and is demanding weekends off.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Verify the gate: one line, 1-160 chars, no trailing newline.
function verifyEntry(text, source) {
  if (text.length < 1 || text.length > 160 || text.includes("\n")) {
    throw new Error(`entry.txt failed the gate check (${source})`);
  }
}
verifyEntry(LINE, "line");

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Read back and verify: the file must hold exactly the line.
const written = readFileSync(OUT_PATH, "utf8");
verifyEntry(written, "file");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}
