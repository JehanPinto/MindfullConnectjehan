interface StatsCardProps {
    title: string;
    value: string | number;
    bgColor: string;
  }
  
  const StatsCard: React.FC<StatsCardProps> = ({ title, value, bgColor }) => {
    return (
      <div className={`p-4 rounded-lg shadow-md ${bgColor}`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
  