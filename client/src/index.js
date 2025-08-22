import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import store from './store.js';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ConfigProvider, theme as antdTheme } from 'antd';

(async () => {
  const res = await fetch('/api/v1/stripe-publishable-key');
  const data = await res.json()
  const stripePromise = loadStripe(data.stripePK)

  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#0b0f14',
        paper: 'rgba(17, 25, 40, 0.75)'
      },
      primary: { main: '#8ab4f8' },
      secondary: { main: '#bb86fc' }
    },
    typography: {
      fontFamily: "'Montserrat','Helvetica Neue',Helvetica,Arial,'Gilroy',sans-serif",
      fontSize: 16, // base size in px
      h1: { fontSize: '3.2rem', fontWeight: 700 },
      h2: { fontSize: '2.6rem', fontWeight: 700 },
      h3: { fontSize: '2.2rem', fontWeight: 600 },
      h4: { fontSize: '1.9rem', fontWeight: 600 },
      h5: { fontSize: '1.6rem', fontWeight: 600 },
      body1: { fontSize: '1.6rem' },
      body2: { fontSize: '1.4rem' },
    },
    shape: { borderRadius: 14 },
  });

  root.render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <Elements stripe={stripePromise}>
              <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <ConfigProvider theme={{
                  algorithm: antdTheme.darkAlgorithm,
                  token: {
                    colorPrimary: '#8ab4f8',
                    colorInfo: '#8ab4f8',
                    colorSuccess: '#00e5a8',
                    colorWarning: '#fdbb2d',
                    colorError: '#ff6b6b',
                    colorBgBase: '#0b0f14',
                    colorTextBase: '#e6e6e6',
                    colorBorder: 'rgba(255,255,255,0.16)',
                    colorBgContainer: 'rgba(17, 25, 40, 0.9)',
                    borderRadius: 14,
                    fontSize: 16,
                  },
                  components: {
                    Layout: {
                      bodyBg: '#0b0f14',
                      headerBg: 'rgba(17,25,40,0.9)'
                    },
                    Card: { colorBgContainer: 'rgba(17,25,40,0.9)' },
                    Modal: { contentBg: 'rgba(17,25,40,0.96)' },
                    Menu: { itemBg: 'transparent', popupBg: 'rgba(17,25,40,0.98)' },
                    Dropdown: { menuBg: 'rgba(17,25,40,0.98)' },
                    Tooltip: { colorBgSpotlight: 'rgba(17,25,40,0.98)' },
                    Input: { colorBgContainer: 'rgba(255,255,255,0.06)' },
                    Select: { colorBgContainer: 'rgba(255,255,255,0.06)' }
                  }
                }}>
                  <App /> 
                </ConfigProvider>
              </ThemeProvider>
            </Elements>
          </BrowserRouter>
        </HelmetProvider>
      </ReduxProvider>
    </React.StrictMode>
  );

})();
