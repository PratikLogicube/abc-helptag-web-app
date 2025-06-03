import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-black py-6 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Tagline */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            Life is unpredictable, Protect It!{" "}
            <span className="text-red-500">♥</span>
          </p>
        </div>

        {/* Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">LINKS</h3>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/about" className="hover:text-gray-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/shipping-refund" className="hover:text-gray-600">
                Shipping & Refund
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-600">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-600">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">CONTACT US</h3>
          <p className="text-sm">
            <a
              href="mailto:contact@myhelptag.com"
              className="text-cyan-400 hover:underline"
            >
              contact@myhelptag.com
            </a>
          </p>
          <p className="text-sm">
            Call -{" "}
            <a href="tel:8208493820" className="hover:text-gray-600">
              820 8493 820
            </a>
          </p>
          <p className="text-sm">
            <a
              href="https://whatsapp.com"
              className="text-green-400 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2">SOCIAL</h3>
          <div className="flex space-x-3">
            <a
              href="https://facebook.com"
              className="p-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              className="p-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              className="p-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              className="p-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
