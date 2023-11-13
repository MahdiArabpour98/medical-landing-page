import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-16 h-16 p-3 border border-first-text rounded-full flex items-center justify-center cursor-pointer">
      <Image src="/navbar/Horse.svg" alt="" width={30} height={30} />
    </div>
  );
};

export default Logo;
