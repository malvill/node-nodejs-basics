import { dirname } from "path";
import { fileURLToPath } from "url";

export function getDirname(url) {
    const __filename = fileURLToPath(url);

    return dirname(__filename);
}