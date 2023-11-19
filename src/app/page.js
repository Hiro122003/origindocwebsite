import Image from "next/image";
import Banner from './components/Banner'
import Attempt from "./components/Attempt";
import { motion } from 'framer-motion';
import Client from "./components/Client";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner/>
      <Client/>
      
      {/* <Attempt/> */}
    </div>
  );
}
