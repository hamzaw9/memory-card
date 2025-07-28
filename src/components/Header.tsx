const Header = ({ score, bestScore }: { score: number, bestScore: number }) => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#3e544e] to-[#abd1c6] flex items-center justify-between px-4">
        <h1 className="text-[#001e1d] text-3xl font-bold">Memory Game</h1>
        <div className="flex flex-col">
          <span className="text-[#0f3433] text-lg font-medium">Score: {score}</span>
          <span className="text-[#0f3433] text-lg font-medium">Best Score: {bestScore}</span>
        </div>
      </div>
      <h3 className="text-[#0f3433] text-lg px-4 mb-2">
        Test your memory: click each image only once to earn points!
      </h3>
    </>
  );
};

export default Header;
