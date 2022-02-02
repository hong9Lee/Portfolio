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

                            <div className="idx1 history">
                                <h3>
                                    2020.01
                                </h3>
                            </div>

                            <div className="idx3 history">
                                <h3>
                                    2020.05
                                </h3>
                            </div>

                            <div className="idx4 history">
                                <h3>
                                    2020.10
                                </h3>
                            </div>

                            <div className="idx2 history">
                                <h3>
                                    2021.05
                                </h3>
                            </div>

                            <div className="lst history">
                                <h3>
                                    2022.01
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


                            <div className="idx1 right_inner_div">
                                <div className="title_div"
                                     onClick={() => window.open("http://chatbot.yuhs.ac", "_blank")}>
                                    <img src="/images/project/yonsei.png" alt="연세세브란스 로고"/>
                                    <div className="title_inner_div">
                                        <p>연세 세브란스 챗봇 구축 사업 투입 (사내)</p>
                                        <h3 className="tag">#연세세브란스 #챗봇 #NodeJS</h3>
                                    </div>
                                </div>

                                <div className="contents_div">
                                    <br/>
                                    <br/>
                                    <li>챗봇 React 공통 템플릿을 가지고 개발자 1인으로 투입됨.</li>
                                    <li>퍼블리싱부터 기능개발, API 서버 개발, 배포 까지 맡았음.</li>
                                    <li>Linux에 프로세스를 설치하고 전체 프로세스를 실행/중지하는 Batch Script를 작성함.</li>
                                    <li>고객 요구사항을 파악하는 회의부터 배포, 운영까지 사업의 전과정을 경험해 볼 수 있었음.</li>
                                </div>
                            </div>


                            <div className="idx3 right_inner_div">
                                <div className="title_div"
                                     onClick={() => window.open("http://chatbot.yuhs.ac", "_blank")}>
                                    <img src="/images/project/ics.png" alt="인천 서구청 로고"/>
                                    <div className="title_inner_div">
                                        <p>인천광역시 서구청 챗봇 구축 사업 투입 (파견)</p>
                                        <h3 className="tag">#인천서구청 #챗봇 #NodeJS</h3>
                                    </div>
                                </div>

                                <div className="contents_div">
                                    <br/>
                                    <br/>
                                    <li>개발자 2인으로 PM, PL, 시나리오 작가 포함 총 6명 투입됨.</li>
                                    <li>완성된 퍼블리싱을 적용, 기능개발, API 서버 개발, 수집 및 색인, 배포, 운영 까지 맡았음.</li>
                                    <li>민원 데이터 수집 및 색인을 위해 Logstash를 사용하였음.</li>
                                    <h3>&nbsp;&nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                        Linux에 프로세스를 설치하고 전체 프로세스를 실행/중지하는 Batch Script를 작성함.</h3>
                                    <h3>&nbsp;&nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                        민원 데이터를 일정 주기마다 수집,색인하는 Batch 파일을 작성함.</h3>
                                    <h3>&nbsp;&nbsp;&nbsp;&nbsp; {`->`} &nbsp;데이터 가공을 위해 Logstash에서 Ruby를 사용함.</h3>
                                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Ruby - 코드를 읽을 수 있으며, 구글을 참고하여 약간의 수정작업
                                        또는 작은 변경사항 추가를 할 수 있는 수준.</h3>
                                    <li>ElasticSearch의 데이터를 총 3대의 서버에 클러스터링 하여 구축 하였음.</li>
                                </div>
                            </div>


                            <div className="idx4 right_inner_div">
                                <div className="title_div"
                                     onClick={() => window.open("http://chatbot.yuhs.ac", "_blank")}>
                                    <img src="/images/project/nice.jpg" alt="나이스평가정보 로고"/>
                                    <div className="title_inner_div">
                                        <p>나이스평가정보 기업평가시스템 자동화 사업 투입 (사내)</p>
                                        <h3 className="tag">#나이스평가정보 #Java #Library개발 #수집,색인</h3>
                                    </div>
                                </div>

                                <div className="contents_div">
                                    <br/>
                                    <br/>
                                    <li>개발자 2인으로 PM, 작가(분석) 포함 총 4명 투입됨.</li>
                                    <li>고객사의 소극적인 태도로 가장 힘들었던 사업임.</li>
                                    <li> ~~ 설계</li>
                                    <li>평가자료를 만들기 위해 원천DB의 기업 재무재표 분석이 필요했음.</li>
                                         <h3>&nbsp;&nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                             때문에 NodeJS를 이용해 원천DB를 엑셀로 출력하는 API 서버를 구축함.</h3>
                                    <li>나이스 평가정보의 원천DB를 Logstash를 이용해 수집, 색인함. (약 1억3천만 건)</li>


                                    <br/>
                                    <br/>
                                    <li>신규입사자(신입) 개발자들에게 회사 기술스택 교육.</li>
                                    <li>사내 개발서버 프로세스 통합 및 ElasticSearch Data Migration</li>
                                </div>
                            </div>


                            <div className="idx2 right_inner_div">
                                <div className="title_div"
                                     onClick={() => window.open("http://chatbot.yuhs.ac", "_blank")}>
                                    <img src="/images/project/ppis.png" alt="정부 로고"/>
                                    <div className="title_inner_div">
                                        <p>조달요청 발주지원 검색 시스템 구축 사업 투입 (파견)</p>
                                        <h3 className="tag">#조달청 #검색 #수집,색인 #NodeJS</h3>
                                    </div>
                                </div>

                                <div className="contents_div">
                                    <br/>
                                    <br/>
                                    <li>개발자 3인으로 PM, PL, 작가(분석) 포함 총 8명 투입됨.</li>
                                    <li>검색 파트는 단독 투입이며 조달청 원천DB 수집 및 색인, 검색 API 개발, 배포 까지 맡았음.</li>
                                    <li>데이터 색인을 위해 Nifi를 사용함.</li>
                                    <h3>&nbsp;&nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                    데이터 가공을 위해 Python을 사용함.</h3>
                                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Python - 코드를 읽을 수 있으며, 구글을 참고하여 약간의 수정작업
                                        또는 작은 변경사항 추가를 할 수 있는 수준.</h3>
                                    <li>ElasticSearch의 데이터를 총 3대의 서버에 클러스터링 하여 구축 하였음.</li>

                                </div>
                            </div>

                            <div className="lst right_inner_div">
                                <div className="title_div"
                                     onClick={() => window.open("http://chatbot.yuhs.ac", "_blank")}>
                                    <img src="/images/project/jcop.png" alt="제주화장품 로고"/>
                                    <div className="title_inner_div">
                                        <p>제주화장품 검색 시스템 구축 사업 투입 (사내)</p>
                                        <h3 className="tag">#제주화장품 #검색 #수집,색인 #NodeJS</h3>
                                    </div>
                                </div>

                                <div className="contents_div">
                                    <br/>
                                    <br/>
                                    <li>개발자 1인으로 PM 포함 총 2명 투입됨.</li>
                                    <li>제주화장품 원천DB 수집 및 색인, 검색 API 개발, 배포 까지 맡았음.</li>

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
