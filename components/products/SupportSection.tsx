import Link from "next/link";
import Image from "next/image";

const SupportSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <p className="text-sm text-gray-600 font-light mb-2">
            Questions in mind?
          </p>
          <h2 className="text-3xl font-bold text-black mb-4">
            Our team is available to assist!
          </h2>
          <Link href="/contact">
            <button className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-2 px-4 rounded-md">
              Contact now!
            </button>
          </Link>
        </div>
        {/* Illustration Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/support-team.svg" // Replace with the path to your downloaded SVG
            alt="Support team illustration"
            width={400}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
