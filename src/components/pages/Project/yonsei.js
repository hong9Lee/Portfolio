import React from "react";
import PageNav from "../../atoms/PageNav";

const PageYonsei = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="연세 세브란스 병원 챗봇 서비스 구축" href="/project" d_href="/project/yonsei"/>


            <section className="title_section">
                <div>
                    <h2>연세 세브란스 병원 챗봇 서비스 구축</h2>
                    <p>2020.01 ~ 2020.06</p>
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
                        <p>개발자 2인으로 PM, 시나리오 작가 포함 총 6명 투입됨.</p>
                        <p>완성된 퍼블리싱을 적용, 챗봇 기능 개발, API 개발, 수집 및 색인, 배포까지 맡았음.</p><br/>

                        <h2>3) 기여한 점</h2>
                        <p>• API</p>
                        <p>사용자 위치 동의를 받고, 현재 위치의 날씨를 알려주는 API를 개발함.</p>
                        <p>{`->`} 미세먼지 OpenAPI의 할당 트래픽이 부족하여, 같은 위치에서는 30분에 한번씩만 호출하는 로직을 개발함.</p>
                        <p>카카오 지도API 연동해 인천 서구의 무인민원발급기 위치를 출력하는 API를 개발함.</p>
                        <p>공휴일 OpenAPI를 활용하여 서구청 휴무일에는 챗봇 응답메시지에 반영되도록 API를 개발함.</p><br/>

                        <p>• 수집, 가공, 색인</p>
                        <p>Logstash를 사용하여 민원 데이터 수집, 가공, 색인을 하였음.</p>
                        <p>Logstash Ruby Filter를 이용하여 데이터 가공을 하였음.</p>
                        <p>민원 데이터를 일정 주기마다 수집, 가공, 색인하는 Batch 파일을 작성함.</p><br/>

                        <p>• 서버</p>
                        <p>Linux에 환경세팅, 프로세스를 설치, 프로세스를 제어하는 Batch Script를 작성함.</p>
                        <p>pm2 패키지를 이용하여 프로세스를 무중단 배포함.</p><br/>

                        <h2>4) 사용한 기술스택 및 지식</h2>
                        <p>HTML/CSS, React, NodeJS, Express, ElasticSearch, Logstash</p><br/>

                        <h2>5) URL</h2>
                        <div className="links">
                            <p><a href="http://chatbot.yuhs.ac">http://chatbot.yuhs.ac</a></p>
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
