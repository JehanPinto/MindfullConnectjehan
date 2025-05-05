const PieChart: React.FC = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">New Users</h3>
        <div className="h-40 bg-gray-200 rounded"></div>
        <p className="mt-2 text-center">
          <span className="text-blue-500 font-bold">63%</span> New Patients,{" "}
          <span className="text-purple-500 font-bold">37%</span> Previous Patients
        </p>
      </div>
    );
  };
  
  export default PieChart;
  