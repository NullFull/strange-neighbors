import React from 'react'
import Steps from './Steps'
import { useCandidates } from '../hooks/candidates'

const Rounds = () => {
  const { setRound, setStep, setCandidates } = useCandidates()

  const onStepEnded = (selected) => {
    setRound((round) => round + 1)
    setStep(0)
    setCandidates(selected)
  }

  return <Steps onEnd={onStepEnded} />
}

export default Rounds
