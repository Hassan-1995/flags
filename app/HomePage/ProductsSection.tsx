import Button from "../components/Button";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import SliderImage from "../components/SliderImage";

const ProductsSection = () => {
  const NationalFlags = [
    "/Pakistan_Flag.png",
    "/Pakistan_Table_Flag.png",
    "/Pakistan_Table_Flag_02.png",
  ];
  const CorporateFlags = [
    "/Corporate_Flag_01.png",
    "/Corporate_Flag_02.png",
    "/Corporate_Flag_03.png",
  ];
  const AccessoriesFlags = [
    "/Accessories_01.png",
    "/Accessories_02.png",
    "/Accessories_03.png",
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 flex justify-evenly">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-[200px]">
              <SliderImage images={NationalFlags} height="h-[200px]" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">National Flags</h3>
              <p className="text-muted-foreground mb-4">
                High-quality national flags from around the world, made with
                premium materials.
              </p>
              <Button
                className="w-full"
                text="Shop National Flag"
                textColor="text-white"
                bgColor="bg-black"
                hoverColor="hover:bg-zinc-800"
              />
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-[200px]">
              <SliderImage images={CorporateFlags} height="h-[200px]" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Corporate Flags</h3>
              <p className="text-muted-foreground mb-4">
                Custom-designed flags and banners for businesses and
                organizations.
              </p>
              <Button
                className="w-full"
                text="Shop Corporate Flags"
                textColor="text-white"
                bgColor="bg-black"
                hoverColor="hover:bg-zinc-800"
              />
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-[200px]">
              <SliderImage images={AccessoriesFlags} height="h-[200px]" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Accessories</h3>
              <p className="text-muted-foreground mb-4">
                Flag poles, stands, and other accessories to display your flags
                with pride.
              </p>
              <Button
                className="w-full"
                text="Shop Accessories"
                textColor="text-white"
                bgColor="bg-black"
                hoverColor="hover:bg-zinc-800"
              />
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center flex justify-center ">
          <Button
            className="w-2/5"
            text="View Full Gallery"
            textColor="text-white"
            bgColor="bg-black"
            hoverColor="hover:bg-zinc-800"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
