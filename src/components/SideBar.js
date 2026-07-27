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

export default function SideBar({ isOpen, onClose,theme }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`w-50 fixed left-0 top-0 h-screen ${theme==="light" ? "bg-white": "bg-gray-800"} flex flex-col pb-8 pt-3.5 shadow-md z-50 transform transition-transform duration-200 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image src="/images/logo.png" alt="logo" width={140} height={140} className="pl-4" />
       
        <div className="w-full text-left pl-4 pt-6">
          <p className={`text-[14px] ${theme==="light" ? "text-gray-500" :"text-gray-200"} mt-3`}>Main</p>
          <Link
            href="/"
            className="mt-2 flex items-center gap-1.5 rounded-full px-1.5 py-0.5 w-full"
          >
            <House size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Dashboard</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
          </Link>
          <Link
            href="/userinterface"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Lightbulb size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>User Interface</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`} />
          </Link>
          <Link
            href="/advancedui"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Wallpaper size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Advanced UI</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`} />
          </Link>
          <Link
            href="/forms"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <SquarePen size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Forms</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`} />
          </Link>
          <Link
            href="/charts"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <ChartPie size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Charts</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
          </Link>
          <Link
            href="/table"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Table2 size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Tables</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`} />
          </Link>
          <p className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Extra</p>
          <Link
            href="/maps"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Map size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Maps</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
          </Link>
          <Link
            href="/calender"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <CalendarDays size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Calender</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`} />
          </Link>
          <Link
            href="/pages"
            className="mt-3 flex items-center gap-1.5 rounded-full px-1.5 py-0.5"
          >
            <Layers size={14} className={`${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
            <span className={`text-[13px] ${theme==="light" ? "text-gray-500" :"text-gray-200"}`}>Pages</span>
            <ChevronRight size={12} className={`ml-14 ${ theme === "light" ? "text-gray-500" : "text-gray-200"}`}/>
          </Link>
        </div>
      </aside>
    </>
  );
}
