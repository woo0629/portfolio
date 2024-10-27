"use client";

import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

interface FormData {
  name?: string;
  email?: string;
  message?: string;
}
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormdata] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { name?: string; email?: string; message?: string } = {};

    // 각 필드에 대해 검증
    if (!formData.name) {
      newErrors.name = "*이름을 입력해 주세요.";
    }
    if (!formData.email) {
      newErrors.email = "*이메일을 입력해 주세요.";
    }
    if (!formData.message) {
      newErrors.message = "*메시지를 입력해 주세요.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICEID as string,
        process.env.NEXT_PUBLIC_TEMPLATEID as string,

        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_PUBLICKET
      )

      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("메세지가 전송되었습니다.");

          setFormdata({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("메세지 전송실패");
        }
      );
  };

  return (
    <div className="bg-customBlue">
      <div className=" mx-auto max-w-5xl  bg pt-10 px-8 lg:px-0">
        <h1 className="text-4xl font-bold mb-6 lg:mb-0">Contact Me</h1>
        <div className="flex justify-between">
          <div className="hidden lg:block ">
            <div className="flex my-3 items-center text-sm">
              <MdOutlineEmail className="w-8 h-8 mr-1" />
              fr.jeong0629@gmail.com
            </div>
            <div className="flex items-center text-sm">
              <MdOutlinePhoneIphone className="w-8 h-8 " />
              010-2376-1394
            </div>
          </div>
          <form
            onSubmit={sendEmail}
            className="flex flex-col  w-full lg:w-2/3 ml-0 lg:ml-8"
          >
            <label className="block mb-2  ">
              <div className="flex justify-between items-center">
                Name
                {errors.name && (
                  <span className="text-xs text-red-500 text-end">
                    {errors.name}
                  </span>
                )}
              </div>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="성함"
                className="mt-1 block text-sm w-full px-2  py-2 border border-customFromBorder bg-customBlue rounded-md focus:border-blue-500 focus:outline-none "
              />
            </label>
            <label className="block mb-2">
              <div className="flex justify-between items-center">
                Email
                {errors.email && (
                  <span className="text-xs text-red-500 ">{errors.email}</span>
                )}{" "}
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="abc@gmail.com"
                onChange={handleChange}
                className="mt-1 block w-full text-sm px-2 py-2 border border-customFromBorder bg-customBlue rounded-md focus:border-blue-500 focus:outline-none "
              />
            </label>

            <label className="flex  flex-col h-56 ">
              <div className="flex justify-between items-center">
                Message
                {errors.message && (
                  <span className="text-xs text-red-500">{errors.message}</span>
                )}{" "}
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="내용을 입력해주세요"
                className="  mt-1 block w-full  h-full border text-sm px-2 py-2 border-customFromBorder bg-customBlue rounded-md focus:border-blue-500 focus:outline-none "
              ></textarea>
            </label>

            <div className="flex justify-end pt-3">
              <button
                type="submit"
                className="flex w-24 py-2  text-xs justify-center font-bold border border-gray-500 text-white rounded-xl "
              >
                메일전송
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
