import React from "react";
import PageNav from "../../atoms/PageNav";

const IntroMiddle = () => {
    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="소개" href="/introduce"/>

            <section className="intro_title_section">
                <div>
                    <h2>
                        반갑습니다!
                        <br/>
                        발전하는 부지런한 개발자 이홍규 입니다.
                    </h2>
                </div>
            </section>

            <section className="detail_section">
                <div>
                <ul className="intro_box">
                    <li>
                        <div className="intro">

                            <div className="intro_img">
                                <img src="/images/introduce/honggyulee.jpeg" alt="intro img"/>
                            </div>

                            <div className="box_list">
                                <div className="int name">
                                    <div className="img_div">
                                        <img src="/images/introduce/me.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>이름</h2>
                                        <p>이홍규</p>
                                    </div>
                                </div>

                                <div className="int name">
                                    <div className="img_div">
                                        <img src="/images/introduce/calender.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>생년월일</h2>
                                        <p>91.11.21</p>
                                    </div>
                                </div>

                                <div className="int name">
                                    <div className="img_div">
                                        <img src="/images/introduce/location.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>주소</h2>
                                        <p>경기도 군포시</p>
                                    </div>
                                </div>


                                <div className="int name">
                                    <div className="img_div">
                                        <img src="/images/introduce/phone.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>연락처</h2>
                                        <p>010-2749-5136</p>
                                    </div>
                                </div>

                                <div className="int name">
                                    <div className="img_div">
                                        <img src="/images/introduce/grad.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>학력</h2>
                                        <p>한국산업기술대학교 소프트웨어공학과</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </section>

            <section className="title_section">
                <div>
                    <h2>
                        기술 스택 소개
                    </h2>
                    <br/>
                    <h3>
                        보유하고있는 기술들을 나열했습니다.
                        <br/>
                        현업에서 경험하지 못한 기술들은 토이 프로젝트를 통해 습득했습니다.
                    </h3>
                </div>
            </section>

            <section className="skills_section">
                <div>

                    <div className="fx contents_div">
                        <div className="skills_intro_div">
                            <img src="/images/introduce/frontend.png" alt="me img"/>
                            <div>
                                <h3>Frontend</h3>
                                <p>퍼블리싱 & 프레임워크</p>
                            </div>
                        </div>

                        <div className="skills_contents_div">
                            <ul>
                                <div className="skills_round_box">
                                    <div className="skills_round_text">
                                        <p>실무</p>
                                    </div>
                                <li>
                                    <img src="/images/introduce/html.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            HTML/CSS
                                        </h2>
                                        <p>태그를 활용한 마크업</p>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/js.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Javascript
                                        </h2>
                                        <p>ES6 문법 활용</p>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/react.svg" alt="me img"/>
                                    <div>
                                        <h2>
                                            React
                                        </h2>
                                        <p>Redux, Saga, Hook 활용</p>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/jquery.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Jquery
                                        </h2>
                                        <p>라이브러리 활용</p>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/ejs.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Ejs
                                        </h2>
                                        <p>뷰 템플릿으로 사용</p>
                                    </div>
                                </li>

                                </div>

                                <li>
                                    <img src="/images/introduce/thymeleaf.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Thymeleaf
                                            <span>토이</span>
                                        </h2>
                                        <p>뷰 템플릿으로 사용</p>
                                    </div>
                                </li>



                            </ul>
                        </div>

                    </div>

                    <div className="fx contents_div">
                        <div className="skills_intro_div">
                            <img src="/images/introduce/calender.png" alt="me img"/>
                            <div>
                                <h3>Backend</h3>
                                <p>Web & RestAPI</p>
                            </div>
                        </div>

                        <div className="skills_contents_div">
                            <ul>
                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            NodeJS
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Express
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            ElasticSearch
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Nifi, Logstash
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Java
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Spring
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            JPA
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            h2
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            MySql, Oracle
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Redis
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Ruby, Python
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            JUnit, JMeter
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="fx contents_div">
                        <div className="skills_intro_div">
                            <img src="/images/introduce/calender.png" alt="me img"/>
                            <div>
                                <h3>Server</h3>
                                <p>구축 & 배포</p>
                            </div>
                        </div>

                        <div className="skills_contents_div">
                            <ul>
                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Linux
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Git, Bitbucket
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>


                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            AWS
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                                <li>
                                    <img src="/images/introduce/calender.png" alt="me img"/>
                                    <div>
                                        <h2>
                                            Tomcat
                                            <span>실무</span>
                                        </h2>
                                        <span>-</span>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
            </section>


        </main>
    </>);
};

IntroMiddle.propTypes = {};

IntroMiddle.defaultProps = {};
export default IntroMiddle;
