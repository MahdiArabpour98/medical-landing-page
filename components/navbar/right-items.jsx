import Link from "next/link";
import { BsBagPlus } from "react-icons/bs";
import { CgShutterstock } from "react-icons/cg";

const navbarRightItems = [
  {
    title: "خدمات ما چیست",
    href: "",
    menue: [
      {
        title: "طراحی سایت پزشکی",
        href: "",
      },
      {
        title: "خدمات سایت پزشکی",
        href: "",
      },
      {
        title: "تولید محتوا پزشکی",
        href: "",
      },
      {
        title: "خدمات بصری پزشکی",
        href: "",
      },
    ],
    icon: <BsBagPlus className="text-first-text" />,
  },
  {
    title: "ما به چه کسانی خدمات میدهیم",
    href: "",
    menue: [
      {
        title: "پزشکان",
        href: "",
      },
      {
        title: "دندان پزشکان",
        href: "",
      },
      {
        title: "روان شناسان",
        href: "",
      },
      {
        title: "دامپزشکان",
        href: "",
      },
      {
        title: "مجموعه های آزمایشگاهی",
        href: "",
      },
    ],
    icon: <CgShutterstock className="text-first-text" />,
  },
];

const RightItems = () => {
  return (
    <ul className="flex gap-x-10">
      {navbarRightItems.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-x-3 text-textSecondary cursor-pointer relative group text-sm"
        >
          <span className="group-hover:z-20">{item.icon}</span>

          <span className="text-sm text-third-text group-hover:text-first-text group-hover:z-20 transition-all duration-300">
            {item.title}
          </span>
          <div
            className="text-sm w-56 shadow-md rounded-md absolute top-10 group-hover:-top-2 -right-2 bg-white gap-y-6 px-5 pb-5 
          pt-10 group-hover:z-10 flex flex-col transition-all duration-300 invisible group-hover:visible opacity-0 group-hover:opacity-100
          "
          >
            {item.menue.map((menueItem, menueIndex) => (
              <Link
                key={menueIndex}
                href={menueItem.href}
                className="text-gray-700 hover:text-first-text transition-all duration-300"
              >
                {menueItem.title}
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RightItems;
