import Layout from "@/components/Layout";
import ProfilePage from "@/components/Profile/ProfilePage";
import { SECTIONS } from "@/constants/constants";
import { useRouter } from "next/router";
import React from "react";

const SectionRoute: React.FC = () => {
  const router = useRouter();
  const { section } = router.query;

  /**
   * Wait until the router is ready
   */
  if (router.isFallback || typeof section !== "string") {
    return null;
  }

  const initialSection = SECTIONS.find((s) => s === section);

  return (
    <Layout>
      <ProfilePage initialSection={initialSection} />
    </Layout>
  );
};

export default SectionRoute;
