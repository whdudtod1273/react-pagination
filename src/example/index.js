import { useState } from 'react';
import Pagenation from '../Pagenation';
import data from '../testData'

function Example() {
  const [post, setPost] = useState([]);
  const [defaultData] = useState(data);

  return (
    <div>
      {
        post.map((item, index) => (
          <div key={index}>
            {item.title}
          </div>
        ))
      }
      <Pagenation defaultData={defaultData} setPost={setPost} type="roundEdge" />
    </div>
  );
}

export default Example;
