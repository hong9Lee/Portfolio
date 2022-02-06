import React from "react";
import PageNav from "../../atoms/PageNav";

const PageNice = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="기업평가의견 자동화 시스템 구축" href="/project" d_href="/project/nice"/>


            <section className="title_section">
                <div>
                    <h2>나이스평가정보 기업평가의견 자동화 시스템 구축</h2>
                    <p>2020.10 ~ 2021.04</p>
                </div>
            </section>

            <section className="outline">
                <div className="u_line">
                    <h2>프로젝트 개요</h2>
                    <p>과거에 사람이 직접 손으로 기술하던 기업에 대한 평가의견을 자동화 시스템으로 구축 하는 사업임.</p>
                    <p>필요한 데이터를 파라미터로 입력받아 리소스 파일에 설정된 값에 의해 요청한 의견에 대한 완성문장을 반환함.</p>
                    <img className="outline_1" src="/images/project/nice/outline_1.png" alt="나이스 프로젝트 개요"/>

                    <br/>
                    <br/>
                    <h2>1. 설계</h2>
                    <p>OOP를 활용하여 솔루션을 설계함.</p>


                    <br/>
                    <br/>
                    <h2>2. 데이터 색인</h2>
                    <p>약 1억 3천만건의 원천DB를 Logstash를 이용해 ElasticSearch에 수집함.</p>


                    <br/>
                    <br/>
                    <br/>

                    <h2>3. 데이터 분석을 위한 서버 구축</h2>
                    <p>분석에 필요한 데이터만 전처리, 엑셀로 다운로드 가능한 서버 구축. (NodeJS, Express)</p>

                    {/*
                    <p>평가의견을 만들기 위해 어떤 데이터가 어떤 조건에 의해 사용되는지 알 수 없었음.</p>
                    <p>고객에게 완성된 기업평가의견을 요청해 역으로 분석하는 과정이 필요했음.</p>
                    <p>의견별로 필요한 기업별 재무제표 데이터를 직접 찾아보기 어려워, 한번에 내려받을 수 있는 자동화 기능이 필요했음.</p>
                    <p><b>따라서, NodeJS를 이용해 데이터를 엑셀로 내려받는 서버를 구축해 함께 투입된 분석작가들에게 제공함.</b></p>
                    <img className="opn_1" src="/images/project/nice/opn_1.png" alt="의견 1"/>
                    */}

                    <br/>
                    <br/>
                    <br/>
                    <h2>4. RULE 작성</h2>
                    <p>의견의 조건 분기를 위해 리소스 파일을 작성함. (안정적인 한글 지원을 위해 Groovy를 사용함)</p>
                    <br/>
                    <p>Groovy Script : 의견생성을 위한 유형별 조건식.</p>
                    <img className="scr_1" src="/images/project/nice/groovy_script.png" alt="의견 1"/>
                    <br/>
                    <br/>

                    <p>표현식 Script : 의견생성을 위한 유형별 표현식. 가중치와 문장패턴에 따라 다양한 문장 생성.</p>
                    <img className="scr_2" src="/images/project/nice/exp_script.png" alt="의견 1"/>
                    <br/>
                    <p>ElasticSearch에 색인해 놓은 데이터를 조회해 Groovy Script의 변수에 해당하는 값 <span className="ex">ex) 관계사_개수</span> 를 찾아내고,</p>
                    <p>그 값에 해당하는 표현식을 표현식 Script 에서 찾아 문장을 만들어 return 함.</p>


                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>5. 단위, 성능 테스트</h2>
                    <p>JUnit을 이용해 메서드 단위로 테스트를 진행, JMeter를 이용해 솔루션 성능 테스트를 진행함.</p>
                    <img className="opn_jmeter" src="/images/project/nice/jmeter.png" alt="jmeter 테스트"/>

                    <br/>
                    <br/>
                    <br/>
                    <h2>6. 배포</h2>
                    <p>Jar 패키징하여 배포함.</p>

                    <br/>
                    <br/>
                </div>

                <div className="skills_line">
                    <h2>개발 기술</h2>
                    <div className="tech_skills">
                        <div className="tech"><h2>Framework</h2><h3>Java, SpringBoot, Maven </h3></div>
                        <div className="tech"><h2>Sub</h2><h3>NodeJS, Express, Ejs </h3></div>
                        <div className="tech"><h2>색인</h2><h3>ELasticSearch, Logstash </h3></div>
                        <div className="tech"><h2>Test</h2><h3>JUnit, JMeter </h3></div>
                    </div>

                </div>
            </section>

        </main>
        </>);
};

PageNice.propTypes = {};

PageNice.defaultProps = {};
export default PageNice;
