import React from "react";
import Header from '../../../organisms/PfoHeader';
import Footer from '../../../organisms/PfoFooter';
import ProjectJeju from "../../../pages/Project/jeju";


const JejuTemplates = () => {
    return (<>
            <Header/>
            <ProjectJeju/>
            <Footer/>
        </>);
};

JejuTemplates.propTypes = {};

JejuTemplates.defaultProps = {};
export default JejuTemplates;
