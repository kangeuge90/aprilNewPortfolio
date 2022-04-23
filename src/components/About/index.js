import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCss3,
//   faReact,
//   faGitAlt,
//   faHtml5,
//   faJs,
//   faNodeJs,
// } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'
import SpinningCube from './AboutSpinningCube'
// other possible cube face imports:
// faDev, faPython, faReact, faReacteurope, faSass, faTrello, faJsSquare, faGitAlt
// find custom images for: mongoDB, Postman, PostgreSQL, ...

const About = () => {
  const letterClass = 'textAnimate'

  // const [letterClass, setLetterClass] = useState('textAnimate')

  // LETTER ANIMATIONS ON HOVER BREAKS SITE CURRENTLY ~55:00 ----------------------
  // useEffect(() => {
  //     // changes class to textAnimateHover after 4000 milliseconds
  //     return setTimeout(() => {
  //         setLetterClass('textAnimateHover')
  //     }, 3000)
  // }, [])
  // END LETTER ANIMATIONS ON HOVER BREAKS SITE CURRENTLY  ~55:00 ------------------

  return (
    <>
      <div className="aboutPage">
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              // 1.5 second delay before animation
              idx={15}
            />
          </h1>
          <p>
            Passionate and eager budding developer looking forward to growth and
            adaptation in a fast-paced technological landscape. Construction
            experience building elevator storage units and laboratory
            environment have helped bolster an aptitude to learn quickly and
            take on challenging tasks with a purposeful, realistic approach.
            User experience design focused and aimed at optimizing ease-of-use
            to accommodate people of all computer literacy levels.
          </p>
          <p>!!!Extracurriculars about me here!!!</p>
        </div>
        <SpinningCube />
        {/* 1 SPINNING CUBE PARTS---------------------- */}
        {/* <div className="stageCubeContainer"> */}
        {/* <div className="cubeSpinner"> */}
        {/* cubeSpinner will hold the 6 sides of the cube */}
        {/* <div className="face1"> */}
        {/* <FontAwesomeIcon icon={faNodeJs} color="#539E43" /> */}
        {/* </div> */}
        {/* <div className="face2"> */}
        {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
        {/* </div> */}
        {/* <div className="face3"> */}
        {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
        {/* </div> */}

        {/* <div className="face4"> */}
        {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> */}
        {/* </div> */}

        {/* <div className="face5"> */}
        {/* <FontAwesomeIcon icon={faJs} color="#EFD81D" /> */}
        {/* </div> */}

        {/* <div className="face6"> */}
        {/* <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* END 2 SPINNING CUBE PARTS---------------------- */}
      </div>
      {/* <Loader type='pacman' /> */}
      <Loader type="ball-scale" />
    </>
  )
}

export default About
