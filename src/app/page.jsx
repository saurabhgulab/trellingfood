"use client";

import Logo from "./images/logo.png";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Features from "./components/features";
import About from "./components/about";
import Stats from "./components/stats";
import Testimonial from "./components/testimonial";
import Blog from "./components/blog";
import Team from "./components/team";
import Clients from "./components/clients";
import Login from "./components/login";

export default function Home() {
  return (
    <main>
      {/* <div className="m-0 p-0 b-0 flex justify-center lg:items-stretch lg:justify-start md:items-stretch md:justify-start sm:items-stretch sm:justify-start">
        <Image height={200} width={300} src={Logo} alt="Your Company" />
      </div> */}
      <Navbar />
      <Banner />
      <About />
      <Stats />
      <Features />
      <Testimonial />
      <Blog />
      <Team />
      <Clients />
      <Login />
      <Footer />
    </main>
  );
}
