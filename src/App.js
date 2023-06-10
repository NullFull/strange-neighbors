// import logo from './logo.svg';
import { useState } from 'react'
import styled from '@emotion/styled'
import Card from './components/Card';
import Image1 from './assets/images/1.jpeg';
import Image2 from './assets/images/2.jpeg';


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
  return selected ? (
    <ResultView>
      <Card name={selected.name} imageUrl={selected.imageUrl} /> 
    </ResultView>
  ) : (
    <CandidatesView>
      {candidates.map(candidte => (
        <Card name={candidte.name} imageUrl={candidte.imageUrl} onClick={() => onSelect(candidte)} /> 
      ))}
    </CandidatesView>
  )
}

function App() {
  const [candidates, setCandidates] = useState([{
    name: 'ddd',
    imageUrl: Image1,
  }, {
    name: 'dssdd',
    imageUrl: Image2,
  }])
  const [selected, setSelected] = useState(null)
  
  return (
    <Wrapper>
      <Header>
        Pick your Neighbors
      </Header>
      <Body>
        <CardSelector
          selected={selected}
          candidates={candidates}
          onSelect={setSelected}
        />
      </Body>
    </Wrapper>
  );
}

export default App;
