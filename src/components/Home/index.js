import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Loader } from 'react-loaders';
import HomeSpinningCube from './HomeSpinningCube';

const Home = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const nameArray = [' ', 'E', 'u', 'g', 'e', 'n', 'e', ' ', 'K', 'a', 'n', 'g']
  // const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

  // LETTER ANIMATIONS ON HOVER BREAKS SITE CURRENTLY ~40:00 ----------------------
  // useEffect(() => {
  //     // changes class to textAnimateHover after 4000 milliseconds
  //     return setTimeout(() => {
  //         setLetterClass('textAnimateHover')
  //     }, 4000)
  // }, [])
  // END LETTER ANIMATIONS ON HOVER BREAKS SITE CURRENTLY  ~40:00 ------------------

  return (
    <>
      <div className="container homePage">
        <div className="textZone">
          <h1>
            <span className={letterClass}>H</span>
            {/* _12 adds 1.2 seconds delay before animation to fit with intended 1.5s delay of AnimatedLetters below */}
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            Software Engineer
          </h1>

          <h2>Fullstack Developer / JavaScript / React / HTML / CSS</h2>
          {/* <h2>Foodie / Philosophy Buff / Fitness Enthusiast</h2> */}
          <Link to="/about" className="flatButton">
            ABOUT ME
          </Link>
        </div>
        <HomeSpinningCube />
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Home
