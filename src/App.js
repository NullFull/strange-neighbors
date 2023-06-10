// import logo from './logo.svg';
import { useState } from 'react'
import { CandidatesProvider, useCandidates } from './hooks/candidates';
import styled from '@emotion/styled'
import Card from './components/Card';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
`

const Header = styled.header`
  
`

const Body = styled.main`
  min-height: 0;
  flex-grow: 1;
`

const ResultView = styled.div`
  display: flex;
  height: 100%;
`

const CandidatesView = styled.div`
  display: flex;
  height: 100%;
`


const CardSelector = ({ selected, onSelect, candidates }) => {
  
  return selected.length > 0 ? (
    <ResultView>
      <Card name={selected[0].name} imageUrl={selected[0].imageUrl} /> 
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

const Steps = ({ onEnd }) => {
    const { candidates } = useCandidates()

  const totalSteps = candidates.length / 2
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState([])

  const start = step * 2
  const end = start + 2
  const fight = candidates.slice(start, end)

  const isLastStep = step + 1 === totalSteps

  const goNextStep = () => {
    if (isLastStep) {
      onEnd(selected)
    } else {
      setStep(step => step + 1)
    }
  }

  return (
    <>
      <CardSelector
        selected={selected}
        candidates={fight}
        onSelect={(winner) => {
          setSelected(selected => [...selected, winner])
        }}
      />
      {isLastStep ? <button>Next Round</button> : <button onClick={goNextStep}>Next Step</button>}
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
    <Wrapper>
      <Header>
        Pick your Neighbors
      </Header>
      <Body>
        <CandidatesProvider>
          <Rounds />
        </CandidatesProvider>
      </Body>
    </Wrapper>
  );
}

export default App;
