"use client";
import Image from "next/image";
import contactImage from "../images/contact-image.jpg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const Swal = require("sweetalert2");
  const [loading, setLoading] = useState(false);
  const handleChage = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: "Success!",
            text: "Our team will connect within 24-36 hours.",
            icon: "success",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          Swal.fire({
            title: "Something went wrong!",
            text: "Our team will connect within 24-36 hours.",
            icon: "error",
          });
        }
      );
  };
  return (
    <>
      <div className="w-auto m-auto bg-black">
        <div className="grid max-w-screen-xl m-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 rounded-xl">
          <div className="m-auto p-4 place-self-center lg:col-span-6 rounded-lg">
            <h1 className="max-w-2xl mb-8 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-emerald-500">
              Contact Us
            </h1>
            <div className="my-2">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                onChange={handleChage}
                className="flex flex-col gap-3"
              >
                <label className="text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-500">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  name="user_name"
                />
                <label className="text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-500">
                  Email:
                </label>
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  type="email"
                  placeholder="Johndoe@gmail.com"
                  name="user_email"
                />
                <label className="text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-500">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="I am interested in Website Development Service."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  value="Send"
                  className="my-4 flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Submit
                </button>
              </form>
            </div>
            <a
              href="tel:919810092808"
              className="text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-500"
            >
              <p className="max-w-2xl m-auto lg:mb-4 md:text-lg lg:text-xl">
                +91-9810092808
              </p>
            </a>

            <a
              href="mailto:trellingfood@gmail.com"
              className="text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-500"
            >
              <p className="max-w-2xl m-auto lg:mb-4 md:text-lg lg:text-xl">
                trellingfood@gmail.com
              </p>
            </a>
          </div>
          <div className="lg:m-6 object-center p-8 lg:col-span-6 lg:flex rounded-lg">
            <Image
              src={contactImage}
              alt="featuresImage"
              className="m-auto rounded-xl shadow-xl ring-2 ring-emerald-600 sm:w-[57rem] md:auto lg:auto"
              width={600}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
