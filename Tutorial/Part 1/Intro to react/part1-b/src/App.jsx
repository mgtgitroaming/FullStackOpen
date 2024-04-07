import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>

const App = () => {
  const [ counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const zeroCounter = () =>  setCounter(0);

  console.log("rendering counter....", counter)
  return (
  <>
  <Display counter={counter} />
  <Button onSmash={increaseByOne} text="Increase" />
  <Button onSmash={decreaseByOne} text="Decrease" />
  <Button onSmash={zeroCounter} text="Zero" />
  </>
  )
}


export default App
