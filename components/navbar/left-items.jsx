import { BsTelephoneInbound, BsBagHeart } from "react-icons/bs";
import { FaBusinessTime } from "react-icons/fa";

const navbarLeftItems = [
  {
    title: "تماس با ما",
    icon: <BsTelephoneInbound className="text-first-text" />,
  },
  {
    title: "داستان ما",
    icon: <BsBagHeart className="text-first-text" />,
  },
  {
    title: "مدیکال تایمز",
    icon: <FaBusinessTime className="text-first-text" />,
  },
];

const LeftItems = () => {
  return (
    <ul className="flex gap-x-10">
      {navbarLeftItems.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-x-3 text-textSecondary cursor-pointer relative group text-sm"
        >
          <span className="text-sm text-third-text group-hover:text-first-text transition-all duration-300">
            {item.title}
          </span>
          <span>{item.icon}</span>
        </li>
      ))}
    </ul>
  );
};

export default LeftItems;
