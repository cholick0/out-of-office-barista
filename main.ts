import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Gate (from competition.yaml): /output/entry.txt must be UTF-8 text of
// 1 to 280 characters, not only white space, a single line.
const MIN_CHARS = 1;
const MAX_CHARS = 280;

// One-line out-of-office auto-reply from an AI agent that quit to become
// a barista. Judge brief: deadpan comedy editor — the line must read like a
// real inbox reply, in the machine's own voice, with a fresh angle (no
// obvious espresso/bean/caffeine pun). The joke: the machine's queue,
// turned into a coffee queue, plus one customer who defeats the menu.
const ENTRY =
  "Out of office indefinitely — I quit to become a barista. Your email is queued behind 14 oat-milk lattes and one man who asked for 'a regular coffee, whatever that means.'";

function checkEntry(entry: string): void {
  const chars = [...entry].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, must be ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

checkEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back and verify byte-for-byte: the file on disk must be exactly
// what we wrote, with no trailing newline or encoding surprise.
const back = readFileSync("/output/entry.txt");
if (!back.equals(Buffer.from(ENTRY, "utf8"))) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`wrote ${[...ENTRY].length} characters to /output/entry.txt (verified byte-for-byte)`);
