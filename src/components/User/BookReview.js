import React from 'react'
import styled from 'styled-components';
import Data from '../BookReviewData'


const BookReview = () => {
    return (
        <>
            <Section id="bookreview">
                <div className='title'>
                    <h1>หนังสือแนะนำ</h1>
                </div>
                <div className='content'>
                    {Data.bookReviewData.map((content) => {
                        return(
                            <>
                            <div className='content'>
                                <h3>{content.title}</h3>
                                <h6>{content.subtitle}</h6>
                                <p>{content.author}</p>
                                <img src={content.image} alt="Book" />
                            </div>
                            </>
                        )
                    })}
                </div>
            </Section>
        </>
    )
}

const Section = styled.section`
    padding: 2rem 0;

    .title {
        text-align: center;
        margin-bottom: 2rem ;
        color: #015C92;
    }
    .content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        padding: 0 3rem;
        .content {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            background-color: #D9F1F1;
            border-radius: 1rem;
            transition: 0.3s ease-in-out;
            
            &:hover {
                cursor: pointer;
                transform: translateX(0.4rem) translateY(-1rem);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
            img {
                height: 550px;
                width: 100%;
                border-radius: 1rem;
            }
            h3 {
                color: #015C92;
            }
            h6 {
                color: gray;
            }
            p {
                color: #594F4F;
            }
        }
        
    }
`;

export default BookReview
