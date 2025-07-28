import { useState, useEffect } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
}

const ImageCard = () => {
  const [images, setImages] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setImages(data.results.slice(0, 12));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading images...</div>;

  return (
    <div className="flex flex-wrap justify-center sm:justify-between gap-5 p-5">
      {images.map((character) => (
        <div 
          key={character.id} 
          className="w-[280px] h-[350px] flex flex-col items-center p-2 bg-[#004643] rounded-2xl hover:shadow-[0_0_40px_#b8860b] transition-shadow duration-300"
        >
          <div className="flex justify-center items-center w-full h-[265px] overflow-hidden">
            <img 
              src={character.image} 
              alt={character.name}
              className="max-w-[265px] max-h-[265px] rounded-[15px] object-cover"
            />
          </div>
          <div className="mt-3 w-full px-2">
            <p className="text-center font-medium text-[#fffffe] truncate font-lobster text-xl"><strong>{character.name}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;