import Image from "next/image";
import backgroundImage from "../images/xcsfdsfdasdasdsa.svg";
const links = [
  { name: "Web Design", href: "/" },
  { name: "Development", href: "/" },
  { name: "Branding", href: "/" },
  { name: "Ecommerce", href: "/" },
  { name: "Marketing", href: "/" },
  { name: "SEO", href: "/" },
];

const about = () => {
  return (
    <>
      <div
        className="relative isolate overflow-hidden py-24 sm:py-32"
        id="about-body"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="p-2 text-4xl font-bold tracking-tight text-emerald-500 sm:text-6xl">
              Our Services
            </h2>
            <p className="max-w-2xl m-auto p-2 font-sans lg:mb-4 md:text-lg lg:text-xl text-white">
              A comprehensive onboarding process assures exceptional service,
              nurturing enduring client partnerships, leading to lucrative
              business collaborations and long-term success
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-emerald-500 text-transform: uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  Business Execution
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  Strategic Campaign Implementation, Agile Optimization Tactics,
                  Personalized Client Support - Essential services delivering
                  seamless execution for your business triumph!
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-emerald-500 text-transform: uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  Business Consultancy
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  Tailored Subscription Plans, Guaranteed ROI Analytics,
                  Scalable Marketing Solutions - Unmissable services ensuring
                  continuous growth and profitability!
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-emerald-500 text-transform: uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Business Monitoring
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  Real-time Analytics Monitoring, Performance Metrics Tracking,
                  Actionable Insights - Crucial services ensuring continuous
                  business vigilance and growth trajectory refinement!
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-emerald-500 text-transform: uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Business Branding
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  The process of creating a distinct identity for a business in
                  the minds of your target audience and the general population.
                  At its core, branding consists of a company's name and logo,
                  visual identity design, mission, values, and tone of voice.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
