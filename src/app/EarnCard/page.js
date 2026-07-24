import AreaChart from "@/components/AreaChart";
import BarChart from "@/components/BarChart";
import DoughnutChart from "@/components/DoughnutChart";
import EarningsCard from "@/components/EarningsCard";
import SideBar from "@/components/SideBar";

export default function EarnCard() {
  return (
    <div className="  bg-gray-300 ">
      <SideBar />
      <div className="p-5">
        <div className="flex flex-row gap-4 mb-4">
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
  );
}
