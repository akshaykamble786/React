import React, { useEffect, useState, useRef, useCallback } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const pswdGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (specialChars) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, specialChars, setPassword]);

  useEffect(() => {
    pswdGen();
  }, [length, numbers, specialChars, setPassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none w-full py-1 px-3"
          placeholder="your password is here"
          ref={passwordRef}
          readOnly
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyToClipBoard}
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <input
          type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="cursor-pointer"
        />
        <label> length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numbers}
          id="numInput"
          onChange={() => {
            setNumbers((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={specialChars}
          id="characterInput"
          onChange={() => {
            setSpecialChars((prev) => !prev);
          }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  );
};

export default PasswordGenerator;
