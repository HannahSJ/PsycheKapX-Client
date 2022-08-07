import React from 'react'
import styled from 'styled-components'


const HomePage = () => {
    return (
        <>
            <HomePageStyled>
                <div className='typography'>
                    <h1>สวัสดีขอต้อนรับเข้าสู่ <span>Psyche</span> </h1>
                    <p>
                        มาเริ่มต้นผ่อนคลาย พูดคุย และสาระความรู้เกี่ยวกับจิตวิทยาเพื่อการดูแลสุขภาพจิตของตนเองที่น่าสนใจ 
                        พร้อมผู้ช่วยที่จะค่อยแนะนำและแบ่งเบาความหนักอึ้งในใจท่าน kapX จะคอยดูแลเสมอเมื่อท่านต้องการ
                    </p>
                </div>
            </HomePageStyled>
            <Section id="article">
                {/* <div className='title'>
                    <h1>สวัสดีขอต้อนรับเข้าสู่ <span>Psyche</span></h1>
                    <p>
                     มาเริ่มต้นผ่อนคลาย พูดคุย และสาระความรู้เกี่ยวกับจิตวิทยาเพื่อการดูแลสุขภาพจิตของตนเองที่น่าสนใจ 
                     พร้อมผู้ช่วยที่จะค่อยแนะนำและแบ่งเบาความหนักอึ้งในใจท่าน kapX จะคอยดูแลเสมอเมื่อท่านต้องการ
                    </p>
                </div> */}
                <div className='content'>
                    <div className='content'>
                        <img src='https://picsum.photos/id/177/350/250' alt="Content" />
                        <div className='link'>
                        </div>
                        <h3>5 วิธีสร้างความสุขให้ตัวเอง</h3>
                        <p>“ความสุข” เป็นสิ่งที่อยู่รอบ ๆ ตัวเราเพียงแค่เรามองหา หรือบางครั้งความสุขนั้นสามารถสร้าง...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/175/350/250' alt="Content" />
                        <div className='link'>
                        </div>
                        <h3>การปรับตัวเพื่อการนอนหลับที่ดี</h3>
                        <p>การนอนหลับอย่างมีความสุขเป็นสิ่งที่ใครหลายๆคนต้องการและการนอนไม่หลับก็เ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/274/350/250' alt="Content" />
                        <div className='link'>
                        </div>
                        <h3>ปัญหาต่าง ๆ เกี่ยวกับการนอน</h3>
                        <p>หลายปัญหาที่เกี่ยวข้องกับการนอนเป็นสัญญาณเตือนว่า สุขภาพร่างกายกำลังต้อง...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/1008/350/250' alt="Content" />
                        <div className='link'>
                        </div>
                        <h3>การปรับตัวเพื่อการนอนหลับที่ดี</h3>
                        <p>การนอนหลับอย่างเป็นสุขเป็นสิ่งที่ผู้ที่มีปัญหาการนอนหลับต่างอยากให้เกิดขึ้นในชีวิตของ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/312/350/250' alt="Content" />
                        <div className='link'>
                        </div>
                        <h3>3 กลุ่มโภชนาการอาหารที่ร่างกายควรได้รับก่อนออกกำลังกาย</h3>
                        <p>โภชนาการที่ร่างกายควรได้รับก่อนออกกำลังกายนั้นมีความความแตกต่างกัน ขึ้นอยู่กับ...</p>
                    </div>
                </div>
            </Section>
        </>
        
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 30vh;
    position: relative;
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }
    h1{
        font-size: 3rem;
        color: #015C92;
    }
    p{
        color: #015C92;
        line-height: 2rem;
    }
`
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
                height: 100px;
                width: 50%;
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

export default HomePage
