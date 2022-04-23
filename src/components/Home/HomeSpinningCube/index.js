import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCss3,
//   faReact,
//   faGitAlt,
//   faHtml5,
//   faJs,
//   faNodeJs,
// } from '@fortawesome/free-brands-svg-icons'
import {
  faBook,
  faBookopen,
  faBowlingBall,
  faBrain,
  faBriefcase,
  faCutlery,
  faFingerprint,
  faGraduationCap,
  faGuitar,
  faHardHat,
  faHeadphones,
  faHeadphonesAlt,
  faHeadphonesSimple,
  faHeadset,
  faKitchenSet,
  faMagnifyingGlass,
  faMagnifyingGlassArrowRight,
  faMagnifyingGlassChart,
  faMusic,
  faScrewdriver,
  faScrewdriverWrench,
  faSuitcase,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import {
faDev,
} from '@fortawesome/free-brands-svg-icons'

const SpinningCube = () =>
  //   image1,
  //   color1,
  //   image2,
  //   color2,
  //   image3,
  //   color3,
  //   image4,
  //   color4,
  //   image5,
  //   color5,
  //   image6,
  //   color6
  {
    const letterClass = 'textAnimate'

    return (
      <>
        <div className="stageCubeContainer">
          <div className="cubeSpinner">
            {/* cubeSpinner will hold the 6 sides of the cube */}
            <div className="face1">
              <FontAwesomeIcon icon={faBook} color="#539E43" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faBowlingBall} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCutlery} color="#28A4D9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faGuitar} color="#5ED4F4" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faDev} color="#EFD81D" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faScrewdriverWrench} color="#EC4D28" />
            </div>
            {/* <div className="face1">
            <FontAwesomeIcon icon={image1} color={color1} />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={image2} color={color2} />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={image3} color={color3} />
          </div>

          <div className="face4">
            <FontAwesomeIcon icon={image4} color={color4} />
          </div>

          <div className="face5">
            <FontAwesomeIcon icon={image5} color={color5} />
          </div>

          <div className="face6">
            <FontAwesomeIcon icon={image6} color={color6} />
          </div> */}
          </div>
        </div>
      </>
    )
  }

export default SpinningCube
