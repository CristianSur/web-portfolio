import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Ensure smooth loading
document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        createRoot(rootElement).render(
            <StrictMode>
                <App/>
            </StrictMode>,
        );
    }
});

// Fallback for immediate rendering
if (document.readyState === 'loading') {
    // Document is still loading
} else {
    // Document has finished loading
    const rootElement = document.getElementById('root');
    if (rootElement && !rootElement.hasChildNodes()) {
        createRoot(rootElement).render(
            <StrictMode>
                <App/>
            </StrictMode>,
        );
    }
}
