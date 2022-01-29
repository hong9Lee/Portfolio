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
                    <div>
                        <ul className="roadmap">
                            <li>
                                <div className="fx contents">
                                    <div>
                                        사진
                                    </div>
                                    <div>
                                        설명
                                    </div>
                                </div>
                            </li>











                        </ul>
                    </div>
                </section>

        </main>
    </>);
};

Career.propTypes = {};

Career.defaultProps = {};
export default Career;
