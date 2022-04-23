import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Projects = () => {
  return (
    <>
      <div className='container projectsPage'>
        <div className='textZone'>
          <h1>
            <AnimatedLetters 
            letterClass={'textAnimate'}
            strArray={['R', 'e', 'c', 'e', 'n', 't', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
            />
          </h1>
        </div>
        
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Projects;

