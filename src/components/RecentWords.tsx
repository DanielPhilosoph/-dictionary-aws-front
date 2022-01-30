import React from "react";
import { useSelector } from "react-redux";
import WordDiv from "./WordDiv";

export default function RecentWords() {
  const state: StateType = useSelector((state: StateType) => state);

  return (
    <div>
      <div className="recentWordsDiv">Recent Words</div>
      <div>
        {state.recentSearches.map((word: WordType) => {
          let definitions = [
            `${word.definitions[0].split(" ").slice(0, 10).join(" ")}...`,
          ];
          //
          return (
            <WordDiv
              key={definitions + word.pos}
              pos={word.pos}
              word={word.word}
              definitions={definitions}
            />
          );
        })}
      </div>
    </div>
  );
}
