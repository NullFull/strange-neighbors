import React from 'react'
import styled from '@emotion/styled'
import { useCandidates } from '../hooks/candidates'

const HeaderText = styled.header`
  font-size: 42px;
  font-weight: bold;
  padding: 16px;
`

const Header = () => {
  const { candidates, isGameEnded } = useCandidates()
  const rest = candidates.length
  const title = rest === 1 ? 'Final Winner'
    : 2 ? 'Final'
    : rest === 4 ? 'Semi-Final'
    : rest === 8 ? 'Quarter-Final'
    : 'Preliminary Round'

  return (
    <HeaderText>
      <h3>{title} {isGameEnded ? 'Winner' : ''}</h3>
      <p>Which one touches the heart more?</p>
    </HeaderText>
  )
}

export default Header
