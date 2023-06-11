import { CandidatesProvider } from './hooks/candidates'
import styled from '@emotion/styled'
import Header from './components/Header'
import Rounds from './components/Rounds'
import Background from './assets/images/background.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  //background: url(${Background}) no-repeat center center fixed;
`

const Body = styled.main`
  min-height: 0;
  flex-grow: 1;
`

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
