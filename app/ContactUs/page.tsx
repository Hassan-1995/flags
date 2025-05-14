import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="bg-zinc-100 container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We&apos;d love to hear from you! Please fill out the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
          <ContactForm />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <LuMail className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@vipflags.pk</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <LuPhone className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+92 21 32624757</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <LuMapPin className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-medium">Office Address</h3>
                <p className="text-gray-600">
                  Azeem Chambers,
                  <br />
                  Hasan Ali Efandi Road,
                  <br />
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white rounded-lg border border-gray-100">
            <h3 className="font-medium mb-2">Office Hours</h3>
            <p className="text-gray-600">
              Monday - Saturday: 10:00 AM - 9:00 PM
            </p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
