import { useState } from 'react'

const Button = ({handleClick, text}) => [
  <button onClick={handleClick}>{text}</button>
]


const StatisticLine = (props) => {
  if(props.text.toLowerCase() === 'good')
  {
    return (
    <div>{props.value}</div>
    )
  }

  if(props.text.toLowerCase() === 'neutral')
  {
    return (
      <div>{props.value}</div>
    )
  }

  if(props.text.toLowerCase() === 'bad')
  {
    return (
      <div>{props.value}</div>
    )
  }
}

const Statistics = ({good, neutral, bad, total}) => {
  const average = total > 0  ? (good - bad) / total : 0;
  const positive = total > 0  ? (good / total) * 100 : 0;

  console.log('')
  

  if(total > 0)
  {
    return (
      <div>
      <table>
        <tbody>
        <tr>
          <td>Good</td>
          <td><StatisticLine text='good' value={good} key='1'/></td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td><StatisticLine text='neutral' value={neutral} key='2'/></td>
        </tr>
        <tr>
          <td>Bad</td>
          <td><StatisticLine text='bad' value={bad} key='3'/></td>
        </tr>
        <tr>
          <td>All</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positive}</td>
        </tr>
        </tbody>
      </table>
      </div>
    )
  }
  else {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  
  const handleGood = () => {
    const countGood = good + 1;
    const countTotal = total + 1;
    setTotal(countTotal)
    setGood(countGood);
  }

  const handleNeutral = () =>  {
    const countNeutral = neutral + 1;
    const countTotal = total + 1;
    setTotal(countTotal)
    setNeutral(countNeutral);
  }

  const handleBad = () => {
    const countBad = bad + 1;
    const countTotal = total + 1;
    setTotal(countTotal);
    setBad(countBad);
  }


  return (
    <div>
      <div>
        <h1>Give Feedback:</h1>
      </div>
      <Button handleClick={handleGood} text='Good' key='1'/>
      <Button handleClick={handleNeutral} text='Neutral' key='2'/>
      <Button handleClick={handleBad} text='Bad' key='3'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App