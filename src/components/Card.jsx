import React from 'react'
import styled from '@emotion/styled'

const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  min-width: 0;
  flex-grow: 1;
  height: 100%;
`

const Card = ({ imageUrl, name, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image imageUrl={imageUrl} />
    </Wrapper>
  )
}

export default Card