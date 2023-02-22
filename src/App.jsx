import { useState, useEffect } from 'react'
import Die from "./Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import { FaGithub , FaLinkedin, FaTwitter} from 'react-icons/fa'
import './App.css'

function App() {
  const [dice, setDice] = useState(allNewDice());
  const[tenzies, setTenzies] = useState(false)
  const [rolls, setRolls] = useState(0)
  const [time, setTime] = useState(Date.now())
  const [bestTimes, setBestTimes] = useState(
    JSON.parse(localStorage.getItem("notes")) || 0
  )

  useEffect(()=>{
    const allHeld = dice.every(die=>die.isHeld)
    const allMatch = dice.every(die=>die.value === dice[0].value)
    if(allHeld && allMatch){
      setTenzies(true)
      setTime(prevDate=>{
        const finalTime = Math.round((Date.now() - prevDate)/1000)
        localStorage.setItem("notes", JSON.stringify(finalTime))
        if(finalTime <= bestTimes) setBestTimes(finalTime)
        return finalTime
      })
    }
  },[dice])

  function createNewDice(){
    return {
      value: Math.floor(Math.random() * 6) + 1,
      id: nanoid(),
      isHeld: false
    }
  }

  function allNewDice(){
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(createNewDice())
    }return newDice
  }

  function rollDice(){
    if(!tenzies){
      setDice(oldDice=>{
        return oldDice.map(die=>die.isHeld ? {...die} : createNewDice())
      })
      setRolls(prevRolls => prevRolls + 1)
    }else{
      setTenzies(false)
      setDice(allNewDice())
      setRolls(0)
      setTime(Date.now())
    }
  }

  function holdDice(id){
    setDice(prevDice=>{
      return prevDice.map(die=>die.id===id ? {...die, isHeld: !die.isHeld} : {...die})
    })
  }

  const diceElements= dice.map(die=>{
    return <Die value={die.value} key={die.id} holdDice={()=>holdDice(die.id)} color={die.isHeld}/>
  })

  const styles={
    height: tenzies ? "70vh" : "60vh"
  }

  
  return (
    <>
      <main style={styles}>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='die-container'>
          {diceElements}
        </div>
        <button className='RollButton' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        {tenzies && <p className='scores'>No. of Rolls :<span> {rolls}</span></p>}
        {tenzies && <p className='scores'>Time : <span> {time}s</span></p>}
        {tenzies && <p className='scores'>Best Time : <span> {bestTimes}s</span></p>}
      </main>  
      {/* finish the footer later */}
      <footer>
          <h3>Spandor's Work</h3>
          <div className='icons'>
            <a href='https://github.com/Ay7ot' className='icon-tags'><FaGithub /></a>
            <a href='https://twitter.com/Spandor_7nr' className='icon-tags'><FaTwitter /></a>
            <a href='https://www.linkedin.com/in/ayomide-ibiteye-b124b823b/' className='icon-tags'><FaLinkedin/></a>
          </div>
      </footer> 
    </>
  )
}

export default App
