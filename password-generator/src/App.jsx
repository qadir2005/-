import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [range, setRange] = useState(6);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const [lowercase, setLowercase] = useState(false)
  const [upperCase, setUppercase] = useState(false)

  // Logic remains unchanged
  const passwordGenerator =useCallback( () => {
    let pas = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let num = "0123456789";
    let charac = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
    if(lowercase) str = str.toLowerCase()
     if(upperCase) str = str.toUpperCase() 
      if (numbers) str += num;
    if (characters) str += charac;

    for (let i = 0; i < range; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pas += str.charAt(charIndex);
    }

    setPassword(pas);
  },[range,characters,numbers,lowercase,upperCase]);
  useEffect(()=>{
    passwordGenerator(  )
  },[range,numbers,characters,lowercase,upperCase])

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Password Generator
        </h1>

        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-3 mb-4 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
          placeholder="Your generated password"
        />

        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="range"
              id="range"
              value={range}
              min={5}
              max={100}
              onChange={(e) => setRange(e.target.value)}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-700">{range}</span>
          </div>

          <label htmlFor="range" className="text-gray-600">
            Password Length
          </label>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="number"
              onChange={() => setNumbers((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="number" className="text-gray-600">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="lowercase"
              onChange={() => setLowercase((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="lowercase" className="text-gray-600">
              lowercase
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="uppercase"
              onChange={() => setUppercase((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="uppercase" className="text-gray-600">
              UPPERCASE
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="character"
              onChange={() => setCharacters((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="character" className="text-gray-600">
              Include Special Characters
            </label>
          </div>

          <button
            onClick={passwordGenerator}
            className="w-full bg-blue-500 text-white p-3 rounded-md mt-4 hover:bg-blue-600 transition duration-200"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
