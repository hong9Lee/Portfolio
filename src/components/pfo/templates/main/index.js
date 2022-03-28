import React from "react";
import Header from '../../../organisms/PfoHeader';
import Middle from '../../../organisms/PfoMiddle';
import Footer from '../../../organisms/PfoFooter';
import MainMiddle from "../../../pages/main";

const MainTemplates = () => {
    return (<>
            <Header/>
            <MainMiddle/>
            <Footer/>
        </>);
};

MainTemplates.propTypes = {};

MainTemplates.defaultProps = {};
export default MainTemplates;
