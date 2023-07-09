import React from 'react';
import Link from 'next/link';
const NavBar = () => {
  return (
    <nav style={{ backgroundColor: 'white', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid black' }}>
      <div>
        <Link href="/">
          <img src="/yourphotos-logo-black.png" alt="Logo" style={{ height: '20px', width: 'auto' }} />
        </Link>
      </div>
      <div>
        <img src="/user.png" alt="User Profile" style={{ height: '30px', width: 'auto' }} />
      </div>
    </nav>
  );
};

export default NavBar;
