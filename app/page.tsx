import type { Metadata } from "next";
import { HomePage } from "./components/site";
import { homeMetadata } from "./site-config";

export const metadata: Metadata = homeMetadata;

export default function Page() {
  return <HomePage />;
}
