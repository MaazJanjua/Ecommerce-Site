import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black text-white flex justify-between p-4'>
            <div className="logo">GetMeaChai!</div>
            <ul className='flex justify-between  w-[50vw]'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul>

        </nav>
    )
}

export default Navbar