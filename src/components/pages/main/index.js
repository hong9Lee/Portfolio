import React from "react";
import PageNav from "../../atoms/PageNav";

const MainMiddle = () => {
    return (<>
        <main className="main_container" style={{clear : "both"}}>

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
                            <div className="my_photo_div"><img className="my_photo" src="/images/introduce/honggyulee.jpeg" alt="me img"/></div>
                            <div className="intro">

                                {/*
                                <div className="intro_img">
                                    <img src="/images/introduce/honggyulee.jpeg" alt="intro img"/>
                                </div>
                                */}

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
                                            <img src="/images/introduce/phone.png" alt="me img"/>
                                        </div>

                                        <div className="contents">
                                            <h2>연락처</h2>
                                            <p>010-2749-5136</p>
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
                                            <img src="/images/introduce/grad.png" alt="me img"/>
                                        </div>

                                        <div className="contents">
                                            <h2>학력</h2>
                                            <p>한국산업기술대학교 소프트웨어공학과</p>
                                        </div>
                                    </div>

                                    <div className="int name">
                                        <div className="img_div">
                                            <img src="/images/introduce/email.png" alt="me img"/>
                                        </div>

                                        <div className="contents">
                                            <h2>이메일</h2>
                                            <p>hglee.dev@gmail.com</p>
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

MainMiddle.propTypes = {};

MainMiddle.defaultProps = {};
export default MainMiddle;
