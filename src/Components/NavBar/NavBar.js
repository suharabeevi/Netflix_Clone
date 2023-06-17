import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className='navbar'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <h4 className='home'>Home</h4>
            <h4 className='shows'>TV Shows</h4>
            <h4 className='movies'>Movies</h4>
            <h4 className='recent'>Recently Added</h4>
            <h4 className='list'>My List</h4>
            <h4 className='kids'>KIDS</h4>
            <h4 className='dvd'>DVD</h4>
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />


        </div>
    )
}

export default NavBar