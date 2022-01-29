import React from "react";
import Header from '../../../organisms/PfoHeader';
import Footer from '../../../organisms/PfoFooter';
import CareerMiddle from "../../../pages/Career";

const IntroTemplates = () => {
    return (<>
            <Header/>
            <CareerMiddle/>
            <Footer/>
        </>);
};

IntroTemplates.propTypes = {};

IntroTemplates.defaultProps = {};
export default IntroTemplates;
