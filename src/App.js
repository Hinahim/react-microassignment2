import React from 'react';
import './App.css';
import LeftContainer from './Components/LeftContainer';
import RightContainer from './Components/RightContainer';


function App() {
  // let [count, setCount] = useState(0);
  // let arr = [{ pName: "Sleepers", pDesc: "Good Product", pPrice: 1290 }, { pName: "Tshirt", pDesc: "Quality Product", pPrice: 1499 }, { pName: "Jeans", pDesc: "poor Product", pPrice: 999 }];

  return (
    <>
      {/* {arr.map((item) => (
        <ListItem product={item} />
      ))} */}
      <div className='mainc'>
        <LeftContainer />
        <RightContainer />
      </div>
      {/* {count}<br />
      <button onClick={() => {
        setCount(++count)
      }}>Increase</button> */}
    </>
  );
}

export default App;
