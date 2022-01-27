import React, {useEffect} from "react";
import ProjectMiddle from "../../pages/Project";
import PageNav from "../../atoms/PageNav";

/**
 * PfoMiddle
 */
const PfoMiddle = () => {

    return (<>
            <main className="main" style={{clear : "both"}}>

                <PageNav text="메인 페이지" href="/"/>



            </main>


        </>

    );
};

PfoMiddle.propTypes = {};
PfoMiddle.defaultProps = {};
export default PfoMiddle;
