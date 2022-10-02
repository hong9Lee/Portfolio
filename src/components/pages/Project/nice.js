import React from "react";
import PageNav from "../../atoms/PageNav";

const PageNice = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="기업평가의견 자동화 시스템 구축" href="/project" d_href="/project/nice"/>


            <section className="title_section">
                <div>
                    <h2>나이스평가정보 기업평가의견 자동화 시스템 구축</h2>
                </div>
            </section>

            <section className="common_outline">
                <div className="common_u_line">

                    <div className="common_contents">
                        <h2># 프로젝트 개요</h2>
                        <p>과거에 사람이 직접 손으로 기술하던 기업에 대한 평가의견을 자동화 시스템으로 구축 하는 프로젝트입니다.</p>
                        <p>고객사의 기업 평가자들은 여러명이였으며, 각자의 기준대로 평가의견을 작성하기 때문에 의견에 통일성이 없었습니다.</p>
                        <p>약 5개월간 투입되었으며, 평가의견, 사업현황 분석, 거래처 분석 등의 총7가지 평가의견 작성을 자동화하는 시스템 개발이 목표였습니다. </p>

                        <br/>

                        <div className="kt_image_div">
                            <img className="nice_image" src="/images/project/nice/outline_1.png" alt="인천 서구청 챗봇 이미지"/>
                        </div>

                        <br/><br/><br/>

                        <h2># 기술 스택</h2>
                        <p>Java, SpringBoot, Maven, NodeJS, Express, ELasticSearch, Logstash</p>

                        <br/><br/><br/>

                        <h2># 팀원</h2>
                        <p>PM 1명 / 백엔드 2명 / 분석가 2명</p>
                        <p>저는 본 프로젝트에서 백엔드 포지션으로 설계, 데이터 수집, 의견 생성을 위한 백엔드 개발을 담당했습니다.
                        </p><br/><br/><br/>

                        <h2># 기여한 점</h2>

                        <h2>1. 설계</h2>

                        <p>의견 생성에 필요한 데이터를 파라미터로 입력받습니다.</p>
                        <p>입력받은 데이터들은 전처리 과정을 통해 고객사에서 기업을 평가하는 기준(Rule)에 맞춰 문장으로 생성됩니다.</p>
                        <p>Rule에 따라 객체를 생성하는 팩토리 클래스를 기준으로 라이브러리를 설계하여 개발했습니다.</p>

                        <br/><br/><br/>


                        <h2>2. 데이터 수집</h2>
                        <p>테스트 데이터베이스 구축을 위해 데이터를 ElasticSearch에 수집했습니다.</p>
                        <p>고객사로부터 전달받은 약 1억 3천만건의 Text 데이터를 Logstash를 이용해 색인했습니다.</p>


                        <br/><br/><br/>

                        <h2>3. 데이터 분석을 위한 서버 구축</h2>
                        <p>의견을 작성하기 위해 어떤 데이터가 어떤 조건에 의해 사용되는지 알 수 없었습니다.</p>
                        <p>고객에게 완성된 의견을 요청해 역으로 분석하는 과정이 필요했습니다.</p>
                        <p>의견별로 필요한 기업별 재무제표 데이터를 직접 찾아보기 어려워, 한번에 내려받을 수 있는 자동화 기능이 필요했습니다.</p>
                        <p>따라서, NodeJS를 활용해 데이터를 엑셀로 내려받는 서버를 구축해 함께 투입된 분석가들에게 제공하여 업무 편의를 상승시켰습니다.</p>
                        <br/>

                        <div className="kt_image_div">
                            <img className="nice_node_image" src="/images/project/nice/opn_1.png" alt="의견 1"/>
                        </div>

                        <br/><br/><br/>


                        <h2>4. 문장 생성</h2>
                        <p>파라미터로 입력받은 기업 데이터를 전처리 과정을 통해 Map에 담아 Script 분기를 통해 문장을 생성합니다.</p>
                        <p>Map에 담겨있는Groovy Script의 변수에 해당하는 값 <span className="ex">ex) 관계사_개수</span> 를
                            찾아내고, 표현식 Script에서 최종 문장을 만듭니다.</p>

                        <br/>
                        <p>아래는 문장을 생성하기 위한 Groovy, 표현식 리소스 예시 입니다.</p>
                        <p>- Groovy Script : 의견생성을 위한 유형별 조건식</p>
                        <img className="scr_1" src="/images/project/nice/groovy_script.png" alt="의견 1"/>

                        <br/><br/>

                        <p>- 표현식 Script : 의견생성을 위한 유형별 표현식. 가중치와 문장패턴에 따라 다양한 문장 생성</p>
                        <img className="scr_2" src="/images/project/nice/exp_script.png" alt="의견 1"/>
                        <br/>
                        <br/>



                        {/*
                        <br/>
                        <br/>
                        <br/>
                        <h2>5. 단위, 성능 테스트</h2>
                        <p>JUnit을 이용해 메서드 단위로 테스트를 진행, JMeter를 이용해 솔루션 성능 테스트를 진행</p>
                        <img className="opn_jmeter" src="/images/project/nice/jmeter.png" alt="jmeter 테스트"/>
                        */}

                        <br/>
                        <br/>
                        <br/>

                        <h2># URL</h2>
                        <p>내부망이라 확인이 불가능합니다.</p>
                    </div>
                </div>


            </section>
        </main>
    </>);
};

PageNice.propTypes = {};

PageNice.defaultProps = {};
export default PageNice;
