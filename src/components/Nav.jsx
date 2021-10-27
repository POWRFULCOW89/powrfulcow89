import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    <nav className="navbar navbar-light p-3 justify-content-space-between shadow mb-1 gradient " >
        <div className="container-fluid">
            <p className="h2 text-white display-6 main-title">Diego Melo</p>
            
            <div className='center ' style={{fontSize: 22}} >
                <Link to='/' className="nav-link text-primary">Home</Link>
                <Link to='/projects' className="nav-link text-primary">Projects</Link>
            </div>
        </div>
    </nav>);
}

export default Nav;