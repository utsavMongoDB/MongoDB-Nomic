"use client";
import Link from 'next/link';
import Icon from '@leafygreen-ui/icon';

interface NavBarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <nav style={{ backgroundColor: '#00684A', padding: '1rem', position: 'fixed', width: '100%', top: 0, zIndex: 1, display: 'flex', alignItems: 'center' }}>
      <ol style={{ listStyleType: 'none', margin: 10, padding: 0, display: 'flex', alignItems: 'center', width: '100%' }}>
        <img src='/mongoDB.svg' width={"1%"} style={{ display: 'inline', marginLeft: '1rem' }} />
        {/* <li style={{ display: 'inline', marginLeft: '5rem' }}>
          <Link href="/">
            Home
          </Link>
        </li> */}
        <li style={{ display: 'inline', marginLeft: '2rem' }}>
          <Link href="/">
            Trip Planner
          </Link>
        </li>
        <li style={{ display: 'inline', marginRight: '1rem', marginLeft: 'auto' }}>
          {isLoggedIn ? (
            <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              Logout
            </button>
          ) : (
            <Link href="/login">
              <Icon glyph='LogOut' size={"xlarge"}></Icon>
            </Link>
          )}
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;