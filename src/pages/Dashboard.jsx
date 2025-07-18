import React, { useState } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const mockData = [
  { date: "11-Jul", CPR: 8.2, inquiries: 427, amount: 3500, roas: 1.5 },
  { date: "12-Jul", CPR: 6.8, inquiries: 510, amount: 4100, roas: 1.8 },
  { date: "13-Jul", CPR: 7.2, inquiries: 599, amount: 4600, roas: 2.1 },
  { date: "14-Jul", CPR: 6.5, inquiries: 386, amount: 3200, roas: 1.6 },
  { date: "15-Jul", CPR: 7.3, inquiries: 468, amount: 3900, roas: 1.9 },
  { date: "16-Jul", CPR: 7.4, inquiries: 483, amount: 3700, roas: 1.7 },
  { date: "17-Jul", CPR: 9.6, inquiries: 386, amount: 5000, roas: 2.5 },
];

export default function Dashboard() {
  const [selectedMetrics, setSelectedMetrics] = useState(["CPR", "inquiries", "amount", "roas"]);

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="flex justify-between items-center w-full col-span-2">
        <h1 className="text-2xl font-bold">ESCASI DailyAds</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded">Import Data</button>
          <button className="px-4 py-2 border rounded">Customize Metrics</button>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 bg-white shadow p-4 rounded-lg h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="right" dataKey="inquiries" fill="#fbbf24" name="No. Inquiries" />
            <Line yAxisId="left" type="monotone" dataKey="CPR" stroke="#ea580c" strokeWidth={3} name="CPR" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Target Summary</h2>
        <ul className="text-sm space-y-1">
          <li>Cost per Result: <strong>₱7.50</strong></li>
          <li>Amount Spent: <strong>₱30,000</strong></li>
          <li>ROAS: <strong>2.0</strong></li>
        </ul>
      </div>

      <div className="bg-white shadow p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Filter by Date</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <button className="bg-gray-100 px-4 py-2 rounded">Yesterday</button>
          <button className="bg-gray-100 px-4 py-2 rounded">Last 7 Days</button>
          <button className="bg-gray-100 px-4 py-2 rounded">Last 14 Days</button>
          <button className="bg-gray-100 px-4 py-2 rounded">This Month</button>
          <button className="bg-gray-100 px-4 py-2 rounded">Quarter</button>
          <button className="bg-gray-100 px-4 py-2 rounded">All Time</button>
        </div>
      </div>
    </div>
  );
}