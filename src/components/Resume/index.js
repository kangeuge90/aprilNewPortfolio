import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Resume = () => {
  return (
    <>
      <div className='container projectsPage'>
        <div className='textZone'>
          <h1>
            <AnimatedLetters 
            letterClass={'textAnimate'}
            strArray={['R', 'e', 's', 'u', 'm', 'e']}
            idx={15}
            />
          </h1>
        </div>
        
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Resume;