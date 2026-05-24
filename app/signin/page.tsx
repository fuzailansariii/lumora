import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import signingimg from "./signinimg/sigingimg.jpeg";
import lumoralogo from "./signinimg/logo lumora.jpeg";

const Signinup: React.FC = () => {
  const handleCreateAccount = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    alert("Create Account Clicked!");
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg">

        {/* Left Image Section */}
        <div className="relative h-[350px] md:h-auto">

          {/* Background Image */}
          <Image
            src={signingimg}
            alt="Signing"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Lumora Logo Image */}
          <div className="absolute top-6 left-6 z-10">
            <Image
              src={lumoralogo}
              alt="Lumora Logo"
              width={220}
              height={70}
              priority
              className="object-contain"
            />
          </div>

          {/* Left Text */}
          <div className="absolute bottom-16 left-6 text-white px-4 z-10">
            <h1 className="text-3xl md:text-5xl font-serif leading-tight">
              Your memories
              <br />
              deserve a
              <br />
              beautiful home.
            </h1>

            <p className="mt-6 text-xs tracking-widest">
              © LUMORA COLLECTIVE 2026
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-[#f6f2eb] p-8 md:p-14 flex flex-col justify-center">
          <h2 className="text-3xl font-serif text-[#1f1f1f]">
            Join the Collective
          </h2>

          <p className="text-sm text-gray-500 mt-2 mb-8">
            Create and keep your wedding memories.
          </p>

          <form
            className="space-y-4"
            onSubmit={handleCreateAccount}
          >
            {/* Full Name */}
            <div>
              <label className="text-xs uppercase text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Every Tone"
                className="w-full mt-1 px-4 py-3 border bg-white outline-none rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs uppercase text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@gmail.com"
                className="w-full mt-1 px-4 py-3 border bg-white outline-none rounded-md"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs uppercase text-gray-500">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full mt-1 px-4 py-3 border bg-white outline-none rounded-md"
              />
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-[#c8a66a] text-black py-3 tracking-widest text-sm mt-2 rounded-md hover:bg-[#b89658] transition cursor-pointer"
            >
              CREATE ACCOUNT
            </button>
          </form>

          {/* Divider */}
          <div className="text-center my-6 text-gray-400 text-sm">
            OR CONTINUE WITH
          </div>

          {/* Google Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="border py-3 px-8 bg-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              <FcGoogle size={22} />
              Google
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?
            <span className="text-[#c8a66a] ml-1 cursor-pointer hover:underline">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signinup;