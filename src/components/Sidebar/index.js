import './index.scss'
import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faFileDownload, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className='sideBar'>
            {/* <Link className='logo' to='/'>
                <img src={LogoS} alt='homeLogo' />
                <img className= 'subLogo' src={LogoSubtitle} alt='subtitleLogo' />

            </Link> */}
            <nav>
                <NavLink exact='true' activeclassname='active' className='homeLink' to='/'>
                    <FontAwesomeIcon icon={faHome} color ="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='aboutLink' to='/about'>
                    <FontAwesomeIcon icon={faUser} color ="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className= 'contactLink' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color ="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className= 'projectsLink' to='/projects'>
                    <FontAwesomeIcon icon={faShareSquare} color ="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className= 'resumeLink' to='/resume'>
                    <FontAwesomeIcon icon={faFileDownload} color ="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/eugene-kang90/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://github.com/kangeuge90'
                    >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                {/* <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='<youtube>'
                    >
                        <FontAwesomeIcon icon={faFileDownload} color='#4d4d4e' />
                    </a>
                </li> */}

                {/* <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='<youtube>'
                    >
                        <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                    </a>
                </li> */}
                {/* <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='skype:live:<username>'
                    >
                        <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                    </a>
                </li> */}
            </ul>
        </div>
    )
}

export default Sidebar;