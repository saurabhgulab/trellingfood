import Image from "next/image";
import image1 from "../images/Black Recruitment Hiring Graphic Designer Instagram Post.png";
import image2 from "../images/Blue Modern Illustrated Digital Marketing Agency Instagram Post.png";
import image3 from "../images/Blue and Purple Gradient Bold Music Festival Event Instagram Post.png";
import image4 from "../images/Branding Agency Services Instagram Post.png";
import image5 from "../images/Brown and White Four-Panel Storyboard.png";
import image6 from "../images/Dark Blue and Yellow Gradient Modern Digital Marketing Agency Facebook Post.png";
import image7 from "../images/Dark Green and Orange Illustrative Web Design Facebook Post.png";
import image8 from "../images/E-commerce Workshop.png";

export default function strip1() {
  return (
    <div className="strip-1 my-4 bg-emerald-100 relative isolate flex items-center overflow-hidden p-6 sm:px-3.5 sm:before:flex-1">
      <div className="wrapper">
        <div>
          <Image
            className="bg-emerald-400 border border-solid rounded-md itemLeft item1"
            src={image1}
            alt="image1"
          />
        </div>
        <div>
          <Image
            className="bg-emerald-400 rounded-md itemLeft item2"
            src={image2}
            alt="image1"
          />
        </div>
        <div>
          <Image
            className="bg-emerald-400 rounded-md itemLeft item3"
            src={image3}
            alt="image1"
          />
        </div>
        <div>
          <Image
            className="bg-emerald-400 rounded-md itemLeft item4"
            src={image4}
            alt="image1"
          />
        </div>
        <div>
          <Image
            className="bg-emerald-400 rounded-md itemLeft item5"
            src={image5}
            alt="image1"
          />
        </div>
        <div>
          <Image
            className="bg-emerald-400 rounded-md itemLeft item6"
            src={image6}
            alt="image1"
          />
        </div>
        <div>
          <Image
            className="bg-emerald-400 rounded-md itemLeft item7"
            src={image7}
            alt="image1"
          />
        </div>
        <div>
          <Image
            className="bg-emerald-400 rounded-md itemLeft item8"
            src={image8}
            alt="image1"
          />
        </div>
      </div>
    </div>
  );
}
