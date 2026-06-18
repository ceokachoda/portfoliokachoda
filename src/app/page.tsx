import { CinematicShell } from "@/components/layout/cinematic-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema, websiteSchema, organizationSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[personSchema, websiteSchema, organizationSchema]} />
      <CinematicShell />
    </>
  );
}
