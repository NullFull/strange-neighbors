import { createContext, useContext, useState } from 'react'
import Image1 from '../assets/images/1.jpeg'
import Image2 from '../assets/images/2.jpeg'
import Image3 from '../assets/images/3.jpg'
import Image4 from '../assets/images/4.jpeg'
import Image5 from '../assets/images/5.jpeg'
import Image6 from '../assets/images/6.jpeg'
import Image7 from '../assets/images/7.jpg'
import Image8 from '../assets/images/8.jpeg'
import Image9 from '../assets/images/9.png'
import Image10 from '../assets/images/10.png'
import Image11 from '../assets/images/11.png'
import Image12 from '../assets/images/12.png'
import Image13 from '../assets/images/13.png'
import Image14 from '../assets/images/14.png'
import Image15 from '../assets/images/15.jpg'
import Image16 from '../assets/images/16.jpg'

const CandidatesContext = createContext({
  candidates: [],
})

const useCandidates = () => useContext(CandidatesContext)

const CandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([
    {
      name: 'gwamegi',
      imageUrl: Image1,
    },
    {
      name: 'jangdokdae',
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
    {
      name: 'money statue',
      imageUrl: Image9,
    },
    {
      name: 'sea urchin',
      imageUrl: Image10,
    },
    {
      name: 'flying to the future',
      imageUrl: Image11,
    },
    {
      name: 'four feet shark',
      imageUrl: Image12,
    },
    {
      name: 'ginseng',
      imageUrl: Image13,
    },
    {
      name: 'flowers and humans',
      imageUrl: Image14,
    },
    {
      name: 'butterfly human',
      imageUrl: Image15,
    },
    {
      name: 'fish human',
      imageUrl: Image16,
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
