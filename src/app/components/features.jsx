import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChartPieIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import featuresImage from "../images/eb680f8bdc4031227e8ce78ee2a2d46b.svg";
const data = [
  {
    name: "Planning Strategy :",
    description:
      "Outline a comprehensive business plan that includes target market analysis, services offered, pricing strategy, and growth projections.",
    icon: LockClosedIcon,
  },
  {
    name: "Design & Development :",
    description:
      "Develop a professional website that showcases your services, portfolio, team, testimonials, and contact information.",
    icon: ServerIcon,
  },
  {
    name: "Launch Successfully :",
    description:
      "Implement a marketing strategy for your agency. Utilize digital channels such as social media, content marketing, and email campaigns to generate leads.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Client Relationship :",
    description:
      "Regularly communicate with clients to ensure their needs are met and expectations are exceeded. A robust onboarding process to provide exceptional customer service to build long-term relationships.",
    icon: ChartPieIcon,
  },
];

const features = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <Image
              src={featuresImage}
              alt="featuresImage"
              className="m-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:auto lg:auto"
              width={400}
              height={200}
            />
          </div>
          <div className="lg:max-w-lg">
            <p className="p-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Have an idea but need help with development?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team can take you from concept to real-life product.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {data.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;
