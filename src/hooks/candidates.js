import { createContext, useContext, useState } from 'react'
import Image1 from '../assets/images/1.jpeg';
import Image2 from '../assets/images/2.jpeg';
import Image3 from '../assets/images/3.jpg';
import Image4 from '../assets/images/4.jpeg';

const CandidatesContext = createContext({
  candidates: [],
})
  
const useCandidates = () => useContext(CandidatesContext)

const CandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([{
    name: 'ddd',
    imageUrl: Image1,
  }, {
    name: 'dssdd',
    imageUrl: Image2,
  }, {
    name: 'taiwan octopus',
    imageUrl: Image3,
  },
  {
    name: 'banana king',
    imageUrl: Image4,
  }])


  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        setCandidates,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  )
}

export { useCandidates, CandidatesProvider }