import React from "react";
import PageNav from "../../atoms/PageNav";

const PageIcs = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="인천 서구청 KT 기가지니 챗봇 연동 사업" href="/project" d_href="/project/ics_kt"/>


            <section className="title_section">
                <div>
                    <h2>인천 서구청 KT 기가지니 챗봇 연동 사업</h2>
                </div>
            </section>

            <section className="common_outline">
                <div className="common_u_line">

                    <div className="common_contents">
                        <h2># 프로젝트 요약</h2>
                        <p>2020년도에 개발했던 <a className="inner_url" href="https://chatbot.seo.incheon.kr"  target="_blank" rel="noreferrer">
                            인천 서구청 챗봇 (서동이) </a>을 KT 기가지니를 통해 TV에서 실행할 수 있도록 연동하는 프로젝트입니다.</p>
                        <p>오픈까지 약 5개월간 투입되었으며, 챗봇을 통한 자동응답 민원 시스템을 통해 공무원의 민원 피로도를 줄이는 것이 목표였습니다.</p>
                        <p>또한, 챗봇 운영중에 발생한 다양한 오류사항과 솔루션을 개선하는 유지보수 업무도 진행했습니다.</p>

                        <br/><br/><br/>

                        <h2># 기술 스택</h2>
                        <p>NodeJS, Gigagenie SDK Module, Ajax, ElasticSearch, Linux</p><br/><br/><br/>

                        <h2># 팀원</h2>
                        <p>PM 1명 / 백엔드 1명 / 프론트 1명 / 작가 3명</p>
                        <p>저는 본 프로젝트에서 백엔드 포지션으로 기가지니에 연동할 챗봇 Application 개발 및 배포,
                        유지보수 작업을 담당했습니다.
                        </p><br/><br/><br/>


                        <h2># 기여한 점</h2>

                        <p>• 챗봇 연동 서비스 구축</p>
                        <p>Gigagenie STT/TTS와 Ajax를 활용하여 3rd-party 챗봇 Application을 개발했습니다.</p>

                        <p>기가지니를 통해 발화된 사용자의 음성입력을 STT 모듈을 활용해 Text로 변환해 Ajax를 통한 챗봇 Dialogue 서버로 요청,</p>
                        <p>서버의 응답값을 TTS 모듈을 활용해 음성/텍스트 값을 TV와 기가지니를 통해 출력하는 Script를 개발했습니다.</p>
                        <p>
                            챗봇의 흐름은 재귀 방식으로 개발했고, 그 과정에서 Gigagenie SDK를 활용해
                            {`
                            "다시듣기"
                        `} , {`
                            "나가기"
                        `} , {`
                            "재질의"
                        `}, {` 
                            "대화종료"
                        `},
                            {`
                            "미매칭 처리"
                        `} 등 <br/> 고객의 요구사항에 맞춰 다양한 기능을 개발했습니다.

                        </p>
                        <br/>

                        <div className="kt_image_div">
                            <img className="kt_image" src="/images/project/ics_kt/seodong.png" alt="인천 서구청 챗봇 이미지"/>
                        </div>

                        <br/><br/><br/>

                        <p>• 유지보수</p>
                        <p>기존 챗봇에서 발생한 오류 및 고객 요구사항을 적용했습니다.</p>
                        <p>특히 백오피스의
                            {`
                                "사용자 통계 데이터 Excel 다운로드" 
                            `}

                                기능의 경우 운영기간이 길어짐에 따라 로그 데이터가 많이 쌓여 엑셀 다운로드 시 OutOfMemory가 발생했습니다.</p>
                            <p>따라서, 해당 기능을 NodeJS의 node-excel-stream 모듈을 사용하여 로그 데이터를 한번에 10000건씩 Streaming 방식으로 개선하였습니다.</p>
                        <br/><br/><br/>



                        <h2>5) URL</h2>

                        <div className="links">
                            <p><a href="https://chatbot.seo.incheon.kr/kt"  target="_blank" rel="noreferrer">https://chatbot.seo.incheon.kr/kt </a>&nbsp;&nbsp;(실제 동작은 KT 기가지니에서 가능) </p>
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
