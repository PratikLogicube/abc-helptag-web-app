import { auth } from "@/auth";
import React from "react";

const Home = () => {
  const session = auth();

  console.log({ session });

  return <div>Home</div>;
};

export default Home;
