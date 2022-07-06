import "./search-box.css"
const SearchBox = ({onSearchChange}) =>{
  return(
    <div>
        <input
        className="search-box"
        type="search"
        placeholder="search monster"
        onChange={onSearchChange}
      />
    </div>
  )
}
export default SearchBox;