import React, { useState } from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElement'
import { 
    PsycheContainer, 
    PsycheBg, VideoBg, 
    PsycheContent, 
    PsycheH1, 
    PsycheP, 
    PsycheBtnWrapper,
    ArrowForward,
    ArrowRight,

} from './PsycheElements'

const PsycheSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
 
    return (
        <PsycheContainer>
            <PsycheBg>
                <VideoBg autoPlay loop muted src={Video} type='video.mp4' />
            </PsycheBg>
            <PsycheContent>
                <PsycheH1>โอบกอดเธอในวันที่เลวร้าย และเราจะอยู่ที่นั่นเสมอ เพื่อแบ่งปันความเจ็บปวดให้มากที่สุดเท่าที่จะทำได้</PsycheH1>
                <PsycheP>
                    เข้ามาพูดคุยฮีลใจ ปล่อยใจสบายๆ เพื่อให้เราได้เป็นพื้นที่ปลอดภัยให้กับคุณ นำความหนักอึ้งมาวางไว้ที่เรา
                </PsycheP>
                <PsycheBtnWrapper>
                    <Button 
                        to='signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='false'
                        dark='true'
                    >
                        เริ่ม! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </PsycheBtnWrapper>
            </PsycheContent>
        </PsycheContainer>
    )
}

export default PsycheSection
