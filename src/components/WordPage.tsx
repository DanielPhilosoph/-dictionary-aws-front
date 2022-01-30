import React from "react";
import WordDiv from "./WordDiv";

type Props = {
  word: WordType;
};

export default function WordPage(props: Props) {
  return (
    <div>
      <WordDiv
        pos={props.word.pos}
        word={props.word.word}
        definitions={props.word.definitions}
      />
    </div>
  );
}
