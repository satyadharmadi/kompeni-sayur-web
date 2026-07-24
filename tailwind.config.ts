import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { forest: "#2E7D32", leaf: "#66BB6A", mist: "#A5D6A7", ink: "#1A1A1A" }, fontFamily: { sans: ["var(--font-poppins)", "sans-serif"] } } }, plugins: [] } satisfies Config;
