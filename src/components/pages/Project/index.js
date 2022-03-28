import React from "react";
import PageNav from "../../atoms/PageNav";

const ProjectMiddle = () => {
    return (<>
        <main className="project_main" style={{clear : "both"}}>

            <PageNav text="프로젝트" href="/project"/>

            <section className="title_section">
                <div>
                    <h2>
                        현업에서 경험한 프로젝트 목록을
                        <br/>
                        간단하게 정리 했습니다
                    </h2>
                </div>
            </section>

            {/* TODO: 회사 기술 소개 추가 */}

            <section className="detail_section">
                <div>

                    {/*  1. 제주화장품 검색 */}
                    <ul className="project-box">
                        <li>
                            <div className="intro">
                                <div className="intro_img jcop">
                                    <img src="/images/project/jcop.png" alt="제주화장품 로고"/>
                                </div>
                                <div className="intro_contents">
                                    <p className="company_nm">제주화장품</p>
                                    <p>제주화장품 검색 시스템 구축</p>
                                    <div>2022.01 ~ 2022.03</div>
                                </div>
                            </div>

                            <div className="contents">
                                <ul>
                                    <li>NodeJS, Nifi, ElasticSearch, MySQL</li>
                                    <li>제주화장품 홈페이지 검색 시스템 개발 및 배포 (개발중)</li>
                                </ul>
                            </div>

                        </li>

                        {/*  2. 선제적 AI기반 조달요청 발주지원시스템 구축 */}
                        <li>
                            <div className="intro">
                                <div className="intro_img">
                                    <img src="/images/project/ppis.png" alt="정부 로고"/>
                                </div>
                                <div className="intro_contents">
                                    <p className="company_nm">대전광역시 조달청</p>
                                    <p>선제적 AI기반
                                        <br/>
                                        조달요청 발주지원 검색 시스템 구축</p>
                                    <div>2021.05 ~ 2021.12</div>
                                </div>
                            </div>

                            <div className="contents">
                                <ul>
                                    <li>NodeJS, Nifi, ElasticSearch, Oracle</li>
                                    <li>발주 지원 검색 시스템 개발 및 배포 (파견근무)</li>
                                </ul>
                            </div>

                        </li>

                        {/*  3. 나이스평가정보 기업평가시스템 평가의견고도화 및 조정의견자동화 시스템 구축 */}
                        <li>
                            <div className="intro">
                                <div className="intro_img">
                                    <img src="/images/project/nice.jpg" alt="나이스평가정보 로고"/>
                                </div>
                                <div className="intro_contents">
                                    <p className="company_nm">나이스 평가정보</p>
                                    <p>나이스평가정보 기업평가의견
                                        <br/>
                                         자동화 시스템 구축</p>
                                    <div>2020.10 ~ 2021.04</div>
                                </div>
                            </div>

                            <div className="contents">
                                <ul>
                                    <li>Java, Spring, JUnit, JMeter, Maven, Oracle, ElasticSearch, Logstash</li>
                                    <li>기업평가 자동화 지원 library 개발</li>
                                </ul>
                            </div>
                            <div className="links">
                                <a href="/project/nice">더보기</a>
                            </div>
                        </li>

                        {/*  4. 인천 서구청 AI 및 빅데이터 기반 지능형 민원상담 시스템 구축 */}
                        <li>
                            <div className="intro">
                                <div className="intro_img ics">
                                    <img src="/images/project/ics.png" alt="인천 서구청 로고"/>
                                </div>
                                <div className="intro_contents">
                                    <p className="company_nm">인천광역시 서구청</p>
                                    <p>인천 서구청 AI 및 빅데이터 기반
                                        <br/>
                                        지능형 민원상담 챗봇 시스템 구축</p>
                                    <div>2020.04 ~ 2020.10</div>
                                </div>
                            </div>

                            <div className="contents">
                                <ul>
                                    <li>HTML/CSS, React, NodeJS, Express, ElasticSearch, Logstash</li>
                                    <li>React 기반의 민원 상담 챗봇 개발 및 배포 (파견근무)</li>
                                </ul>
                            </div>

                            <div className="links">
                                <a href="/project/ics">더보기</a>
                            </div>
                            <div className="links">
                                <a href="https://chatbot.seo.incheon.kr/" target="_blank" rel="noreferrer">링크</a>
                            </div>
                        </li>

                        {/*  5. 연세 세브란스병원 챗봇 서비스 구축 */}
                        <li>
                            <div className="intro">
                                <div className="intro_img">
                                    <img src="/images/project/yonsei.png" alt="연세세브란스 로고"/>
                                </div>
                                <div className="intro_contents">
                                    <p className="company_nm">연세 세브란스 병원</p>
                                    <p>연세 세브란스 병원 챗봇 서비스 구축</p>
                                    <div>2020.01 ~ 2020.06</div>
                                </div>
                            </div>

                            <div className="contents">
                                <ul>
                                    <li>HTML/CSS, React, NodeJS, Express, ElasticSearch</li>
                                    <li>React 기반의 상담 챗봇 개발 및 배포</li>
                                </ul>
                            </div>

                            <div className="links">
                                <a href="/project/yonsei">더보기</a>
                            </div>

                            <div className="links">
                                <a href="http://chatbot.yuhs.ac/" target="_blank" rel="noreferrer">링크</a>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>


            <section className="pe_title_section">
                <div>
                    <h2>
                        개인 프로젝트
                    </h2>
                    <h3 className="pe_title_detail">
                        사내에서 사용하지 않는 기술에 관심을 갖고 공부 해보고 있습니다
                    </h3>
                </div>
            </section>

            <section className="pe_section">
                <div>
                    <ul>
                        <li>
                            <div className="pe_name">
                               {/*
                               <img src="/images/project/jcop.png" alt="제주화장품 로고"/>
                               */}
                                <p className="company_nm">{`
                            honggyu's
                        `} Portfolio 홈페이지</p>
                                <div>2022.01 ~ 2022.02</div>
                            </div>

                            <div className="contents">
                                <ul>
                                    <li>HTML/CSS, React, AWS</li>
                                    <li>프트폴리오 페이지 개발</li>
                                </ul>

                            </div>
                            <br/>
                            <div className="links">
                                <p><a href="https://github.com/hong9Lee/portfolio"  target="_blank" rel="noreferrer" className="color_Link">https://github.com/hong9Lee/portfolio</a></p>
                            </div>

                        </li>


                        <li>
                            <div className="pe_name">
                                {/*
                                <img src="/images/project/jcop.png" alt="제주화장품 로고"/>
                                */}
                                <p className="company_nm">Community 게시판</p>
                                <div>2022.02 ~ 03</div>
                            </div>

                            <div className="contents">
                                <ul>
                                    <li>Spring Data JPA를 활용하여 게시글, 댓글, 좋아요 백엔드 기능 구현</li>
                                    <li>JAVA, SpringBoot, Spring Data JPA, MySQL, h2</li>
                                </ul>
                            </div>
                            <br/>
                            <div className="links">
                                <p><a href="https://github.com/hong9Lee/community" target="_blank" rel="noreferrer" className="color_Link">https://github.com/hong9Lee/community</a></p>
                            </div>

                        </li>

                        <li>
                            <div className="pe_name">
                                {/*
                                <img src="/images/project/jcop.png" alt="제주화장품 로고"/>
                                */}
                                <p className="company_nm">알고리즘 스터디</p>
                            </div>

                            <div className="contents">
                                <ul>
                                    <li>소스코드의 시간, 공간 복잡도를 개선하기 위해 <br/>JAVA를 활용한 알고리즘 문제풀이 및 스터디</li>
                                </ul>
                            </div>

                        </li>


                    </ul>
                </div>
            </section>


        </main>
    </>);
};

ProjectMiddle.propTypes = {};

ProjectMiddle.defaultProps = {};
export default ProjectMiddle;
