import Image from "next/image";

interface HeroBannerProps {
  desktopImage: string;
  mobileImage: string;
  subtitle: string;
  title: string;
  desktopTextWidth?: string;
}

export default function HeroBanner({
  desktopImage,
  mobileImage,
  subtitle,
  title,
  desktopTextWidth = "2xl:w-[50%] w-[55%]",
}: HeroBannerProps) {
  return (
    <>
      {/* Desktop Banner */}
      <section className="hidden lg:block">
        <div className="w-full h-[20rem] relative">
          <Image
            src={desktopImage}
            className="absolute inset-0 w-full h-full object-cover"
            alt={subtitle}
            fill
            priority
          />
          <div
            className={`${desktopTextWidth} top-[24%] px-5 lg:px-10 xl:pl-24 xl:pr-[4.75rem] h-fit text-white-text flex flex-col gap-4 absolute`}
          >
            <p className="text-base uppercase tracking-widest font-semibold">
              {subtitle}
            </p>
            <h1 className="text-[2.375rem] leading-[3.25rem] md:text-5xl md:leading-[4rem] font-bold">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Mobile Banner */}
      <Image
        className="lg:hidden block h-full w-full"
        src={mobileImage}
        alt={subtitle}
        width={800}
        height={400}
        priority
      />

      <div className="lg:hidden block flex flex-col px-5 bg-background-gray py-8">
        <p className="text-xs uppercase leading-[1.25rem] tracking-widest text-white-text mb-4">
          {subtitle}
        </p>
        <h1 className="text-[2.375rem] font-bold text-white-text leading-[3.25rem]">
          {title}
        </h1>
      </div>
    </>
  );
}
