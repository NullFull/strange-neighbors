import React from 'react'
import { useState, useEffect } from 'react'
import { useCandidates } from '../hooks/candidates'
import CardSelector from './CardSelector'

const NextStepButton = ({ isLastStep, goNextStep }) => {
  return isLastStep ? (
    <button>Next Round</button>
  ) : (
    <button onClick={goNextStep}>Next Step</button>
  )
}

const Steps = ({ onEnd }) => {
  const { candidates, step, setStep, totalSteps, showResult, setShowResult } =
    useCandidates()

  const [selected, setSelected] = useState([])
  const [fight, setFight] = useState([])

  const start = step * 2
  const end = start + 2

  const isLastStep = step + 1 === totalSteps

  useEffect(() => {
    const sliceFight = () => {
      setFight(candidates.slice(start, end))
    }
    sliceFight()
  }, [step])

  const goNextStep = () => {
    if (isLastStep) {
      onEnd(selected)
    } else {
      setStep((step) => step + 1)
      setShowResult(false)
    }
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
      {showResult && (
        <NextStepButton isLastStep={isLastStep} goNextStep={goNextStep} />
      )}
    </>
  )
}

export default Steps
