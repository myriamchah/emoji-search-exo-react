import { useState } from "react";

import Line from "./components/Line";
import Search from "./components/Search";
import Footer from "./components/Footer";

import data from "./assets/data.json";

import "./App.css";

function App() {
  const [searchedKeyword, setsearchedKeyword] = useState("");

  return (
    <>
      <Search {...{ setsearchedKeyword }} />
      <main>
        {data
          .filter((emoji) => emoji.keywords.includes(searchedKeyword))
          .slice(0, 12)
          .map((emoji) => {
            return (
              <Line
                key={emoji.title}
                title={emoji.title}
                symbol={emoji.symbol}
              />
            );
          })}
      </main>
      <Footer />
    </>
  );
}

export default App;
