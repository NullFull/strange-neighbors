import { CandidatesProvider } from './hooks/candidates'
import styled from '@emotion/styled'
import Header from './components/Header'
import Steps from './components/Steps'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
`

const Body = styled.main`
  min-height: 0;
  flex-grow: 1;
`

const Rounds = () => {
  const onStepEnded = () => {}

  return <Steps onEnd={onStepEnded} />
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
  )
}

export default App
