import Hero from "@/components/hero";

import homeImg from "pubilic/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    ></Hero>
  );
}
