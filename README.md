# SSED_NextJS
SSED_NextJS

# Next.js 

```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```

```
//package.json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

- npm run dev

## Getting Started

### Creating Our First Page

Create a file named `pages/index.js` and add the following content:

- Webpack's hot module replacement
- export default Header

```javascript
const Index = () => (
// localhost:3000/index
<div>
  <p>Hello Next.js</p>
</div>
);

export default Index;
```

## Navigate Between Pages

### Creating Our about Page

- http://localhost:3000/about

```javascript
// localhost:3000/about
export default function About() {
  return (
    <div>
      <p>This is the about page</p>
    </div>
  );
}
```

### Using Link

- Link href "/about" replace "a href"
- `next/link`
- `next/link` does all the [`location.history`](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- Link is [Higher Order Component (HOC)](https://reactjs.org/docs/higher-order-components.html)

```javascript
// localhost:3000/index
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```

## Using Shared Components

- import Header from './header';
- Css {} style

```javascript
// header.js
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
```

```javascript
import Link from 'next/link';
import Header from './header';

const Index = () => (
  <div>
    <Header />
    {/*
    <Link href="/about" title="About Page">
      <a>About Page</a>
    </Link>
    */}
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```

### The Layout Component

- props.children
- If remove `props.children` others [2 methods](https://nextjs.org/learn/basics/using-shared-components/rendering-children-components) ?
  1. As common header components.
  2. As Layouts.

```javascript
//components/MyLayout.js
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
```

```javascript
// pages/index.js

import Layout from '../components/MyLayout';

export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  );
}
```

```javascript
// pages/about.js

import Layout from '../components/MyLayout';

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  );
}
```
