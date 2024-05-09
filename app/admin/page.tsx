"use client";
import { HiArrowSmallUp, HiArrowLongDown } from "react-icons/hi2";
import { LineChart, PieChart } from "@mui/x-charts";

const page = () => {
  return (
    <main>
      <div className="flex items-center">
        <div className="h-[250px] w-[350px] shadow-md ml-10">
          <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10  text-[#555]">
            Revenue
          </span>
          <div className="flex items-center justify-center mt-3">
            <span className="font-semibold">$500</span>
          </div>
          <div>
            <div className="flex items-center justify-center mt-3">
              <HiArrowSmallUp className="text-3xl text-green-700" />
              <HiArrowLongDown className="text-3xl text-red-700" />
            </div>

            <div className="flex items-center justify-center mt-3">
              <span>Compared to the last month</span>
            </div>
          </div>
        </div>
        <div className="h-[250px] w-[350px] shadow-md ml-10">
          <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10  text-[#555]">
            Users
          </span>

          <div className="flex items-center justify-center mt-3">
            <span className="font-semibold">10000</span>
          </div>

          <div>
            <div className="flex items-center justify-center mt-3">
              <HiArrowSmallUp className="text-3xl text-green-700" />
              <HiArrowLongDown className="text-3xl text-red-700" />
            </div>

            <div className="flex items-center justify-center mt-3">
              <span>Compared to the last month</span>
            </div>
          </div>
        </div>
        <div className="h-[250px] font-semibold w-[350px] shadow-md ml-10">
          <span className="flex items-center justify-center text-xl cursor-pointer mt-10 text-[#555]">
            Statistics
          </span>
          <div className="flex items-center justify-center mt-3">
            <span className="font-semibold">500</span>
          </div>
          <div>
            <div className="flex items-center justify-center mt-3">
              <HiArrowSmallUp className="text-3xl text-green-700" />
              <HiArrowLongDown className="text-3xl text-red-700" />
            </div>

            <div className="flex items-center justify-center mt-3">
              <span>Compared to the last month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center shadow-md m-10">
        <LineChart
          className="flex w-full"
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>

      <div className="flex items-center">
        <div className="h-[400px] w-[500px] shadow-xl m-5">
          <h3 className="pl-10 font-semibold text-xl">Recent users</h3>
          <ul className="space-y-10 p-10">
            <li> James Kagunga</li>
            <li>Alok Mondala</li>
            <li>Aliphonza Muthoni</li>
            <li>Jason Derulo</li>
          </ul>
        </div>
        <div className="h-[400px] w-[500px] shadow-xl m-5">
          <h3 className="pl-10 font-semibold text-xl">Recent Transaction</h3>
          <ul className="space-y-10 p-10">
            <li>James - $450</li>
            <li>Alok - $500</li>
            <li>Aliphonza - $1000</li>
            <li>Jason - $4000</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default page;
