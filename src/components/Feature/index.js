import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-5.svg'
import {
    FeatureContainer, 
    FeatureH1,
    FeatureWrapper,
    FeatureCard,
    FeatureH2,
    FeatureIcon,
    FeatureP
} from './FeatureElements'
const Feature = () => {
    return (
     <FeatureContainer id="feature">
        <FeatureH1>ฟีตเจอร์ ของเรา</FeatureH1>
        <FeatureWrapper>
            <FeatureCard>
                <FeatureIcon src={Icon1} />
                <FeatureH2>ประเมินสุขภาพจิต</FeatureH2>
                <FeatureP>เมื่อเริ่มต้นการใช้งานไซคีย์ สามารถทำแบบทดสอบเพื่อประเมินสุขภาพจิตเบื้องต้น ด้วยตนเอง</FeatureP>
            </FeatureCard>
            <FeatureCard>
                <FeatureIcon src={Icon2} />
                <FeatureH2>กิจกรรมส่งเสริมสุขภาพจิตที่ดี</FeatureH2>
                <FeatureP>กิจกรรมคลายเครียด เนื้อหาเกี่ยวกับการปรับอารมณ์ และแหล่งความรู้เกี่ยวกับการดูแลสุขภาพจิต</FeatureP>
            </FeatureCard>
            <FeatureCard>
                <FeatureIcon src={Icon3} />
                <FeatureH2>AI Chatbot</FeatureH2>
                <FeatureP>ผู้ช่วย เพื่อนคุย ที่ปรึกษา และให้คำแนะนำสำหรับการใช้งานไซคีย์ เพื่อนคุณตลอดเวลา ที่ต้องการ</FeatureP>
            </FeatureCard>
        </FeatureWrapper>
     </FeatureContainer>
    )
}

export default Feature
