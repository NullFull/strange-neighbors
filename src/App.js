// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { CandidatesProvider, useCandidates } from './hooks/candidates';
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Card from './components/Card';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
`

const HeaderText = styled.header`
  font-size: 42px;
  font-weight: bold;
  padding: 16px;
`

const Body = styled.main`
  min-height: 0;
  flex-grow: 1;
`

const ResultView = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  margin: 0 auto;
`

const CandidatesView = styled.div`
  display: flex;
  height: 100%;
`

const Header = () => {
  const { step, totalSteps } = useCandidates()

  return (
    <HeaderText>Pick your Neighbors ({step+1}/{totalSteps})</HeaderText>
  )
}

const CardSelector = ({ selected, onSelect, candidates }) => {
  const { showResult } = useCandidates()
  const lastIndex = selected.length-1
  
  return showResult ? (
    <ResultView>
      <Card name={selected[lastIndex].name} imageUrl={selected[lastIndex].imageUrl} /> 
    </ResultView>
  ) : (
    <CandidatesView>
      {candidates.map(candidte => (
        <Card
          key={candidte.name}
          name={candidte.name}
          imageUrl={candidte.imageUrl}
          onClick={() => onSelect(candidte)}
        /> 
      ))}
    </CandidatesView>
  )
}

const NextStepButton = ({ isLastStep, goNextStep }) => {
  return (
    isLastStep ? <button>Next Round</button> : <button onClick={goNextStep}>Next Step</button>
  )
}

const Steps = ({ onEnd }) => {
  const { candidates, step, setStep, totalSteps, showResult, setShowResult } = useCandidates()

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
      setStep(step => step + 1)
      setShowResult(false)
    }
  }

  const onSelectCard = (winner) => {
    setSelected(selected => [...selected, winner])
    setShowResult(true)
  }

  return (
    <>
      <CardSelector
        selected={selected}
        candidates={fight}
        onSelect={(winner) => onSelectCard(winner)}
      />
      {showResult &&
        <NextStepButton
          isLastStep={isLastStep}
          goNextStep={goNextStep}
        />
      }
    </>
  )
}

const Rounds = () => {  
  const onStepEnded = () => {}

  return (
    <Steps onEnd={onStepEnded} />
  )
}

function App() {
  
  return (
    <CandidatesProvider>
      <Wrapper>
        <Header />
        <Body>
          <Rounds />
        </Body>
      </Wrapper>
    </CandidatesProvider>
  );
}

export default App;
