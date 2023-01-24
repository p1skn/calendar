import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContext } from 'styled-components';
import ContextWrapper from './context/ContextWrapper';
import App from './components/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContext.Provider>
        <ContextWrapper>
            <App />
        </ContextWrapper>
    </ThemeContext.Provider>
);
