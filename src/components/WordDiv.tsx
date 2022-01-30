import React from "react";
import WordDescription from "./WordDescription";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import { getRandomWord } from "../actions/functions";
import { capitalizeFirstLetter } from "../helper/functions";

export default function WordDiv(props: WordType) {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const onWordClick = async (event: React.MouseEvent<HTMLElement>) => {
    //* 1- has target, 2- is an html element, 3- is pos element;
    if (
      event.target &&
      event.target instanceof HTMLElement &&
      event.target.classList.contains("posH5")
    ) {
      await getRandomWord(dispatch, props.pos);
      navigate("/");
    } else {
      navigate(`/${props.word}/${props.pos}`);
    }
  };

  return (
    <div className="wordDiv" onClick={onWordClick}>
      <h4>{capitalizeFirstLetter(props.word)}</h4>
      <WordDescription definitions={props.definitions} pos={props.pos} />
    </div>
  );
}
