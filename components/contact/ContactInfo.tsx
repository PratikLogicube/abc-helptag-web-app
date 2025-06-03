import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className=" text-black py-8 w-full">
      <div className="container mx-auto px-4 space-y-8">
        {/* WhatsApp / Call Us Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-400" />
            <h3 className="text-lg font-bold">WHATSAPP / CALL US</h3>
          </div>
          <p className="text-sm text-gray-600 font-light">
            Please feel free to WhatsApp us anytime. We will respond as soon as
            possible.
          </p>
          <p className="text-lg font-semibold">820 8493 820</p>
          <div className="flex space-x-4">
            <a
              href="https://whatsapp.com"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 rounded hover:bg-green-700 text-white"
            >
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:8208493820"
              className="flex items-center space-x-2 px-4 py-2 border border-blue-400 rounded hover:bg-blue-400 hover:text-gray-900"
            >
              <span>Call</span>
            </a>
          </div>
        </div>

        {/* Email Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-purple-400" />
            <h3 className="text-lg font-bold">EMAIL</h3>
          </div>
          <p className="text-sm text-gray-600 font-light">
            For any Product related query or after sales issues, please email us
            –
          </p>
          <p className="text-sm">
            <a
              href="mailto:contact@myhelptag.com"
              className="text-purple-400 hover:underline"
            >
              contact@myhelptag.com
            </a>
          </p>
          <p className="text-sm text-gray-600 font-light">
            For backdrop any corporate or bulk orders –
          </p>
          <p className="text-sm">
            <a
              href="mailto:business@myhelptag.com"
              className="text-purple-400 hover:underline"
            >
              business@myhelptag.com
            </a>
          </p>
        </div>

        {/* Address Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-purple-400" />
            <h3 className="text-lg font-bold">ADDRESS</h3>
          </div>
          <p className="text-sm text-gray-600 font-light">
            Pune – 1, Kirti Nagar, Vadgaon BK, Pune, 411041
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
