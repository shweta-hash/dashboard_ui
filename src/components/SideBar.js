"use client";

import {
  CalendarDays,
  ChartPie,
  ChevronRight,
  CircleDot,
  House,
  Layers,
  Lightbulb,
  Map,
  SquarePen,
  Table2,
  Wallpaper,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SideBar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`w-50 fixed left-0 top-0 h-screen bg-white flex flex-col  pb-8 pt-3.5 shadow-md z-50 transform transition-transform duration-200 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image src="/images/logo.png" alt="logo" width={140} height={140} className="pl-4" />
        {/* <div className="mt-2"> */}
          {/* <Image
            src="/images/avtar2.webp"
            alt="avatar"
            width={60}
            height={60}
            className="rounded-full"
          /> */}
        {/* </div> */}
        {/* <h2 className="mt-4 text-ml font-bold text-gray-800">User 1</h2>
        <button className="mt-2 flex items-center gap-1 rounded-full border border-gray-400 bg-white px-1.5 py-0.5">
          <CircleDot size={10} color="#3f835c" />
          <span className="text-[10px] text-gray-400">Online</span>
        </button> */}
        <div className="w-full text-left pl-4 pt-6">
          <p className="text-[14px] text-gray-500  mt-3">Main</p>
          <Link
            href="/"
            className="mt-2 flex items-center gap-1.5 rounded-full px-1.5 py-0.5 w-full"
          >
            <House color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">Dashboard</span>
            <ChevronRight color="#6B7280" size={12} className="ml-14" />
          </Link>
          <Link
            href="/userinterface"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Lightbulb color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">User Interface</span>
            <ChevronRight color="#6B7280" size={12} className="ml-9.5" />
          </Link>
          <Link
            href="/advancedui"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Wallpaper color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">Advanced UI</span>
            <ChevronRight color="#6B7280" size={12} className="ml-11.5" />
          </Link>
          <Link
            href="/forms"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <SquarePen color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">Forms</span>
            <ChevronRight color="#6B7280" size={12} className="ml-21" />
          </Link>
          <Link
            href="/charts"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <ChartPie color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">Charts</span>
            <ChevronRight color="#6B7280" size={12} className="ml-20.5" />
          </Link>
          <Link
            href="/table"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Table2 color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">Tables</span>
            <ChevronRight color="#6B7280" size={12} className="ml-20.5" />
          </Link>
          <p className="text-[14px] text-gray-500  mt-3">Extra</p>
          <Link
            href="/maps"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Map color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">Maps</span>
            <ChevronRight color="#6B7280" size={12} className="ml-22" />
          </Link>
          <Link
            href="/calender"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <CalendarDays color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">Calender</span>
            <ChevronRight color="#6B7280" size={12} className="ml-17" />
          </Link>
          <Link
            href="/pages"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Layers color="#6B7280" size={14} />
            <span className="text-[13px] text-gray-500">Pages</span>
            <ChevronRight color="#6B7280" size={12} className="ml-21.5" />
          </Link>
        </div>
      </aside>
    </>
  );
}
