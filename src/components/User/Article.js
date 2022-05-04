import React from 'react'
// import Data from '../ContentData';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";

const Article = () => {


    return (
        <>
            <Section id="article">
                <div className='title'>
                    <h1>บทความที่น่าสนใจ</h1>
                </div>
                {/* <div className='content'>
                    {Data.contentData.map((content) => {
                        return(
                            <div className='content'>
                                <img src={content.image} alt="Content" />
                                <h3>{content.title}</h3>
                                <p>{content.subtitle}</p>
                            </div>
                        );
                    })}
                </div> */}
                <div className='content'>
                    <div className='content'>
                        <img src='https://picsum.photos/id/216/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con101" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>ปรับความคิดลดวิกฤติฆ่าตัวตาย</h3>
                        <p>การฆ่าตัวตายเป็นเรื่องที่อยู่กับสังคมมายาวนาน ในทุกๆปีมีผู้คนมากกว่า1 ล้านคน...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/175/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con102" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>การปรับตัวเพื่อการนอนหลับที่ดี</h3>
                        <p>การนอนหลับอย่างมีความสุขเป็นสิ่งที่ใครหลายๆคนต้องการและการนอนไม่หลับก็เ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/274/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con103" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>ปัญหาต่าง ๆ เกี่ยวกับการนอน</h3>
                        <p>หลายปัญหาที่เกี่ยวข้องกับการนอนเป็นสัญญาณเตือนว่า สุขภาพร่างกายกำลังต้อง...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/452/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con105" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>การดูแลสุขภาพจิต....ช่วงวิกฤติ COVID-19</h3>
                        <p>ในสถานการ์ณ์ปัจจุบันการเเพร่ระบาดของเชื้อไวรัสโคโรน่า 2019 (Covid 19)เป็น...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/312/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con201" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>3 กลุ่มโภชนาการอาหารที่ร่างกายควรได้รับก่อนออกกำลังกาย</h3>
                        <p>โภชนาการที่ร่างกายควรได้รับก่อนออกกำลังกายนั้นมีความความแตกต่างกัน ขึ้นอยู่กับ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/633/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con202" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>Auto Suggestion การใช้คำพูดด้านบวกกับตัวเอง</h3>
                        <p>เวลาที่คุณต้องผ่านปัญหาหนักของชีวิต หรือหน้าที่การงานมาด้วยแล้ว คำพูดปลอบใจ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/633/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con203" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>ชื่นชม เสริมกำลัง</h3>
                        <p>การฝึกมองเห็นข้อดีที่น่าชื่นชมของคนอื่น ยังเป็นการฝึกจิตใจของเราเองช่วยให้เรามอง...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/401/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con204" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>8 เคล็ดลับช่วยพัฒนา “การออกกำลังกาย” ให้กลายเป็นนิสัย</h3>
                        <p>การออกกำลังกาย ถือเป็นพฤติกรรมด้านบวกที่เป็นประโยชน์ต่อสุขภาพ ไม่ว่าจะด้วยเหตุ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/282/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con205" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>7 เทคนิคการเข้าสังคมที่ดีควรมีอะไรบ้าง</h3>
                        <p>มองตาคู่สนทนาเป็นเรื่องดี การสบตากับผู้พูดหรือผู้ฟังนั้นสร้างความมั่นใจกับคุณอย่...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/342/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con301" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>Self Esteem การเห็นคุณค่าในตัวเองที่สร้างได้</h3>
                        <p>Self Esteem การเห็นคุณค่าในตัวเอง เป็นสิ่งสำคัญที่จะช่วยส่งเสริมคุณภาพชีวิต ซึ่งการเห็น...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/342/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con302" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>6 วิธีสร้างแรงจูงใจให้ตัวเอง เวลาที่คุณท้อแท้หรือหมดกำลังใจ</h3>
                        <p>แม้แต่คนที่มีความพยายาม และมีแรงกระตุ้นสูง ก็ย่อมมีช่วงเวลาที่ยากลำบากเสมอ บ่อยครั้งที่เราหา...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/497/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con304" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>7 ท่าฝึกโยคะที่บ้านสำหรับมือใหม่หัดเริ่ม</h3>
                        <p>จุดเริ่มต้นของโยคะนั้นมาจากประเทศอินเดียเมื่อหลายพันปีที่แล้ว โดยตกทอดมาเรื่อง ๆ จนแพร่...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/240/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con305" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>10 ประโยคปลอบใจที่อาจอ่อนไหวต่อคนคิดฆ่าตัวตาย</h3>
                        <p>"เรื่องแค่นี้เอง คนอื่นเขาทุกข์กว่าคุณอีก เขายังไม่ฆ่าตัวตายเลย" ความรู้สึกของคนฟัง: ฉันรู้สึกถูก...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/348/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con401" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>12 เทคนิคทางจิตวิทยา ตัวช่วยในการเข้าสังคม</h3>
                        <p>บทความนี้เราจะมาแนะนำเทคนิคง่าย ๆ ให้สามารถเข้าใจลักษณะท่าทางของผู้คน หรือวิธีการ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/177/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con402" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>5 วิธีสร้างความสุขให้ตัวเอง</h3>
                        <p>“ความสุข” เป็นสิ่งที่อยู่รอบ ๆ ตัวเราเพียงแค่เรามองหา หรือบางครั้งความสุขนั้นสามารถสร้าง...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/306/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con403" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>5 ประโยชน์จากการทำสมาธิ เพื่อสุขภาพใจที่ดีของคุณ</h3>
                        <p>แต่ละวันนั้น คุณรู้หรือไม่ว่า คุณมีความคิดมากมายขนาดไหน มีทั้งเรื่องที่ดีและเรื่องที่สามารถ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/1005/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con404" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>6 วิธีดูแลสุขภาพจิต คลายความวิตกกังวล ช่วงโควิด-19</h3>
                        <p>ในสถานการณ์ปัจจุบัน หลายๆคนอาจตกอยุ่ในปัญหาความไม่แน่นอนหลายๆอย่าง ไม่ว่าจะเป็น...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/292/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con405" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>สาเหตุนอนไม่หลับและเคล็ดลับการแก้ไข</h3>
                        <p>การนอนหลับพักผ่อนให้พียงพอเป้นปัจจัยสำคัยมากสำหรับมนุษย์ในการใช้ชีวิต หากเราพักผ่อน...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/349/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con501" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>การเห็นคุณค่าในตัวเอง (Self Esteem)</h3>
                        <p>จิตใต้สำนึกของคนที่มี self esteem จะต้องรู้บาปบุญ คุณโทษ รู้สิ่งใดดีสิ่งใดไม่ดี...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/1008/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con502" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>การปรับตัวเพื่อการนอนหลับที่ดี</h3>
                        <p>การนอนหลับอย่างเป็นสุขเป็นสิ่งที่ผู้ที่มีปัญหาการนอนหลับต่างอยากให้เกิดขึ้นในชีวิตของ...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/1014/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con503" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>8 วิธี สร้างแรงจูงใจพัฒนาตัวเอง เพื่องานก้าวหน้า</h3>
                        <p>เราต้องสร้างแรงจูงใจในการทำงาน เพราะการทำงานอาจจะก่อให้เกิดความท้อ ความเหนื่อยล้า...</p>
                    </div>
                    <div className='content'>
                        <img src='https://picsum.photos/id/367/350/250' alt="Content" />
                        <div className='link'>
                            <ul>
                                <ArticleLink to="/con504" target="_blank"><IoMdLogIn/></ArticleLink>
                            </ul>
                        </div>
                        <h3>เคล็ดลับดีๆ 7 ข้อในการสร้าง “ความรู้สึกดี” ที่มีให้กับตัวเอง</h3>
                        <p>ความรู้สึกดีกับตัวเองนั้น เป็นแนวคิดที่ดี ที่จะทำให้เราอดทนกับปัญหา และฟังฝ่าอุปสรรค์...</p>
                    </div>
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
                cursor: pointer;
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
                        color: #015C92;
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

const ArticleLink = styled(Link)`
    /* display: block;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    display: flex; */
`

export default Article
