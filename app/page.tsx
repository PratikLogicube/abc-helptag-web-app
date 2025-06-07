import { FaEnvelope, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ThumbsUp from "@/public/comingSoon/thumbs_up_glyph_style.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper p-14 w-full h-full">
      <div className="container m-auto h-[calc(100%_-_36px)] flex flex-col justify-around items-center text-center ">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image src={ThumbsUp} alt="Thumbs Up" className="w-24 h-24 mb-4" />
          <h3 className="uppercase mt-2 font-semibold">we&apos;re still</h3>
          <h1 className="text-8xl leading-28 mt-2 font-bold capitalize bg-gradient-to-r from-purple-500 to-violet-300 bg-clip-text text-transparent">
            cooking our website.
          </h1>

          <h4 className="text-3xl font-thin mt-7">
            We are going to launch our website Very Soon.
          </h4>
          <h4 className="text-3xl font-thin mt-4 ">Stay Tuned.</h4>

          <Button className="notify-btn hover:bg-white w-56 h-16 mt-10 rounded-full shadow-xl flex justify-center items-center capitalize cursor-pointer bg-white text-purple-500">
            <span className="bg-purple-500 p-4 rounded-full">
              <FaEnvelope className="stroke-white fill-white" />
            </span>
            <Link
              href="/contact"
              className="flex-1 flex justify-center items-center gap-2"
            >
              <p className="font-normal text-[1rem]">Contact Us</p>
              <ChevronRight />
            </Link>
          </Button>
        </div>
        <div className="social-media flex justify-center items-center gap-4">
          <div className="icon group bg-white w-fit rounded-full p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <FaYoutube className="fill-gray-400 transition-colors duration-300 group-hover:fill-black" />
          </div>
          <div className="icon group bg-white w-fit rounded-full p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <FaInstagram className="fill-gray-400 transition-colors duration-300 group-hover:fill-black" />
          </div>
          <div className="icon group bg-white w-fit rounded-full p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <FaWhatsapp className="fill-gray-400 transition-colors duration-300 group-hover:fill-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
