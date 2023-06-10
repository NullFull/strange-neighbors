import React from 'react'
import styled from '@emotion/styled'
import { useCandidates } from '../hooks/candidates'
import Card from './Card'

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
      {candidates.map((candidte) => (
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

export default CardSelector
