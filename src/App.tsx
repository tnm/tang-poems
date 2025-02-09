import { Route, Routes } from 'react-router-dom';
import TableOfContents from './components/TableOfContents';
import About from './components/About';
import PoemView from './components/PoemView';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import './styles/responsive.css';
import type { CSSProperties } from 'react';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <SiteHeader />

      <main
        style={
          {
            flex: 1,
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: '1rem 2rem',
          } satisfies CSSProperties
        }
      >
        <Routes>
          <Route path="/" element={<TableOfContents />} />
          <Route path="/poem/:poemId" element={<PoemView />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
