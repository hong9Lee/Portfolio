import React from "react";
import PageNav from "../../atoms/PageNav";

const PagePpis = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="대전광역시 조달청 검색 개발" href="/project" d_href="/project/ppis"/>


            <section className="title_section">
                <div>
                    <h2>대전광역시 조달청 검색 개발</h2>
                    <p>2021.05 ~ 2021.12</p>
                </div>
            </section>

            <section className="outline">
                <div className="u_line">
                    <h2>프로젝트 개요</h2>
                    <p>대전광역시 조달청 발주지원 검색 시스템 개발 (내부시스템)</p>

                    <br/>
                    <br/>
                    <h2>1. 색인</h2>
                    <p>Nifi를 활용하여 원천DB의 데이터, 문서를 수집</p>
                    <p>• 약 130만건 데이터를 문장 추출 및 색인</p>
                    <p>• 데이터를 가공하는 python 소스 내부에서 encoding 문제가 발생하여 디버깅을 통해 원인 파악 및 해결</p>


                    <br/>
                    <br/>
                    <h2>2. API</h2>
                    <p>검색API</p>
                    <p>• 하이라이팅, 페이징, 정렬 처리된 검색 데이터를 반환하는 API 개발</p><br/>

                    <p>주요키워드 추출</p>
                    <p>• 사내 솔루션을 활용하여 문장 내 주요키워드를 리스트 형태로 추출, 반환하는 API 개발</p><br/>

                    <p>인기검색어</p>
                    <p>• 시간별 사용자의 검색 데이터를 리스트로 반환하는 API 개발</p><br/>

                    <p>문서유사도</p>
                    <p>• 사내 word embedding 엔진을 활용한 문서유사도 API 개발</p><br/>

                    <br/>
                    <br/>
                    <br/>

                    <h2>3. 솔루션 개선</h2>
                    <p>검색 관리도구 OpenQuery의 인기검색어 및 검색 통계 기능 개선</p>
                    <p>• 관리자의 편의를 위해 통계조회 기간설정 기능 개발</p>


                    <br/>
                    <br/>
                </div>

                <div className="skills_line">
                    <h2>개발 기술</h2>
                    <div className="tech_skills">
                        <div className="tech">
                            <h3>Node.js, Elasticsearch, Express, Nifi</h3>
                        </div>

                    </div>

                </div>
            </section>

        </main>
        </>);
};

PagePpis.propTypes = {};

PagePpis.defaultProps = {};
export default PagePpis;
