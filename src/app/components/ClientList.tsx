const ClientList: React.FC = () => {
    const clients = ["Livia Bator", "Randy Press", "Workman"];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Top Clients</h3>
        <div className="grid grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <img
                src="/ava3.svg"
                alt={client}
                className="w-12 h-12 mx-auto rounded-full mb-2"
              />
              <p>{client}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ClientList;
  