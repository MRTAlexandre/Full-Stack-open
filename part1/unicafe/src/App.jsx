import { useState } from 'react'

const Statistics = ({ good, neutral, bad}) => {
  const total = good + neutral + bad;

  return (
    <div>
      <h1>statistics</h1>
      {total === 0
        ? <p><br></br>No Feedback given</p>
        : <table>
            <tbody>
              <StatisticLine value={good} text="good"/>
              <StatisticLine value={neutral} text="neutral"/>
              <StatisticLine value={bad} text="bad"/>
              <StatisticLine value={good + neutral + bad} text="all"/>
              <StatisticLine value={(good - bad) / (good + neutral + bad) } text="average"/>
              <StatisticLine value={(good / (good + neutral + bad)) * 100} text="positive"/>
            </tbody>
          </table>
      }
    </div>
  );
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ value, text }) => {
  return (
          <tr>
            <td>{text}</td>
            <td>{value.toFixed(2)}{text === "positive" ? "%" : "" }</td>
          </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App