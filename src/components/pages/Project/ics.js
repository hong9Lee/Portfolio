import React from "react";
import PageNav from "../../atoms/PageNav";

const PageIcs = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="인천 서구청 민원상담 챗봇 시스템 구축" href="/project" d_href="/project/ics"/>


            <section className="title_section">
                <div>
                    <h2>인천 서구청 민원상담 챗봇 시스템 구축</h2>
                </div>
            </section>

            <section className="outline">
                <div className="yonsei_u_line">
                    <div className="yonsei_image">
                        <img className="left_project_img" src="/images/project/ics/ics.png" alt="인천 서구청 챗봇 이미지"/>
                    </div>

                    <div className="yonsei_contents">
                        <h2>1) 진행기간</h2>
                        <p>2020.04 ~ 2020.10</p><br/>

                        <h2>2) 주요내용</h2>
                        <p>React 기반의 민원 상담 챗봇 개발 및 배포</p>
                        <p>PM 1명 / 백엔드 2명 / 프론트 1명 / 작가 2명</p>
                        <p>완성된 퍼블리싱을 적용, 챗봇 기능 개발, API 개발, 수집 및 색인, 배포까지 맡았습니다.</p><br/>

                        <h2>3) 기여한 점</h2>
                        <p>• API</p>
                        <p>각 기관 데이터 및 공공데이터를 활용한 API 연동 개발</p>
                        <p>&nbsp;&nbsp;1)&nbsp;&nbsp;사용자 위치 동의를 받고, 현재 위치의 날씨를 알려주는 API를 개발</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`->`} 미세먼지 OpenAPI의 할당 트래픽이 부족하여, 같은 위치에서는 30분에 한번씩만 호출하는 로직을 개발</p>
                        <p>&nbsp;&nbsp;2)&nbsp;&nbsp;카카오 지도API 연동해 인천 서구의 무인민원발급기 위치를 출력하는 API를 개발</p>
                        <p>&nbsp;&nbsp;3)&nbsp;&nbsp;공휴일 OpenAPI를 활용하여 서구청 휴무일에는 챗봇 응답메시지에 반영되도록 API를 개발</p><br/>

                        <p>• 수집</p>
                        <p>민원 데이터를 일정 주기마다 수집, 가공, 색인하는 Batch 파일을 작성 (Logstash, ElasticSearch)</p><br/>

                        <p>• 서버</p>
                        <p>Linux에 환경세팅, 프로세스를 설치, 프로세스를 제어하는 Batch Script를 작성</p>
                        <p>pm2 패키지를 이용하여 프로세스를 무중단 배포</p><br/>

                        <p>• 유지보수</p>
                        <p>고객의 편의를 위해 챗봇 관리도구 응답률 통계 Excel 다운로드 기능 개발</p><br/>

                        <h2>4) 사용한 기술스택 및 지식</h2>
                        <p>HTML/CSS, React, NodeJS, Express, ElasticSearch, Logstash</p><br/>

                        <h2>5) URL</h2>
                        <div className="links">
                            <p><a href="https://chatbot.seo.incheon.kr"  target="_blank" rel="noreferrer">https://chatbot.seo.incheon.kr</a></p>
                        </div>

                    </div>
                </div>
            </section>

        </main>
        </>);
};

PageIcs.propTypes = {};

PageIcs.defaultProps = {};
export default PageIcs;
