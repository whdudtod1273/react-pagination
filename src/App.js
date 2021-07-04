import { useState } from 'react';
import './App.css';
import Pagenation from './components/Pagenation';
import data from './testData'
function App() {
  const [post, setPost] = useState([]);
  const [defaultData] = useState(data);

  return (
    <div className="App">
      {
        post.map((item, index) => (
          <div key={index}>
            {item.title}
          </div>
        ))
      }
      <Pagenation defaultData={defaultData} setPost={setPost} line={2} />
    </div>
  );
}

export default App;
