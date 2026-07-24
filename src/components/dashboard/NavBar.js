import { Mail } from "lucide-react";
import { Bell } from "lucide-react";
import { User } from "lucide-react";

export default function NavBar({}) {
  return (
    <nav className="bg-[#43495c] h-14 w-full flex items-center justify-between">
      <div className="text-white text-lg font-semibold px-6">Dashboard</div>
      <div className="flex items-center gap-6 px-6">
        <div className="relative">
          <Mail size={20} className="text-white"></Mail>
            <span
                className="
                absolute
                -top-2
                -right-2
                h-4
                w-4
                rounded-full
                bg-red-500
                text-white
                text-[10px]
                flex
                items-center
                justify-center
                font-semibold
            "
            >
                5
            </span>
        </div>
        <div className="relative">
          <Bell size={20} className="text-white"></Bell>
                <span
                    className="
                        absolute
                        -top-2
                        -right-2
                        h-4
                        w-4
                        rounded-full
                        bg-green-500
                        text-white
                        text-[10px]
                        flex
                        items-center
                        justify-center
                        font-semibold
                    "
                    >
                    3
                </span>
        </div>
        <div className="h-9 w-9 rounded-full bg-gray-200 flex justify-center items-center">
            <User></User>
        </div>
      </div>
    </nav>
  );
}
