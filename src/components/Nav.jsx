import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    <nav className="navbar navbar-light p-3 justify-content-space-between shadow mb-5 " >
        <div className="container-fluid">
            <p className="h2 text-white display-6">Diego Melo</p>
            
            <div className='center h5' >
                <Link to='/' className="nav-link text-white">Home</Link>
                <Link to='/projects' className="nav-link text-white">Projects</Link>
            </div>
        </div>
    </nav>);
}

export default Nav;