import { useState } from "react";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";

function App() {
  const [clickedImages, setClickedImages] = useState<number[]>([]);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleCurrentImage = (id: number) => {
    if (!clickedImages.includes(id)) {
      if (gameOver) {
        setGameOver(false);
        setClickedImages([id]);
      } else {
        setClickedImages([...clickedImages, id]);
      }
    } else {
      setBestScore(clickedImages.length);
      setClickedImages([]);
      setGameOver(true);
    }
  };

  return (
    <div className="bg-[#abd1c6] min-h-screen">
      <Header score={clickedImages.length} bestScore={bestScore} />
      <ImageCard handleCurrentImage={handleCurrentImage} gameOver={gameOver} />
    </div>
  );
}

export default App;
