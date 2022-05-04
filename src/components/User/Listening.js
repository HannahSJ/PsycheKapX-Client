import React from 'react'
import Data from '../ListeningData'
import styled from 'styled-components'
import { FaYoutube } from "react-icons/fa";

const Listening = () => {


    return (
        <>
            <Section id="listvideo">
                <div className='title'>
                    <h1>ฟังเพลินๆ</h1>
                </div>
                <div className='content'>
                    {Data.listeningData.map((content) => {
                        return(
                            <div className='content'>
                                <img src={content.image} alt='Video' />
                                <div className='link'>
                                    <ul>
                                        <a target="_blank" href={content.link}><FaYoutube /> </a>
                                    </ul>
                                </div>
                                <h3>{content.title}</h3>
                                <p>{content.text}</p>
                            </div>
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
            
            ul {
                display: none;
            }

            &:hover {
                transform: translateX(0.4rem) translateY(-1rem);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

                ul {
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 40%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    a {
                        font-size: 80px;
                        color: red;
                    }
                }

            }
            img {
                height: 300px;
                width: 100%;
                border-radius: 1.5rem;
            }


            h3 {
                color: #015C92;
            }
            p {
                color: #594F4F;
            }
        }
    }
`;

export default Listening
