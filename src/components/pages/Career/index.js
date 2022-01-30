import React from "react";
import PageNav from "../../atoms/PageNav";

const Career = () => {
    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="커리어" href="/career"/>

            <section className="title_section">
                <div>
                    <h2>
                        커리어 소개
                    </h2>
                    <br/>
                    <h3>
                        개발자로서 로드맵을 표현해 보았습니다.
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
                                <div className="title_div" onClick={() => window.open("http://www.i-bricks.co.kr", "_blank")}>
                                    <img src="/images/career/ibricks.png" alt="정부 로고"/>
                                    <div className="title_inner_div">
                                        <p>(주) 아이브릭스 입사</p>
                                        <h3>Node.js & ElasticSearch 기반의 챗봇, 검색, 추천 서비스를 제공하는 솔루션 기업</h3>
                                    </div>
                                </div>

                                <br/>
                                <br/>
                                <li>Node.js</li>


                            </div>


                            <div className="right_inner_div">
                                <div className="ibricks_div">
                                    <li>사업 투입</li>
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
