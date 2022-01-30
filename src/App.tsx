import React from "react";
import DictionaryMain from "./components/DictionaryMain";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import WordPage from "./components/WordPage";
import RecentWords from "./components/RecentWords";

function App() {
  const state: StateType = useSelector((state: StateType) => state);
  const routes = state.recentSearches.map((word) => {
    return (
      <Route
        key={`${word.word}${word.pos}`}
        path={`/${word.word}/${word.pos}`}
        element={<WordPage word={word} />}
      />
    );
  });

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<DictionaryMain />} />
          <Route path="/recent-words" element={<RecentWords />} />
          {routes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
