import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Certif-Scope",
  description: "Learn more about Certif-Scope and how standardized CO₂ attestations improve compliance and procurement workflows.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Learn more about the mission behind Certif-Scope, our methodology, and how we support compliance, procurement and ESG verification."
      />

      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
