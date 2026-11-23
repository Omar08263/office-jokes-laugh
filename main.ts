import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One-line office joke, 107 characters / 109 bytes, verified against the gate:
// UTF-8 text of 1 to 199 characters, a single line, not only whitespace.
// The joke turns twice: first the meeting about the out-of-office itself,
// then the calendar saying yes while the manager says no. The em dash is
// part of the joke's punctuation and counts as one character (3 bytes).
const JOKE =
  "I put my out-of-office on for a meeting about my out-of-office — the calendar accepted, my manager did not.";

if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-199 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
chmodSync("/output/entry.txt", 0o644);
