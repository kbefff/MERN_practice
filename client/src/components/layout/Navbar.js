import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="index.html">
                    <i className="fas fa-code"></i>
                    DevConnector</a>
            </h1>
            <ul>
                <li>
                    <Link to='/profiles'>Developers</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/dashboard'>
                        <i className='fas fa-user'/>{' '}
                        <span className='hide-sm'>Dashboard</span>
                    </Link>
                </li>
                <li>
                    {/* <a onClick={logout} href='#!'>
                        <i className='fas fa-sign-out-alt'/>{' '}
                        <span className='hide-sm'>Logout</span>
                    </a> */}
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;