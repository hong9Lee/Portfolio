import React from "react";
import Header from '../../../organisms/PfoHeader';
import Footer from '../../../organisms/PfoFooter';
import ProjectMiddle from "../../../pages/Project";

const IntroTemplates = () => {
    return (<>
            <Header/>
            <ProjectMiddle/>
            <Footer/>
        </>);
};

IntroTemplates.propTypes = {};

IntroTemplates.defaultProps = {};
export default IntroTemplates;
