import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/Footer";
import React from "react";

const Page = () => {
  return (
    <div className="wrapper flex flex-col w-screen min-h-screen">
      <ContactHeader />
      <div className="container mx-auto px-4 flex-grow">
        <div className="contact-info-container flex">
          <ContactInfo />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
