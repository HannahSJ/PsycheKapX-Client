import React from 'react'
import styled from 'styled-components'


const HomePage = () => {
    return (
        <HomePageStyled>
            <div className='typography'>
                <h1>สวัสดีขอต้อนรับเข้าสู่ <span>Psyche</span> </h1>
                <p>
                    มาเริ่มต้นผ่อนคลาย พูดคุย และสาระความรู้เกี่ยวกับจิตวิทยาเพื่อการดูแลสุขภาพจิตของตนเองที่น่าสนใจ 
                    พร้อมผู้ช่วยที่จะค่อยแนะนำและแบ่งเบาความหนักอึ้งในใจท่าน kapX จะคอยดูแลเสมอเมื่อท่านต้องการ
                </p>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
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

export default HomePage
