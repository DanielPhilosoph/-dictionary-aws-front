import React from "react";
import { useSelector } from "react-redux";

import SearchDiv from "./SearchDiv";
import WordDiv from "./WordDiv";

export default function DictionaryMain() {
  const state: StateType = useSelector((state: StateType) => state);

  let display: string = "none";
  const anyWordsToDisplay = state.currentWords.length === 0;
  if (anyWordsToDisplay) {
    display = "block";
  }

  return (
    <div>
      <SearchDiv />
      <div className="dictionaryContainer">
        <div className="welcomeDiv">
          <div className="welcomeElementsDiv">
            <h2>Welcome!</h2>
            <h5>
              This english dictionary contains more then 110,000 words for{" "}
              <b>you</b> to discover and explore.
              <br />
              <p
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: "25px",
                }}
              >
                So jump right in!
              </p>
            </h5>
          </div>
        </div>
        <div>
          {
            <p className="noWordsMessagesP" style={{ display: `${display}` }}>
              No words to display at the moment
            </p>
          }
          {state.currentWords.map((word: WordType) => {
            return (
              <WordDiv
                key={word.pos}
                pos={word.pos}
                word={word.word}
                definitions={word.definitions}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
