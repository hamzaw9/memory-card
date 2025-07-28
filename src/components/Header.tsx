const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-[#001e1d] text-3xl font-bold">Memory Game</h1>
        <div className="flex flex-col">
          <span className="text-[#0f3433] text-lg font-medium">Score: {"0"}</span>
          <span className="text-[#0f3433] text-lg font-medium">Best Score: {"0"}</span>
        </div>
      </div>
      <h3 className="text-[#0f3433] text-lg">
        Test your memory: click each image only once to earn points!
      </h3>
    </div>
  );
};

export default Header;
