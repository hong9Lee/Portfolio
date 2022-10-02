import React from "react";
import PageNav from "../../atoms/PageNav";

const PagePpis = () => {

    return (<>
        <main className="main" style={{clear : "both"}}>
            <PageNav text="프로젝트" detail="제주화장품 검색 시스템 구축" href="/project" d_href="/project/ppis"/>


            <section className="title_section">
                <div>
                    <h2>제주화장품 검색 시스템 구축</h2>
                </div>
            </section>

            <section className="common_outline">
                <div className="common_u_line">

                    <div className="common_contents">
                        <h2># 프로젝트 요약</h2>
                        <p>제주 화장품 원료소재 개방 플랫폼 페이지의 검색 시스템을 구축하는 프로젝트였습니다. </p>
                        <p>오픈까지 약 2개월간 투입되었으며, 리뉴얼 되는 홈페이지의 검색 시스템 구축을 목표하는 프로젝트였습니다.</p>

                        <br/>
                        <div className="kt_image_div">
                            <img className="kt_image" src="/images/project/jeju/jeju_main.png" alt="인천 서구청 챗봇 이미지"/>
                        </div>


                        <br/><br/><br/>

                        <h2># 기술 스택</h2>
                        <p>Java, Spring, MySql, Elasticsearch, Apache Nifi, Linux</p>

                        <br/><br/><br/>


                        <h2># 팀원</h2>
                        <p>PM 1명 / 백엔드 2명 / 기획 1명</p>
                        <p>저는 본 프로젝트에서 백엔드 포지션으로 데이터 수집 및 검색 관련 API 작업을 담당했습니다.</p>
                        <p>API 인터페이스 정의서를 작성하여 기획자와 소통하며 개발했습니다.</p>

                        <br/><br/><br/>


                        <h2># 기여한 점</h2>
                        <br/>

                        <h2>1. 데이터 수집</h2>
                        <p>API 개발을 위해 제주화장품 데이터베이스의 자료를 ElasticSearch에 수집했습니다.</p>
                        <p>수집 작업에는 오픈소스인 Apache Nifi를 활용했고, 운영 데이터를 받지 못해 테스트 데이터를 색인했습니다. </p>
                        <p>데이터가 꼬이거나 운영 기간에 데이터에 대응하기 위해 Nifi에 Batch 색인 로직을 개발했습니다.</p>

                        <br/><br/><br/>

                        <h2>2. API</h2>
                        <p>• 검색 API 개발</p>
                        <p>하이라이팅, 페이징, 정렬 처리된 검색 데이터를 반환하는 API를 개발했습니다.</p><br/>


                        <br/><br/><br/>

                        <h2># URL</h2>
                        <div className="links">
                            <p><a href="https://jcop.jeju.go.kr/cms/search.cs"  target="_blank" rel="noreferrer">https://jcop.jeju.go.kr/cms/search.cs</a></p>
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
