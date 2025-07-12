import Hero from "@/components/hero";
import performanceImg from "pubilic/performance.jpg";

export default function PerfomancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="We server high performance applications"
    ></Hero>
  );
}
