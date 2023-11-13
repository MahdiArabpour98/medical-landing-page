import Image from "next/image";

const customersItems = [
  {
    title: "d",
    image: "/customers/1.webp",
  },
  {
    title: "a",
    image: "/customers/2.webp",
  },
  {
    title: "a",
    image: "/customers/3.webp",
  },
  {
    title: "a",
    image: "/customers/4.webp",
  },
  {
    title: "a",
    image: "/customers/5.webp",
  },
  {
    title: "a",
    image: "/customers/6.webp",
  },
  {
    title: "a",
    image: "/customers/7.webp",
  },
  {
    title: "a",
    image: "/customers/8.webp",
  },
  {
    title: "a",
    image: "/customers/9.webp",
  },
  {
    title: "a",
    image: "/customers/10.webp",
  },
  {
    title: "a",
    image: "/customers/11.webp",
  },
  {
    title: "a",
    image: "/customers/12.webp",
  },
  {
    title: "a",
    image: "/customers/13.webp",
  },
  {
    title: "a",
    image: "/customers/14.webp",
  },
  {
    title: "a",
    image: "/customers/15.webp",
  },
  {
    title: "a",
    image: "/customers/16.webp",
  },
];

const CustomersPage = () => {
  return (
    <div className="page bg-bgPrimary pt-32 pb-10 px-10">
      <div className="flex flex-col gap-y-5">
        <div className="flex gap-x-5">
          <div className="h-20 w-[0.5px] bg-white rounded-md" />
          <div className="flex flex-col gap-y-1">
            <h2 className="text-3xl font-semibold text-first-text">خدمات مدیکال استراتژیست</h2>
            <h4 className="text-first-text/80 text-lg">خدمات تخصصی حوزه پزشکی</h4>
          </div>
        </div>
        <div className="px-32 w-full grid grid-cols-4 gap-x-20">
          {customersItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between relative ${
                index === 15 && "animate-pulse"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                width={360}
                height={280}
                className="hover:scale-110 transition-all duration-300"
              />
              {index !== 3 && index !== 7 && index !== 11 && index !== 15 && (
                <div className="h-16 w-[0.5px] bg-first-text rounded-md absolute -left-9" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
