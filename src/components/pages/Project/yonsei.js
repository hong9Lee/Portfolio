import React from "react";
import PageNav from "../../atoms/PageNav";

const PageYonsei = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="연세 세브란스 병원 챗봇 서비스 구축" href="/project" d_href="/project/yonsei"/>


            <section className="title_section">
                <div>
                    <h2>연세 세브란스 병원 챗봇 서비스 구축</h2>
                </div>
            </section>

            <section className="outline">
                <div className="yonsei_u_line">
                    <div className="yonsei_image">
                        <img className="left_project_img" src="/images/project/yonsei/yonsei_chatbot_img.png" alt="연세 챗봇 이미지"/>
                    </div>

                    <div className="yonsei_contents">
                        <h2>1) 진행기간</h2>
                        <p>2020.01 ~ 2020.06</p><br/>

                        <h2>2) 주요내용</h2>
                        <p>React 기반의 민원 상담 챗봇 개발 및 배포</p>
                        <p>개발자 1인으로 PM 포함 총 2명 투입</p>
                        <p>퍼블리싱부터 기능개발, API 서버 개발, 배포 까지 맡음</p><br/>

                        <h2>3) 기여한 점</h2>

                        <p>• Chatbot</p>
                        <p>HTML/CSS를 활용하여 퍼블리싱 작업</p>
                        <p>React Hook을 활용하여 챗봇 기능 개발</p><br/>

                        <p>• API</p>
                        <p>자동완성, 금지어, 미매칭 질의 추천 API 개발</p><br/>

                        <p>• Migration</p>
                        <p>개발 서버에 구축된 데이터를 운영 서버로 Migration 작업 (Logstash)</p><br/>

                        <p>• Server</p>
                        <p>Linux에 프로세스를 설치하고 전체 프로세스를 실행/중지하는 Batch Script를 작성</p><br/>

                        <h2>4) 사용한 기술스택 및 지식</h2>
                        <p>HTML/CSS, React, NodeJS, Express, ElasticSearch, Logstash</p><br/>

                        <h2>5) URL</h2>
                        <div className="links">
                            <p><a href="http://chatbot.yuhs.ac"  target="_blank" rel="noreferrer">http://chatbot.yuhs.ac</a></p>
                        </div>

                    </div>
                </div>
            </section>

        </main>
        </>);
};

PageYonsei.propTypes = {};

PageYonsei.defaultProps = {};
export default PageYonsei;
