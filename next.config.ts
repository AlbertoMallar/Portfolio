import type { NextConfig } from "next";
import { defaultLocale } from "./src/lib/locales";

const nextConfig: NextConfig = {
  redirects() {
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: false }];
  },
};

export default nextConfig;
