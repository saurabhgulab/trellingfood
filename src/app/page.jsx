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

export default function Home() {
  return (
    <>
      <main>
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
    </>
  );
}
