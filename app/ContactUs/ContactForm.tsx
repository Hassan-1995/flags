"use client";
import { TextArea, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert(`Form submitted: ${JSON.stringify(data)}`);
    reset();
  };
  return (
    <div>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root
          placeholder="Your name."
          size="3"
          radius="medium"
          {...register("name", { required: "Name is required." })}
        />
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}
        <TextField.Root
          placeholder="Your email."
          size="3"
          radius="medium"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
        <TextField.Root
          placeholder="Your contact number."
          size="3"
          radius="medium"
          {...register("phone", { required: "Phone number is required." })}
        />
        {errors.phone && (
          <p className="text-red-400 text-sm">{errors.phone.message}</p>
        )}
        <TextArea
          placeholder="Type your message here."
          size="3"
          rows={4}
          resize="vertical"
          radius="medium"
          {...register("message", {
            required: "Message is required.",
          })}
        />
        {errors.message && (
          <p className="text-red-400 text-sm">{errors.message.message}</p>
        )}

        <button
          type="submit"
          className="bg-green-500 w-full text-white px-4 py-2 rounded-xl hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
