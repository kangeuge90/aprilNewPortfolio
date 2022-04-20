import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    return(
        <div className='container homePage'>
            <div className='textZone'>
                <h1>Hi, <br  /> I'm
                Eugene
                <br />
                Software Engineer
                </h1>

                <h2>Fullstack Developer / JavaScript / TypeScript</h2>
                <br />
                <h2>Foodie / Philosophy Buff / Fitness Focused</h2>
                <Link to='/contact' className='flatButton'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home;