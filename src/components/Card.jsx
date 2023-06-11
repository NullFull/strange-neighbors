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
  width: 400px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  overflow: hidden;
`

const Card = ({ imageUrl, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image imageUrl={imageUrl} />
    </Wrapper>
  )
}

export default Card
