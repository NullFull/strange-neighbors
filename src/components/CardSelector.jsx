import React from 'react'
import styled from '@emotion/styled'
import { useCandidates } from '../hooks/candidates'
import Card from './Card'

const ResultView = styled.div`
  display: flex;
  justify-content: center;
`

const CandidatesView = styled.div`
  display: flex;
  justify-content: center;
`

const CardContainer = styled.div`
  min-width: 0;
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardSelector = ({ selected, onSelect, candidates }) => {
  const { showResult } = useCandidates()
  const lastIndex = selected.length - 1

  return showResult ? (
    <ResultView>
      <Card
        name={selected[lastIndex].name}
        imageUrl={selected[lastIndex].imageUrl}
      />
    </ResultView>
  ) : (
    <CandidatesView>
      {candidates.map(candidte => (
        <CardContainer key={candidte.name}>
          <Card
            name={candidte.name}
            imageUrl={candidte.imageUrl}
            onClick={() => onSelect(candidte)}
          />
        </CardContainer>
      ))}
    </CandidatesView>
  )
}

export default CardSelector
