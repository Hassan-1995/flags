import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";

const CallToAction = () => {
  return (
    <section className="py-12 md:py-16 bg-green-600 text-white">
      <div className="container px-4 md:px-6 text-center mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Ready to Order Your Custom Flags?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you need national flags, corporate banners, or custom designs,
          we&apos;re here to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            text="Shop Now"
            size="xl"
            textColor="text-green-600"
            bgColor="bg-white"
            hoverColor="hover:bg-zinc-200"
            href="/"
          />
          <Button
            text="Get a Quote"
            size="xl"
            textColor="text-white"
            bgColor="bg-tranparent"
            hoverColor="hover:bg-zinc-900"
            // onClick={() => alert("Extra Large clicked")}
            href="/"
          />
        </div>
      </div>

      <div className="container mt-16 px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <LuMapPin className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl text-black font-bold mb-2">Visit Us</h3>
              <p className="text-green-600">
                Azeem Chambers, Hasan Ali Efandi Road, Karachi, Pakistan
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <LuPhone className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl text-black  font-bold mb-2">Call Us</h3>
              <p className="text-green-600">+92 21 32624757</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <LuMail className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl text-black font-bold mb-2">Email Us</h3>
              <p className="text-green-600">info@vipflags.pk</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    // </section>
  );
};

export default CallToAction;
