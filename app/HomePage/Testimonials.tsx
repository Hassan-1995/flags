import { LuStar, LuStarHalf } from "react-icons/lu";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import ImageCarousel from "../components/ImageCarousel";

const Testimonials = () => {
  const CustomerImages = [
    "/Customer_01.jpg",
    "/Customer_02.jpg",
    "/Customer_03.jpg",
    "/Customer_04.jpg",
    "/Customer_05.jpg",
    "/Customer_06.jpg",
    "/Customer_07.jpg",
    "/Customer_08.jpg",
    "/Customer_09.jpg",
    "/Customer_10.jpg",
  ];

  return (
    <section className="py-16 bg-white">
      {/* Testimonials Heading & Cards */}
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-12 text-slate-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md rounded-xl bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <LuStar key={i} className="h-5 w-5 fill-current" />
                  ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                &quot;The quality of VIP FLAGS&apos; products is exceptional. We
                ordered custom flags for our corporate event, and they exceeded
                our expectations.&quot;
              </p>
              <div className="font-semibold text-slate-800">
                - Ahmed Khan, Event Manager
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-xl bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <LuStar key={i} className="h-5 w-5 fill-current" />
                  ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                &quot;Fast delivery and impeccable craftsmanship. The attention
                to detail on our custom-designed flags was remarkable.&quot;
              </p>
              <div className="font-semibold text-slate-800">
                - Fatima Malik, School Principal
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-xl bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <LuStar key={i} className="h-5 w-5 fill-current" />
                  ))}
                <LuStarHalf className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                &quot;We&apos;ve been ordering our national flags from VIP FLAGS
                for years. Their durability and color retention are unmatched in
                the market.&quot;
              </p>
              <div className="font-semibold text-slate-800">
                - Zain Ali, Government Official
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mt-20 px-4 md:px-6 mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-8 text-slate-800">
          Our Valued Customers
        </h2>
        <div className="relative w-full overflow-hidden">
          <ImageCarousel images={CustomerImages} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
