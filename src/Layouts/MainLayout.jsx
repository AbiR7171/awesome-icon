import React from 'react';
import Header from '../Pages/Header';
import SearchPage from '../Pages/SearchPage';
import MainPage from '../Pages/MainPage';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <SearchPage/>
            <MainPage/>
            
        </div>
    );
};

export default MainLayout;