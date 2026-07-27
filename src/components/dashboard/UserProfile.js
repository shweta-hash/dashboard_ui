"use client";

import { CircleDot, LogOut } from "lucide-react";
import Image from "next/image";

export default function UserProfile() {
    return (
      <div className="bg-white h-45 w-50 rounded-lg shadow-lg border border-gray-200 p-5 pt-2 m-2">
        <div>
          <div className="pl-13 mt-3">
            <Image
              src="/images/avtar2.webp"
              alt="profile"
              height={45}
              width={45}
            ></Image>
          </div>
          <div>
            <h2 className=" text-[13px] font-medium text-gray-700 mt-3 pl-5">
              Username: <span className=" text-gray-500"> User1</span>
            </h2>
            <h2 className=" text-[13px] font-medium text-gray-700 mt-1">
              Email: <span className=" text-gray-500"> User1@gmail.com</span>
            </h2>
          </div>
          <div>
            {/* <div className="pl-14 mt-3">
              <button className="mt-2 flex items-center gap-1 rounded-full border border-gray-400 bg-white px-1.5 py-0.5">
                <CircleDot size={10} color="#3f835c" />
                <span className="text-[10px] text-gray-400">Online</span>
              </button>
            </div> */}
            <div className="pl-10 mt-3">
              <button className="mt-2 flex items-center gap-1 border border-gray-300 rounded-sm  bg-white px-1.5 py-0.5">
                <LogOut size={13} color="#6B7280" />
                <span className="text-[13px] text-gray-400">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}