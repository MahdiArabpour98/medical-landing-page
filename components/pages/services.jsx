"use client";

import Link from "next/link";
import { useState } from "react";
import { SiSecurityscorecard } from "react-icons/si";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

const buttonItems = [
  {
    buttonTitle: "طراحی وبسایت پزشکی",
    href: "",
    title: "سایت پزشکی، آیندهٔ حرفهٔ شما.",
    options: [
      {
        title: "بر اساس استاندارد های سئو",
      },
      {
        title: "خدمات 12 ماهه",
      },
    ],
    text: "تحقیقات نشان داده است که امروزه روز بیش از ۶۰ درصد مراجعان، برای دریافت خدمات پزشکی و زیبایی قبل از اولین مراجعهٔ حضوری، در اینترنت جست‌وجو می‌کنند؛ و همین‌طور اولین نقطهٔ تماس پزشکان برای خرید تجهیزات پزشکی و مصرفی با شرکت‌های تأمین‌کنندهٔ آن، وب‌سایت آن‌هاست. بیش از یک‌میلیارد وب‌سایت در سراسر جهان وجود دارد. یعنی در ازای هر هفت‌نفر یک وب‌سایت! شما در این رقابت فوق حساس کجا هستید؟",
    subbuttons: [
      {
        title: "طراحی سایت پزشکی",
        href: "",
      },
      {
        title: "دریافت مشاوره رایگان",
        href: "",
      },
    ],
  },
  {
    buttonTitle: "سیو وبسایت پزشکی",
    href: "",
    options: [
      {
        title: "گزارشات ماهانهٔ شفاف",
      },
      {
        title: "هدف‌گذاری مخصوص افزایش مراجع",
      },
    ],
    title: "پرواز بر فراز آشیانهٔ گوگل!",
    text: "خدمات سئو یا همان بهبود جایگاه وب‌سایت شما در رتبه‌بندی گوگل. در حوزه‌هایی که با اطلاعات پزشکی و دارویی، خدمات درمانی و زیبایی، سلامت جسمی و روانی، و به‌طور کلی سرنوشت یک انسان (Your Money Your Life) سروکار دارند، موتورهای جست‌وجو فاکتورها و الگوریتم‌های پیچیده‌تری را برای سنجش اعتبار یک سایت لحاظ می‌کنند. دقیقا همین‌جا است که جای خالی یک متخصص برای افزایش محبوبیت بین موتورهای جست‌وجو احساس می‌شود.",
    subbuttons: [
      {
        title: "طراحی سایت پزشکی",
        href: "",
      },
      {
        title: "دریافت مشاوره رایگان",
        href: "",
      },
    ],
  },
  {
    buttonTitle: "هویت بصری پزشکی",
    href: "",
    title: "درست و دقیق به چشم می‌آیید!",
    options: [
      {
        title: "طراحان آکادمیک و حرفه‌ای",
      },
      {
        title: "طراحی شخصی‌سازی شده",
      },
    ],
    text: "هویت بصری نشان‌دهنده ماهیت حرفه‌ای شماست. یک‌پارچگی هویت بصری، لازمهٔ شروع فعالیت‌های حرفه‌ای یک مجموعه در دنیای سلامت و درمان است. خدمات هویت بصری از طراحی لوگو برای ماندگاری در ذهن‌ها تا کاتالوگ برای شناخت بهتر محصولات. از کارت نوبت‌دهی تا بروشور مراقبت‌های بعد از درمان؛ همگی توسط طراحان متخصص ما برای حفظ این یک‌پارچگی انجام می‌شود تا در نهایت، مجموعه در بالاترین سطح خود به فعالیت ادامه دهد.",
    subbuttons: [
      {
        title: "طراحی سایت پزشکی",
        href: "",
      },
      {
        title: "دریافت مشاوره رایگان",
        href: "",
      },
    ],
  },
  {
    buttonTitle: "اینستاگرام پزشکی",
    href: "",
    title: "پرطرفدارترین شبکهٔ اجتماعی ایرانیان.",
    options: [
      {
        title: "استراتژی دقیق و هدفمند",
      },
      {
        title: "تبلیغات و اینفلوئنسر مرتبط",
      },
    ],
    text: "اینستاگرام مارکتینگ در کنار دانش تخصصی و شناخت دقیق پلتفرم، به زمان و صبر زیادی نیز نیاز دارد. تمام ویژگی‌هایی که گفته شده در اینستاگرام مارکتینگ پزشکی، به دلیل حساسیت‌های آن پررنگ‌تر است. شما با ما یک متخصص اینستاگرام مارکتینگ در اختیار دارید که به معرفی بهتر خدمات و تجهیزات شما مشغول است. متخصصان اینستاگرام مارکتینگ همواره برای رشد شما تلاش می‌کنند، حتی زمانی که شما در خواب هستید.",
    subbuttons: [
      {
        title: "طراحی سایت پزشکی",
        href: "",
      },
      {
        title: "دریافت مشاوره رایگان",
        href: "",
      },
    ],
  },
];

const swiperItems = [
  {
    title: "طراحی وبسایت تجهیزات پزشکی",
    image: "/services-swiper/1.jpg",
  },
  {
    title: "اینستاگرام و تولید محتوای پزشکی",
    image: "/services-swiper/2.jpg",
  },
  {
    title: "طراحی و چاپ کارت ویزیت پزشکی",
    image: "/services-swiper/3.jpg",
  },
];

const ServicesPage = () => {
  const [service, setService] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const nextSlide = () => {
    swiper.slideNext();
  };
  const prevSlide = () => {
    swiper.slidePrev();
  };

  return (
    <div className="page bg-white pt-32 pb-10 px-10 flex flex-col gap-y-10">
      <div className="flex w-full gap-x-5 items-center">
        <div className="w-[30%] flex gap-x-5">
          <div className="h-20 w-[0.5px] bg-first-text rounded-md" />
          <div className="flex flex-col gap-y-1">
            <h2 className="text-3xl font-semibold text-second-text">خدمات مدیکال استراتژیست</h2>
            <h4 className="text-first-text text-lg">خدمات تخصصی حوزه پزشکی</h4>
          </div>
        </div>
        <div className="w-[70%] flex gap-x-3 items-center">
          {buttonItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setService(index)}
              className={`w-1/4 py-4 bg-second-text text-first-text rounded-md flex items-center justify-center
              hover:bg-[#205A51] hover:text-white transition-all duration-300 cursor-pointer
              ${index === service && "text-white bg-[#205A51]"}
              `}
            >
              {item.buttonTitle}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-x-10 w-full">
        <div className="w-5/12 h-[90%]">
          <Swiper
            onSwiper={(s) => setSwiper(s)}
            spaceBetween={10}
            grabCursor={true}
            loop={true}
            effect={"fade"}
            modules={[EffectFade]}
            className="projects-swiper h-full"
          >
            {swiperItems.map((item, index) => {
              return (
                <SwiperSlide key={index} className="relative">
                  <Image
                    src={item.image}
                    alt=""
                    width={480}
                    height={360}
                    className="w-full h-full rounded-md"
                  />
                  <div
                    className="w-11/12 absolute bottom-5 py-3 px-3 flex items-center justify-between bg-white bg-opacity-50 rounded-md
                  left-1/2 -translate-x-[50%]"
                  >
                    {item.title}
                    <div className="flex gap-x-3">
                      <div
                        onClick={() => nextSlide()}
                        className="p-2 text-white bg-first-text cursor-pointer"
                      >
                        <BsChevronRight />
                      </div>
                      <div
                        onClick={() => prevSlide()}
                        className="p-2 text-white bg-first-text cursor-pointer"
                      >
                        <BsChevronLeft />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-7/12">
          <div className="flex flex-col gap-y-7">
            <h3 className="text-3xl font-semibold text-first-text">{buttonItems[service].title}</h3>
            <p className="text-sm text-gray-500 leading-7 text-justify">
              {buttonItems[service].text}
            </p>
            <div className="flex gap-x-40 text-gray-500 text-base">
              <div className="flex gap-x-3 items-center">
                <SiSecurityscorecard />
                <span>{buttonItems[service].options[0].title}</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <SiSecurityscorecard />
                <span>{buttonItems[service].options[1].title}</span>
              </div>
            </div>
            <div className="flex gap-x-5">
              <Link
                href=""
                className="w-2/5 flex justify-center items-center text-second-text text-base h-16 border border-second-text rounded-md
                hover:text-first-text hover:border-first-text transition-all duration-300"
              >
                {buttonItems[service].subbuttons[0].title}
              </Link>
              <Link
                href=""
                className="w-2/5 flex justify-center items-center text-second-text text-base h-16 border border-second-text rounded-md
                hover:text-first-text hover:border-first-text transition-all duration-300"
              >
                {buttonItems[service].subbuttons[1].title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
