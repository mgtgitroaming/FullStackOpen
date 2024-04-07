import { useState } from 'react'

const History =  (props) =>
{
  if(props.allClicks.length === 0)
  {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => [
  <button onClick={handleClick}>{text}</button>
]

const Total = (props) => {
 
 return (
  <p>Total: {props.total}</p>
 )
}

const App = () => {
  const [clicks, setClicks] = useState({left:0, right:0});
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClicks = () => {

    setAll(allClicks.concat('L'))

    const updateLeft = clicks.left + 1

    setTotal(updateLeft + clicks.right)

    setClicks({...clicks, left: clicks.left + 1})
  }
  const handleRightClicks = () => 
  {
    
    setAll(allClicks.concat('R'))

    const updatedRight = clicks.right + 1

    setTotal(updatedRight + clicks.left);

    setClicks({...clicks, right: clicks.right + 1});
  }
  

  return (
   <>
   {clicks.left}
   <Button handleClick={handleLeftClicks} text='left' key='1'></Button>
   <Button handleClick={handleRightClicks} text='right' key='2'></Button>
     {clicks.right}
  <Total total={total} />

   <History allClicks={allClicks} />
   </>
  )
}

export default App
