import { createContext, useContext, useState } from 'react'
import Image1 from '../assets/images/1.jpeg'
import Image2 from '../assets/images/2.jpeg'
import Image3 from '../assets/images/3.jpg'
import Image4 from '../assets/images/4.jpeg'
import Image5 from '../assets/images/5.jpeg'
import Image6 from '../assets/images/6.jpeg'
import Image7 from '../assets/images/7.jpg'
import Image8 from '../assets/images/8.jpeg'

const CandidatesContext = createContext({
  candidates: [],
})

const useCandidates = () => useContext(CandidatesContext)

const CandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([
    {
      name: 'ddd',
      imageUrl: Image1,
    },
    {
      name: 'dssdd',
      imageUrl: Image2,
    },
    {
      name: 'taiwan octopus',
      imageUrl: Image3,
    },
    {
      name: 'banana king',
      imageUrl: Image4,
    },
    {
      name: 'white dragon',
      imageUrl: Image5,
    },
    {
      name: 'gangnam style',
      imageUrl: Image6,
    },
    {
      name: 'crab',
      imageUrl: Image7,
    },
    {
      name: 'cucumber girl',
      imageUrl: Image8,
    },
  ])

  const [step, setStep] = useState(0)
  const [round, setRound] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const totalRounds = candidates.length
  const totalSteps = totalRounds / 2
  const isGameEnded = round === totalRounds

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        setCandidates,
        step,
        setStep,
        totalSteps,
        round,
        setRound,
        totalRounds,
        showResult,
        setShowResult,
        isGameEnded,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  )
}

export { useCandidates, CandidatesProvider }
