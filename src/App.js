import React, { useState, useEffect } from "react";
import "./components/style.css"

function App() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(10);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  },[])
  return (
    <div className="App">
      <div className="container">
        {
          items.slice(0,visible).map((item) => (
            <div className="card">
              <div className="id">
                <span>{item.id}</span>
                <p>{item.body}</p>

               </div>
            </div>
            
          )
          )
        }
        <button onClick={showMoreItems}>Paginated API</button>
      </div>
    </div>
  );
}

export default App; 


