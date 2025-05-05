const Header: React.FC = () => {
    return (
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <img
            src="/profile.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span>John Smith</span>
        </div>
      </header>
    );
  };
  
  export default Header;
  