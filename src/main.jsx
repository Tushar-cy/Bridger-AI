import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // <-- Import ThemeProvider
import './index.css';
import App from './App';

/* Your ErrorBoundary class (no changes) */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error('Captured error:', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, fontFamily: 'Inter, system-ui, sans-serif', color: '#111', background: '#ffecec' }}>
          <h2>App crashed — error caught</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#000' }}>{String(this.state.error)}</pre>
          <p style={{ opacity: 0.9 }}>Check the browser console for the stack trace. Fix the offending component and reload.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider> {/* <-- Wrap App in ThemeProvider */}
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);