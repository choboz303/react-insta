import { defineConfig } from "vitest/config"
import path from "node:path"
import packageJson from "./package.json" with { type: "json" }

export default defineConfig({
    test: {
        root: import.meta.dirname,
        name: packageJson.name,
        environment: "jsdom",
        typecheck: {
            enabled: true,
            tsconfig: path.join(import.meta.dirname, "tsconfig.json"),
        },
        globals: true,
        watch: false,
        setupFiles: ["./src/setupTests.ts"],
    },
})
