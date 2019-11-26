import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/index">
      <a style={linkStyle}>index</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>about</a>
    </Link>
  </div>
);

export default Header;