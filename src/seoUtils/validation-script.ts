// scripts/validate-metadata.ts
import { validateSeoMetadata } from "./metadataValidation";
import { metadata as en } from "../app/[lang]/locales/metadata/en"; // tu objeto

const res = validateSeoMetadata(en);
if (!res.ok) {
    console.error("❌ SEO Metadata inválido:");
    for (const e of res.errors) console.error(" -", e.path, "→", e.message);
    // process.exit(1);
} else {
    console.log("✅ SEO Metadata OK:", res.report);
}
