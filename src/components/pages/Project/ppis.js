import React from "react";
import PageNav from "../../atoms/PageNav";

const PagePpis = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="대전광역시 조달청 검색 시스템 구축" href="/project" d_href="/project/ppis"/>


            <section className="title_section">
                <div>
                    <h2>대전광역시 조달청 검색 시스템 구축</h2>
                </div>
            </section>

            <section className="common_outline">
                <div className="common_u_line">

                    <div className="common_contents">
                        <h2># 프로젝트 요약</h2>
                        <p>공공기관에서는 사업 발주를 위해 제안요청서를 작성합니다.     </p>
                        <p>이를 검토하는 조달청에서는 문서 작성 기준을 충족하지 못하는 제안요청서를 판별하고 있습니다.</p>
                        <p>오픈까지 약 7개월간 투입되었으며, 문서 등록 및 검색 편의를 위한 시스템 구축을 목표 하는 프로젝트 였습니다.</p>
                        <p>기준에 적합한 제안요청서를 참고하기 위한 제안요청서 검색 기능, 문서를 업로드하여 유사한 제안요청서 검색,</p>
                        <p>업로드한 문서의 주요 키워드로 제안요청서/제안서 검색 등의 기능을 개발하여 배포했습니다.</p>



                        <br/><br/><br/>

                        <h2># 기술 스택</h2>
                        <p>Java, Spring, Oracle, Elasticsearch, Apache Nifi, Linux</p>

                        <br/><br/><br/>


                        <h2># 팀원</h2>
                        <p>PM 1명 / PL 1명 / 백엔드 2명 / 프론트 1명 / 기획 1명</p>
                        <p>저는 본 프로젝트에서 백엔드 포지션으로 데이터 수집 및 검색 관련 API 작업을 담당했습니다.</p>
                        <p>API 인터페이스 정의서를 작성하여 홈페이지 개발자, 기획자와 소통하며 개발했습니다.</p>

                        <br/><br/><br/>


                        <h2># 기여한 점</h2>
                        <br/>

                        <h2>1. 데이터 수집</h2>
                        <p>API 개발을 위해 조달청 데이터베이스의 자료를 ElasticSearch에 수집했습니다.</p>
                        <p>수집 작업에는 오픈소스인 Apache Nifi를 활용했고, 조달청 내부망에 적재되어있는 약 130만건의 제안요청서, 제안서 등의 문서를
                            SynapFilter를 활용해 Text로 변환 후 색인했습니다. </p>
                        <p>데이터가 꼬이거나 운영 기간에 새로 추가될 문서에 대응하기 위해 Nifi에 Batch 색인 로직을 개발했습니다.</p>

                        <br/><br/>

                        <h2>2. API</h2>
                        <p>• 검색 API 개발</p>
                        <p>하이라이팅, 페이징, 정렬 처리된 검색 데이터를 반환하는 API를 개발했습니다.</p><br/>

                        <p>• 주요 키워드 추출 API 개발</p>
                        <p>사내 솔루션을 활용하여 문장 내 주요키워드를 리스트 형태로 추출, 반환하는 API를 개발했습니다.</p><br/>

                        <p>• 인기 검색어 API 개발</p>
                        <p>시간별 사용자의 검색 데이터를 리스트로 반환하는 API를 개발했습니다.</p><br/>

                        <p>• 검색어 랭킹 API 개발</p>
                        <p>모든 검색 로그에 대한 검색어 랭킹을 리스트로 반환하는 API를 개발했습니다.</p><br/>

                        <p>• 문서 유사도 API 개발</p>
                        <p>사내 word embedding 엔진을 활용한 문서유사도 API를 개발했습니다.</p><br/>

                        <br/><br/>

                        <h2>3. 솔루션 개선</h2>
                        <p>• 인기검색어 및 검색 통계 기능 개선</p>
                        <p>관리자의 편의를 위해 사내 제품인 검색 관리도구 OpenQuery의 통계 조회 기간설정 기능을 개발했습니다.</p>


                        <br/><br/><br/>

                        <h2># URL</h2>
                        <p>내부망이라 확인이 불가능합니다.</p>

                    </div>
                </div>
            </section>
        </main>
    </>);
};

PagePpis.propTypes = {};

PagePpis.defaultProps = {};
export default PagePpis;
