import React from "react";

interface StatisticsCardProps {
  title: string;
  value: string | number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-blue-500">{value}</p>
    </div>
  );
};

export default StatisticsCard;
