import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Blog = () => {
  return (
    <>
      <div className='container blogPage'>
        <div className='textZone'>
          <h1>
            <AnimatedLetters 
            letterClass={'textAnimate'}
            strArray={['M', 'y', ' ', 'C', 'o', 'd', 'i', 'n', 'g', ' ', 'J', 'o', 'u', 'r', 'n', 'e', 'y']}
            idx={15}
            />
          </h1>
        </div>
        
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Blog;
