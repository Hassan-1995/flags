import { LuCircleCheckBig } from "react-icons/lu";
import Badge from "../components/Badge";

const IntroductionSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white flex justify-evenly">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pakistan&apos;s Premier Flag Manufacturer
            </h2>
            <p className="mt-4 text-muted-foreground">
              Since 2000, VIP FLAGS has been crafting premium quality flags with
              meticulous attention to detail and unwavering commitment to
              excellence. Based in Karachi, Pakistan, we take pride in our
              heritage and bring the same patriotic dedication to every flag we
              produce.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our state-of-the-art manufacturing facility combines traditional
              craftsmanship with modern technology to create flags that stand
              the test of time. From national flags to custom corporate banners,
              we deliver products that represent your identity with dignity and
              pride.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Badge
                variant="outline"
                className="flex items-center gap-1 px-3 py-1"
              >
                <LuCircleCheckBig className="h-4 w-4" /> ISO Certified
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center gap-1 px-3 py-1"
              >
                <LuCircleCheckBig className="h-4 w-4" /> Make in Pakistan
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center gap-1 px-3 py-1"
              >
                <LuCircleCheckBig className="h-4 w-4" /> Premium Quality
              </Badge>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            {/* Video */}
            <video
              src="/Flag_Ceremony.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-transparent bg-opacity-100 flex items-center justify-center">
              <p className="text-zinc-600 text-xl font-semibold text-center px-4">
                Ceremony of getting <br /> Guinness World Record
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
