import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { resetCurrentWords, searchWord } from "../actions/functions";

export default function SearchDiv() {
  const dispatch: Dispatch<any> = useDispatch();

  const searchInput = useRef<HTMLInputElement>(null);
  const partOfSpeech = useRef<HTMLSelectElement>(null);

  const onSearchClick = async () => {
    //* Check if searchInput and partOfSpeech refs exists
    if (partOfSpeech.current != null && searchInput.current != null) {
      const isSearchInputEmpty = searchInput.current.value === "";
      if (isSearchInputEmpty) {
        resetCurrentWords(dispatch);
      } else {
        await searchWord(
          dispatch,
          searchInput.current.value.toUpperCase(),
          partOfSpeech.current.value
        );
      }
    }
  };

  return (
    <div className="searchDiv">
      <div className="searchElementsDiv">
        <input
          ref={searchInput}
          className="searchInput"
          type={"text"}
          placeholder="Search word..."
        ></input>
        <select
          className="partOfSpeechSelect"
          id="partOfSpeech"
          ref={partOfSpeech}
        >
          <option value="default">Part</option>
          <option value="noun">Noun</option>
          <option value="verb">Verb</option>
          <option value="adverb">Adverb</option>
          <option value="preposition">Preposition</option>
          <option value="conjunction">Conjunction</option>
          <option value="interjection">Interjection</option>
          <option value="pronoun">Pronoun</option>
        </select>
        <button onClick={onSearchClick} className="searchButton">
          Search
        </button>
      </div>
    </div>
  );
}
