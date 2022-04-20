import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='homeLogo' />
                <img className= 'subLogo' src={LogoSubtitle} alt='subtitleLogo' />

            </Link>
        </div>
    )
}

export default Sidebar;