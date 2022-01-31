import React from "react";
import PageNav from "../../atoms/PageNav";

const Career = () => {
    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="커리어" href="/career"/>

            <section className="career_title_section">
                <div>
                    <h2>
                        커리어 소개
                    </h2>
                    <br/>
                    <h3>
                        개발자로서의 경력 로드맵을 표현해 보았습니다.
                    </h3>
                </div>
            </section>

            <section className="contents_section">
                <div className="contents_container">
                    <div className="contents">

                        <div className="contents_left_div">
                            <div className="idx1 history">
                                <h3>
                                    2019.11
                                </h3>
                            </div>

                            <div className="history">
                                <h3>
                                    2020.01
                                </h3>
                            </div>
                        </div>


                        <div className="contents_right_div">
                            <div className="idx1 right_inner_div">
                                <div className="title_div"
                                     onClick={() => window.open("http://www.i-bricks.co.kr", "_blank")}>
                                    <img src="/images/career/ibricks.png" alt="정부 로고"/>
                                    <div className="title_inner_div">
                                        <p>(주) 아이브릭스 입사</p>
                                        <h3>Node.js & ElasticSearch 기반의 챗봇, 검색, 추천 서비스를 제공하는 솔루션 기업</h3>
                                    </div>
                                </div>

                                <div className="contents_div">
                                    <br/>
                                    <br/>
                                    <li>업무 투입에 필요한 Node.js, React, Express, ElasticSearch 학습.</li>
                                    <li>사내에서 사용할 챗봇 React 공통 템플릿 개발.</li>
                                    <h3>&nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                        선배 개발자들과 함께 총 3명이 투입됨.<br/>
                                        &nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                        Header, Middle, Footer로 이루어진 챗봇에서 Footer의 전반적인 기능을 개발함. <br/>
                                        &nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                        자동완성 기능, 챗봇 내 텍스트 크기 변환 기능, 일정시간이 지난 후 대화종료 기능, Footer 퍼블리싱을 맡았음. <br/>
                                        &nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                        Bitbucket을 통한 형상관리를 하였음.

                                    </h3>


                                </div>
                            </div>


                            <div className="right_inner_div">
                                <div className="title_div"
                                     onClick={() => window.open("http://chatbot.yuhs.ac", "_blank")}>
                                    <img src="/images/project/yonsei.png" alt="연세세브란스 로고"/>
                                    <div className="title_inner_div">
                                        <p>연세 세브란스 챗봇 구축 사업 투입</p>
                                        <h3>-</h3>
                                    </div>
                                </div>

                                <div className="contents_div">
                                    <br/>
                                    <br/>
                                    <li>챗봇 React 공통 템플릿을 가지고 개발자 1인으로 투입됨.</li>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>);
};

Career.propTypes = {};

Career.defaultProps = {};
export default Career;
