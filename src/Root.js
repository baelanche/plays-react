import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from 'store/configure';
import App from 'components/App';
import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

const store = configure();

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppHeader/>
                <App/>
                <AppFooter/>
            </BrowserRouter>
        </Provider>
    )
}

export default Root;