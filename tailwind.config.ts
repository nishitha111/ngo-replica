import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme:{extend:{colors:{forest:"#164A35",sage:"#DCE7D8",cream:"#FBF8F0",gold:"#C89D55",ink:"#1C2C25"},boxShadow:{soft:"0 14px 45px rgba(22,74,53,.10)"}}}, plugins:[] } satisfies Config;
