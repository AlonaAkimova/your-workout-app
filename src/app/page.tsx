"use client";
import Image from "next/image";
import mainImage from "../images/main-img.jpg";
import phoneImage from "../images/iPhone-12-Mockup.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { MarkEmailUnread } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden h-screen relative">
        <Image src={mainImage} layout="fill" objectFit="cover" alt="" />
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="text-white text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Create your daily workout and meal plan
            </h1>
          </div>
          <div className="relative lg:flex lg:items-center">
            <Image
              src={phoneImage}
              width={300}
              height={600}
              alt="Phone Image"
              className="mx-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center lg:static lg:mx-0">
              <Box mb={2}>
                <MarkEmailUnread sx={{ fontSize: "3rem" }} />
              </Box>
              <Typography variant="h6" component="p" mb={2}>
                Start today
              </Typography>
              <div className="flex flex-row gap-4">
                <Link
                  href="/user"
                  className="bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg"
                >
                  Login
                </Link>
                <Link
                  href="/"
                  className="bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
