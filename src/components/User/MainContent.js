import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Article from './Article'
import Listening from './Listening';
import BookReview from './BookReview';
import Profile from './Profile';


const MainContent = () => {
    return (
        <>
        <MainContentStyled>
            {/* <div className='lines'>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
                <div className='line-4'></div>
            </div> */}

            <Switch>
                <Route path="/user" exact>
                    <HomePage />
                </Route>
                <Route path="/article" exact>
                    <Article />
                </Route>
                <Route path="/listening" exact>
                    <Listening />
                </Route>
                <Route path="/bookreviewe" exact>
                    <BookReview />
                </Route>
                <Route path="/profile" exact>
                    <Profile />
                </Route>
            </Switch>
            
        </MainContentStyled>
        </>
    )
}

const MainContentStyled = styled.main`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;
    background-color: #BCE6FF;
    .lines{
        position: absolute;
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .line-1, .line-2, .line-3, .line-4{
            width: 1px;
            min-height: 100vh;
            background-color: #FC913A;
        }
    }
`;

export default MainContent
