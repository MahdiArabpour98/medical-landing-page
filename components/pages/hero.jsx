import Image from "next/image";
import Link from "next/link";
import { BiSolidCheckCircle } from "react-icons/bi";

const HeroPage = () => {
  return (
    <div className="page bg-bgPrimary pb-10 px-20 flex gap-x-5">
      <div className="flex flex-col gap-y-10 w-1/2 mt-32">
        <h1 className="text-first-text text-4xl font-semibold leading-normal">
          مدیکال استراتژیست
          <br />
          تنها آژانس مدیکال مارکتینگ ایران
        </h1>
        <p className="text-base text-third-text leading-8">
          قطعهٔ گمشدهٔ تبلیغات در دنیای پزشکی. ما به عنوان تنها آژانس مدیکال مارکتینگ ایران، با تکیه
          بر تخصص و تجربهٔ سال‌ها همکاری با بهترین‌ها، مفهوم جدید بازاریابی و تبلیغات را به دنیای
          پزشکی وارد کرده‌ایم
        </p>
        <Link
          href=""
          className="text-sm flex gap-x-2 px-5 py-3 border border-first-text rounded-md items-center self-start
          hover:scale-105 transition-all duration-300"
        >
          <BiSolidCheckCircle className="text-first-text" />
          <span className="text-third-text">ورود به دنیای تبلیغات پزشکی</span>
        </Link>
      </div>
      <div className="w-1/2 mt-14">
        <Image src="/hero.png" alt="" width={720} height={1080} />
      </div>
    </div>
  );
};

export default HeroPage;
