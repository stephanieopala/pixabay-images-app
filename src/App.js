import { useState, useEffect } from "react";
import Photo from "./components/Photo";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}&image_type=photo`);
        if(response.ok){
          const data = await response.json();
          console.log(data);
          setItems(data.hits);
        } else {
          throw new Error("Request failed!")
        }
      } catch(err){
        console.log(err)
      }
    }
    getItems();
  }, [query])
  return (
    <div className="flex flex-col justify-center p-5">
      <form onSubmit={handleSubmit} className="w-full mb-3 flex justify-center" >
        <input type="text" 
          placeholder="Search image" 
          onChange={(e) => setSearch(e.target.value) }
          value={search}
          className="p-2 w-96 focus-within:border-gray-400"
        />
        <input type="submit" 
          value="Search"
          className="px-4 py-1 border-1 rounded-m cursor-pointer"
        />
      </form>
      <div className="flex flex-wrap justify-center">
        {items.map(item => {
          return (<Photo
            key={uuidv4()}
            image={item.previewURL}
            views={item.views}
            downloads={item.downloads}
            likes={item.likes}
            tags={item.tags}
            user={item.user}
          />)
        })}
      </div>
    </div>

  );
}
  
export default App;
