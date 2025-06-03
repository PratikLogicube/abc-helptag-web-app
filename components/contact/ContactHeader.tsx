import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const ContactHeader = () => {
  return (
    <div className="bg-gray-100 text-black py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Breadcrumb */}
        <div className="mb-4 flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Contact</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header Text */}
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-sm text-gray-600 font-light">
          Have a question in mind? Call / WhatsApp directly or fill out the form
          and let us know how we can help.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
