import React, {useState} from "react";
import PageNav from "../../atoms/PageNav";
import FoldArrow from "../../atoms/FoldArrow";

const Career = () => {

    const [isToggled, setIsToggled] = useState(false);

    const setToggleBox = (e) => {
        e.preventDefault();
        setIsToggled(!isToggled);
    }

    return (<>
        <main className="career_main" style={{clear : "both"}}>
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

                            <div className={isToggled ? "left_fold_div": "fold left_fold_div"}>
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
                                <div className={isToggled ? "tog foldBox" : "foldBox"} onClick={setToggleBox}>
                                    <FoldArrow chk={isToggled}/>
                                </div>
                            </div>



                    <div className={isToggled ? "right_fold_div": "fold right_fold_div"}>
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
                                    <li>완성된 퍼블리싱을 적용, 기능개발, API 서버 개발, 수집 및 색인, 배포, 운영 까지 맡았음.</li>
                                    <br/>


                                    <li>API</li>
                                    <h3>사용자 위치 동의를 받고, 현재 위치의 날씨를 알려주는 API를 개발함.</h3>
                                    <h3>카카오 지도API 연동해 인천 서구의 무인민원발급기 위치를 출력하는 기능을 개발함.</h3>
                                    <h3>공휴일 OpenAPI를 활용하여 서구청 휴무일에는 챗봇 응답메시지에 반영되도록 API를 개발함.</h3>
                                    <br/>

                                    <li>데이터 수집</li>
                                    <h3>&nbsp;&nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                        Logstash를 활용하여 민원 데이터를 일정 주기마다 수집, 가공, 색인하는 Batch 파일을 작성함.</h3>


                                    <br/>
                                    <li>ElasticSearch의 데이터를 총 3대의 서버에 클러스터링 하여 구축 하였음.</li>
                                    <br/>
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
                                    <li>작은 규모이지만 OOP를 활용한 솔루션 설계를 경험해 볼 수 있었음.</li>
                                    <li>평가자료를 만들기 위해 원천DB의 기업 재무재표 분석이 필요했음.</li>
                                         <h3>&nbsp;&nbsp;&nbsp;&nbsp; {`->`} &nbsp;
                                             분석에 필요한 데이터만 전처리하여 엑셀로 다운로드 가능한 API 서버를 구축하였음. (NodeJS, Express)</h3>
                                    <li>수집한 테스트 데이터를 조회하여 의견생성 조건에 맞춰 전처리한 후 문장으로 만드는 메소드를 개발함.</li>
                                    <li>나이스 평가정보의 원천DB를 Logstash를 이용해 수집, 색인함. (약 1억3천만 건)</li>
                                    <li>Jar로 패키징하여 배포하였음.</li>

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
                                    <li>검색 파트는 단독 투입이며 조달청 원천DB 수집 및 색인, 검색 API 개발, 배포 까지 맡았음.</li>
                                    <li>API</li>
                                    <h3>MVC패턴을 활용하여 검색 API 구조 설계.</h3>
                                    <h3>검색 데이터의 정확도, 기간, 페이징 처리된 결과를 반환하는 API를 개발함.</h3>
                                    <h3>사내 제품을 활용하여 문서의 유사도를 계산하고 ElasticSearch에 색인, 조회해 문서의 유사도를 반환하는 API를 개발함.</h3>
                                    <h3>사내 제품을 활용하여 입력한 문장에서 주요 키워드를 추출해 반환하는 API를 개발함.</h3>

                                    <br/>
                                    <li>Nifi를 활용하여 원천DB의 데이터, 문서를 수집함.</li>

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
                </div>
            </section>
        </main>
    </>);
};

Career.propTypes = {};

Career.defaultProps = {};
export default Career;
