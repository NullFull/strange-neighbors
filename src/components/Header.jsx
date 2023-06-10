import React from 'react'
import styled from '@emotion/styled'
import { useCandidates } from '../hooks/candidates'

const HeaderText = styled.header`
  font-size: 42px;
  font-weight: bold;
  padding: 16px;
`

const Header = () => {
  const { totalRounds, step, totalSteps } = useCandidates()
  const roundText = totalRounds === 2 ? 'Final' : `Round of ${totalRounds}`

  return (
    <HeaderText>
      Pick your Neighbors ({roundText} {step + 1}/{totalSteps})
    </HeaderText>
  )
}

export default Header
