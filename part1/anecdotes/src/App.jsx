import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (<button onClick={onClick}>{text}</button>)
}

const Anecdote = ({ title, anecdote, votes}) => {
  return(
    <>
      <h1>{title}</h1>
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
    </>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

  const highestVotesAnecdoteIndex = Object.keys(votes).reduce((biggestIndex, index) =>
    votes[index] > votes[biggestIndex] ? index : biggestIndex
  , 0)

  const hasAnecdotesWithVotes = Object.values(votes).some(vote => vote > 0)

  return (
    <div>
      <Anecdote title="Anecdote of the day" anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button text="vote" onClick={() => setVotes({
        ...votes,
        [selected]: votes[selected] + 1
      })}/>
      <Button text="next anecdote" onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}/>

      {hasAnecdotesWithVotes && <Anecdote title="Anecdote with most votes" anecdote={anecdotes[highestVotesAnecdoteIndex]} votes={votes[highestVotesAnecdoteIndex]} />}
    </div>
  )
}

export default App