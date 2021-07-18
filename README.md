# @todys/react-pagination

This is a pagination component for react.

## Installation

```
npm i @todys/react-pagination
```

## Usage

```javascript
import { Pagination } from '@todys/react-pagination'

const data = [Data]
const [post,setPost] = useState([]);

ReactDOM.render(
  {
    post...
  }
  <Pagination 
    defaultData={data} 
    setPost={setPost} 
    type="round" 
    line={5} 
    showNumber={10}
    btnStartEnd={true}
  />
)
```

## Props

| params | value | defaultValue | description |
|--------|-------|--------------|-------------|
|defaultData|array|-|post original data|
|setPost|setState|-|setState containing the data to be displayed on the current page|
|type|string|""|pagination style type|
|line|number|5|number of lines to be displayed on the screen|
|showNumber|number|10|page number to be displayed on the screen|
|btnStartEnd|false|Boolean|Button to the first,last page|

## Type

### basic   
![basic](../lib/img/basic.png)      


### round   
![basic](../lib/img/round.png)      


### roundEdge   
![basic](../lib/img/roundEdge.png)      