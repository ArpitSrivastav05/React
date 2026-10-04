import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="bg-white rounded-full p-2 m-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
          </div>
          <div className="bg-white rounded-full p-2 m-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
          <div className="bg-white rounded-full p-2 m-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
          </div>
          <div className="bg-white rounded-full p-2 m-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
          <div className="bg-white rounded-full p-2 m-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
