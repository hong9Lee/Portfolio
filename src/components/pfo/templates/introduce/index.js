import React from "react";
import Header from '../../../organisms/PfoHeader';
import Middle from '../../../organisms/PfoMiddle';
import Footer from '../../../organisms/PfoFooter';
import IntroMiddle from "../../../pages/Introduce";

const IntroTemplates = () => {
    return (<>
            <Header/>
            <IntroMiddle/>
            <Footer/>
        </>);
};

IntroTemplates.propTypes = {};

IntroTemplates.defaultProps = {};
export default IntroTemplates;
