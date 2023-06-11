import React from 'react'
import styled from '@emotion/styled'
import { useCandidates } from '../hooks/candidates'

const HeaderText = styled.header`
  font-size: 42px;
  font-weight: bold;
  padding: 16px;
`

const Header = () => {
  const { candidates, round, isGameEnded } = useCandidates()
  const rest = candidates.length
  // const title = rest === 2 ? 'Final'
  //   : rest === 4 ? 'Semi-Final'
  //   : rest === 8 ? 'Quarter-Final'
  //   : 'Preliminary Round'

  const title = round === 1 ? 'Preliminary Round'
    : round === 2 ? 'Quarter-Final'
    : round === 3 ? 'Semi-Final'
    : 'Final'

  return (
    <HeaderText>
      <h3>{title} {isGameEnded ? 'Winner' : ''}</h3>
      <p>Which one touches the heart more?</p>
    </HeaderText>
  )
}

export default Header
