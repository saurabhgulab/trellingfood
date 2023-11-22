const data = [
  { id: 1, name: "Delivered", value: "300+ Projects" },
  { id: 2, name: "Under construction", value: "50+ Assets" },
  { id: 3, name: "Added monthly", value: "100+ Clients" },
  { id: 4, name: "Consultancy", value: "24*7 Customer" },
];

const stats = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {data.map((stat) => (
            <div
              key={stat.id}
              className="m-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default stats;
