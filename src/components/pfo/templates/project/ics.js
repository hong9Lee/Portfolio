import React from "react";
import Header from '../../../organisms/PfoHeader';
import Footer from '../../../organisms/PfoFooter';
import ProjectIcs from "../../../pages/Project/ics";


const IcsTemplates = () => {
    return (<>
            <Header/>
            <ProjectIcs/>
            <Footer/>
        </>);
};

IcsTemplates.propTypes = {};

IcsTemplates.defaultProps = {};
export default IcsTemplates;
