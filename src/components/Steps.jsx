import React from 'react'
import { useState, useEffect } from 'react'
import { useCandidates } from '../hooks/candidates'
import CardSelector from './CardSelector'

const NextStepButton = ({
  isLastStep,
  isGameEnded,
  goNextRound,
  goNextStep,
}) => {
  return isLastStep ? (
    <button onClick={goNextRound}>Next Round</button>
  ) : (
    <button onClick={goNextStep}>Next Step</button>
  )
}

const Steps = ({ onEnd }) => {
  const {
    candidates,
    step,
    setStep,
    totalSteps,
    showResult,
    setShowResult,
    isGameEnded,
  } = useCandidates()

  const [selected, setSelected] = useState([])
  const [fight, setFight] = useState([])

  const start = step * 2
  const end = start + 2
  const isLastStep = step + 1 === totalSteps
  const showButton = showResult && !isGameEnded

  useEffect(() => {
    const sliceFight = () => {
      setFight(candidates.slice(start, end))
    }
    sliceFight()
  }, [step])

  const goNextRound = () => {
    onEnd(selected)
    setSelected([])
    setShowResult(false)
  }

  const goNextStep = () => {
    setStep((step) => step + 1)
    setShowResult(false)
  }

  const onSelectCard = (winner) => {
    setSelected((selected) => [...selected, winner])
    setShowResult(true)
  }

  return (
    <>
      <CardSelector
        selected={selected}
        candidates={fight}
        onSelect={(winner) => onSelectCard(winner)}
      />
      {showButton && (
        <NextStepButton
          isLastStep={isLastStep}
          goNextRound={goNextRound}
          goNextStep={goNextStep}
        />
      )}
    </>
  )
}

export default Steps
