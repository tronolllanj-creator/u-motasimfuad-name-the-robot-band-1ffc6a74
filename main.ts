// u-motasimfuad-name-the-robot-band-1ffc6a74: one funny robot band name + hit song, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
writeFileSync(join(dir, 'entry.txt'), "Ctrl Alt Defeat: Blue Screen of Music");
