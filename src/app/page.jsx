import Footer from "./components/footer";
import Banner from "./components/banner";
import Features from "./components/features";
import About from "./components/about";
import Service from "./components/service";
import Contact from "./components/contact";
import Strip1 from "./components/strip1";
import Strip2 from "./components/strip2";

// import Testimonial from "./components/testimonial";
// import Login from "./components/login";
// import Blog from "./components/blog";

// import Clients from "./components/clients";

export default function Home() {
  return (
    <>
      <main className="bg-emerald-500">
        <Banner />
        <Strip2 />
        <Features />
        <Strip1 />
        <About />
        <Strip1 />

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
