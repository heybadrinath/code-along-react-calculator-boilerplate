import React, { useState } from "react";
import Button from "./button";
function DisplayScreen() {
  let [inputValue, setInputValue] = useState(0);
  let [resultValue, setResultValue] = useState(0);

  function takeInput(value) {
    setInputValue((prev) => prev + value);
  }

  function deleteInput() {
    setInputValue(inputValue.slice(0, -1));
  }
  function clearInput() {
    setResultValue("");
    setInputValue("");
  }

  function calculate() {
    try {
      setResultValue(eval(inputValue));
    } catch {
      setInputValue("Error");
    }
  }
  return (
    <>
      <div className="parent">
        <h1>Display Screen</h1>
        <input
          type="text"
          placeholder="0"
          disabled
          value={inputValue === 0 ? "" : inputValue}
        />
        <input
          type="text"
          placeholder="0"
          disabled
          value={resultValue === 0 ? "" : resultValue}
        />
      </div>

      <div className="btns">
        <div className="all">
          <Button value={"AC"} takeInput={clearInput} />
          <div className="sidebtns">
            <Button value={"+"} takeInput={takeInput} />
            <Button value={"-"} takeInput={takeInput} />
            <Button value={"*"} takeInput={takeInput} />
            <Button value={"/"} takeInput={takeInput} />
          </div>
          <div className="nums">
            <Button value={"1"} takeInput={takeInput} />
            <Button value={"2"} takeInput={takeInput} />
            <Button value={"3"} takeInput={takeInput} />

            <Button value={"4"} takeInput={takeInput} />
            <Button value={"5"} takeInput={takeInput} />
            <Button value={"6"} takeInput={takeInput} />

            <Button value={"7"} takeInput={takeInput} />
            <Button value={"8"} takeInput={takeInput} />
            <Button value={"9"} takeInput={takeInput} />

            <Button value={"DEL"} takeInput={deleteInput} />
            <Button value={"0"} takeInput={takeInput} />
            <Button value={"="} takeInput={calculate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayScreen;
