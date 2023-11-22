"use client";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Features from "./components/features";
import About from "./components/about";
import Stats from "./components/stats";
// import Testimonial from "./components/testimonial";
// import Blog from "./components/blog";
// import Team from "./components/team";
// import Clients from "./components/clients";
// import Login from "./components/login";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Features />
      <About />
      <Stats />

      {/* <Testimonial />
      <Blog />
      <Team />
      <Clients />
      <Login /> */}
      <Footer />
    </main>
  );
}
