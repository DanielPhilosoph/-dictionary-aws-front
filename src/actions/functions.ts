import {
  RESET_CURRENT_WORDS,
  UPDATE_CURRENT_WORDS,
} from "../TypeScriptTypes/actionTypes";
import axios from "axios";
import { Dispatch } from "redux";
import Swal from "sweetalert2";

import { shortPosToFullPos } from "../helper/functions";

const rootUrl = "https://dd0fvn3a68.execute-api.eu-west-3.amazonaws.com";

/**
 * @param {Dispatch<any>} dispatch
 * @param {string} word
 * @param {string} partOfSpeech
 ** Void function
 ** Sends API request for the search - updates state
 */
export async function searchWord(
  dispatch: Dispatch<any>,
  word: string,
  partOfSpeech: string
) {
  try {
    if (partOfSpeech === "default") partOfSpeech = "";
    if (word === "") return { error: "Word cant be null" };

    const response = await axios.get(`${rootUrl}/${word}/${partOfSpeech}`);

    const action = {
      type: UPDATE_CURRENT_WORDS,
      payload: response.data.words,
    };
    dispatch(action);
  } catch (error) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: `Error: ${error}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

/**
 * @param {Dispatch<any>} dispatch
 * @param {string} pos
 ** Void function
 ** Sends API request to get random word with the specified pos.
 ** Updates the state
 */
export async function getRandomWord(dispatch: Dispatch<any>, pos: string) {
  try {
    const randomPartOfSpeech = shortPosToFullPos(pos);
    const response = await axios.get(
      `${rootUrl}/part-of-speech/${randomPartOfSpeech}`
    );

    const action = {
      type: UPDATE_CURRENT_WORDS,
      payload: [response.data.word],
    };

    if (!response.data.hasOwnProperty("word")) {
      return;
    }
    dispatch(action);
  } catch (error) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: `Error: ${error}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

/**
 * @param {Dispatch<any>} dispatch
 ** Reset current words - updates state
 */
export function resetCurrentWords(dispatch: Dispatch<any>) {
  const action = {
    type: RESET_CURRENT_WORDS,
  };
  dispatch(action);
}
