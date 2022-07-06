import { useEffect, useState } from "react";
import "./App.css";
import Cardlist from "./components/card-list/Cardlist";
import SearchBox from "./components/search-box/Search-Box";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  console.log(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div>
      <h1 className="monster-title">Monsters Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
}

export default App;
