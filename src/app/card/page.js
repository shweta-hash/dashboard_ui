import StatsCard from "@/components/dashboard/StatsCard";

import { ShoppingCart } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Box } from "lucide-react";
import { Bitcoin } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-8 flex gap-x-8">
      <StatsCard
        icon={<ShoppingCart size={24} color="#f87171" />}
        title="Total Sales"
        value="15852"
        income="$22506"
        percentage="10.25%"
        bgColor="bg-white-500"
        textColor="text-red-400"
        cardWidth= "w-80"
        cardHeight="h-40"
        iconBg= "bg-gray-100"
        titleTextColor="text-gray-500"
        incomeTextColor="text-gray-500"
        percentageTextColor="text-gray-500"
      />

      <StatsCard
        icon={<DollarSign size={24} color="#5fd47d" />}
        title="New Orders"
        value="956"
        income="$22506"
        percentage="10.25%"
        bgColor="bg-green-300"
        textColor="text-white"
        cardWidth= "w-80"
        cardHeight="h-40"
        iconBg= "bg-white"
        titleTextColor="text-white"
        incomeTextColor="text-white"
        percentageTextColor="text-white"
      />

      <StatsCard
        icon={<Box size={24} color="#fdc700" />}
        title="New Users"
        value="5210"
        income="$22506"
        percentage="10.25%"
        bgColor="bg-white-500"
        textColor="text-yellow-400"
        cardWidth= "w-80"
        cardHeight="h-40"
        iconBg= "bg-gray-100"
        titleTextColor="text-gray-500"
        incomeTextColor="text-gray-500"
        percentageTextColor="text-gray-500"
      />

      <StatsCard
        icon={<Bitcoin size={24} color="#8ec5ff" />}
        title="Unique Visitors"
        value="20544"
        income="$22506"
        percentage="10.25%"
        bgColor="bg-blue-300"
        textColor="text-white"
        cardWidth= "w-80"
        cardHeight="h-40"
        iconBg= "bg-white"
        titleTextColor="text-white"
        incomeTextColor="text-white"
        percentageTextColor="text-white"
      />


    </div>
  );
}