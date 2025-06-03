import Footer from "@/components/Footer";
import AllProducts from "@/components/products/AllProducts";
import SupportSection from "@/components/products/SupportSection";
import React from "react";

const Page = () => {
  return (
    <section className="py-10">
      <AllProducts />
      <SupportSection />
      <Footer />
    </section>
  );
};

export default Page;
