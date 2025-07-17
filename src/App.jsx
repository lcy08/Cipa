import { useState } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState({ top: '40%', left: '40%' });
  const [showLetter, setShowLetter] = useState(false);

  const buttonMessages = [
    "Are you sure? 😏",
    "Really sure? 😳",
    "Don't stop now, hehehe! 🥺",
    "Almost there! 💓",
    "Last one, I promise! 💘"
  ];

  const handleClick = () => {
  const newClickCount = clickCount + 1;

  if (newClickCount >= 5) {
      setShowLetter(true);
    } else {
      setClickCount(newClickCount);

      // Only move position after first click
      if (clickCount >= 0) {
        setPosition({
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 80}%`
        });
      }
    }
  };
  const renderButtonText = (text) => {
  return text.split(/(💖|💘|🥺|😳|😏|💓)/).map((part, i) =>
    ['💖', '💘', '🥺', '😳', '😏', '💓'].includes(part) ? (
      <span
        key={i}
        className="inline-block bg-white/70 px-1 rounded-md text-red-600"
      >
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};


  return (
    <div className="h-screen w-screen bg-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
      <h1 className="text-3xl font-bold text-red-600 mb-10">
        Open When You Need Me 💖
      </h1>

    {!showLetter ? (
        clickCount === 0 ? (
          // Static position for first render
          <button
            onClick={handleClick}
            className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 active:scale-95 mt-4"
          >
            {renderButtonText(buttonMessages[clickCount])}
          </button>
        ) : (
          // Absolutely positioned moving button
          <button
            onClick={handleClick}
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              transition: 'all 0.4s ease-in-out'
            }}
            className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 active:scale-95"
          >
            {renderButtonText(buttonMessages[clickCount])}
          </button>
        )
      ) : (
        <div className="max-w-md bg-white p-6 rounded-xl shadow-lg text-center animate-fade-in">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            My Letter to You
          </h2>
          <p className="text-gray-700 leading-relaxed">
            hewwooooo elion, happy 2 years anyversaryy
            I wuv you and I'll try to make you feel loved every single dayyyyy
            <br />
            💖
            <br />
            I miss you rn, hope u were hre or I was there
            Cuddling together with u, kissing and be weird together
            <br />
            😘
            <br />
            together with you make me feel AAAAAAAWWWWSEM
            Love you and Miss you and Miss your mole
            <br />
            😉

            <br /><br />
            With all my love,  
            <br />
            — Lucky 💌
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
