import AreaChart from "@/components/AreaChart";
import BarChart from "@/components/BarChart";
import CandidateTable from "@/components/dashboard/CandidatesTable";
import NavBar from "@/components/dashboard/NavBar";
import StatsCard from "@/components/dashboard/StatsCard";
import DoughnutChart from "@/components/DoughnutChart";
import EarningsCard from "@/components/EarningsCard";
import SideBar from "@/components/SideBar";
import { ShoppingCart, DollarSign, Box, Bitcoin } from "lucide-react";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />

      <div className="flex-1 pl-50">
        <NavBar />

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatsCard
              icon={<ShoppingCart size={24} color="#f87171" />}
              title="Total Sales"
              value="15852"
              income="$22506"
              percentage="10.25%"
              bgColor="bg-white"
              textColor="text-red-400"
              cardWidth="w-full"
              cardHeight="h-40"
              iconBg="bg-gray-100"
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
              bgColor="bg-green-400"
              textColor="text-white"
              cardWidth="w-full"
              cardHeight="h-40"
              iconBg="bg-white"
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
              bgColor="bg-white"
              textColor="text-yellow-400"
              cardWidth="w-full"
              cardHeight="h-40"
              iconBg="bg-gray-100"
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
              bgColor="bg-cyan-600"
              textColor="text-white"
              cardWidth="w-full"
              cardHeight="h-40"
              iconBg="bg-white"
              titleTextColor="text-white"
              incomeTextColor="text-white"
              percentageTextColor="text-white"
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <EarningsCard
              title="Email Sent"
              stats={[
                { value: 3652, label: "Marketplace" },
                { value: 5421, label: "Last week" },
                { value: 9652, label: "Last Month" },
              ]}
            >
              <AreaChart />
            </EarningsCard>

            <EarningsCard
              title="Revenue"
              stats={[
                { value: 5248, label: "Marketplace" },
                { value: 321, label: "Last week" },
                { value: 964, label: "Last Month" },
              ]}
            >
              <BarChart />
            </EarningsCard>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <CandidateTable />
            </div>

            <EarningsCard
              title="Monthly Earnings"
              stats={[
                { value: 3654, label: "Marketplace" },
                { value: 954, label: "Last week" },
                { value: 8462, label: "Last Month" },
              ]}
            >
              <DoughnutChart title="Ethereum" value={42} />
            </EarningsCard>
          </div>
        </div>
      </div>
    </div>
  );
}
