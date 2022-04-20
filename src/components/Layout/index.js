// parent for all of our components
 
import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags topTags'>&lt;body&gt;</span>

            <Outlet />

            <span className='tags bottomTags'>
            &lt;/body&gt;
            <br />
            <span className='bottomTagHTML'>&lt;/html&gt;</span>
            </span>
        </div>
    </div>
    )
}

export default Layout;