import { useEffect, useState } from "react";
import "./App.css";
import Cardlist from "./components/card-list/Cardlist";
import SearchBox from "./components/search-box/Search-Box";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  // const onSearchStringChange = (e) => {
  //   const ss = e.target.value;
  //   setSearchString(ss);
  // };

  return (
    <div>
      <h1 className="monster-title">Monsters Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      {/* <SearchBox onSearchChange={onSearchStringChange}/> */}
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
}

export default App;
