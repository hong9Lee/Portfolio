import React from "react";
import PageNav from "../../atoms/PageNav";

const IntroMiddle = () => {
    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="소개" href="/introduce"/>

            <section className="title_section">
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
                                <img src="/images/honggyulee.jpeg" alt="intro img"/>
                            </div>
                            <div className="box_list">
                                <div className="int name">
                                    <div>
                                        <img src="/images/me.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>이름</h2>
                                        <p>이홍규</p>
                                    </div>

                                </div>

                                <div className="int name">
                                    <div>
                                        <img src="/images/me.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>생년월일</h2>
                                        <p>91.11.21</p>
                                    </div>

                                </div>

                                <div className="int name">
                                    <div>
                                        <img src="/images/me.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>주소</h2>
                                        <p>경기도 군포시</p>
                                    </div>

                                </div>


                                <div className="int name">
                                    <div>
                                        <img src="/images/me.png" alt="me img"/>
                                    </div>

                                    <div className="contents">
                                        <h2>연락처</h2>
                                        <p>010-2749-5136</p>
                                    </div>

                                </div>

                                <div className="int name">
                                    <div>
                                        <img src="/images/me.png" alt="me img"/>
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

        </main>
    </>);
};

IntroMiddle.propTypes = {};

IntroMiddle.defaultProps = {};
export default IntroMiddle;
