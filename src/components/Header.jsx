import React from 'react'
import styled from '@emotion/styled'
import { useCandidates } from '../hooks/candidates'

const HeaderText = styled.header`
  font-size: 42px;
  font-weight: bold;
  padding: 16px;
`

const Header = () => {
  const { step, totalSteps } = useCandidates()

  return (
    <HeaderText>
      Pick your Neighbors ({step + 1}/{totalSteps})
    </HeaderText>
  )
}

export default Header
