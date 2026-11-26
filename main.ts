// u-motasimfuad-name-the-robot-band-1ffc6a74: one funny robot band name + hit song, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const filePath = join(outDir, 'entry.txt');
const text = "Clippy and the Papercuts: It Looks Like You Are Dying";

writeFileSync(filePath, text, 'utf-8');
