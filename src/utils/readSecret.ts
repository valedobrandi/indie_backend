import * as fs from 'fs';

function readSecret(secretPath: string, defaultValue: string): string {
  try {
    return fs.readFileSync(secretPath, 'utf8').trim();
  } catch (err) {
    return defaultValue;
  }
}

export default readSecret;