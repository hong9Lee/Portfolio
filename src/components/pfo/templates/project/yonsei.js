import React from "react";
import Header from '../../../organisms/PfoHeader';
import Footer from '../../../organisms/PfoFooter';
import ProjectYonsei from "../../../pages/Project/yonsei";


const YonseiTemplates = () => {
    return (<>
            <Header/>
            <ProjectYonsei/>
            <Footer/>
        </>);
};

YonseiTemplates.propTypes = {};

YonseiTemplates.defaultProps = {};
export default YonseiTemplates;
