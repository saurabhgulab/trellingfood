"use client";

// import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Features from "./components/features";
import About from "./components/about";
import Service from "./components/service";
import Contact from "./components/contact";
// import Testimonial from "./components/testimonial";
// import Login from "./components/login";
// import Blog from "./components/blog";

// import Clients from "./components/clients";

// import Dummy from "./components/dummy";

export default function Home() {
  return (
    <main>
      {/* <Dummy /> */}
      {/* <Navbar /> */}
      <Banner />
      <Features />
      <About />

      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Service />
      <Contact />
      {/* <Clients /> */}
      {/* <Login /> */}
      <Footer />
    </main>
  );
}
