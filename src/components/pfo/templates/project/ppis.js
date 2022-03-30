import React from "react";
import Header from '../../../organisms/PfoHeader';
import Footer from '../../../organisms/PfoFooter';
import ProjectPpis from "../../../pages/Project/ppis";


const PpisTemplates = () => {
    return (<>
            <Header/>
            <ProjectPpis/>
            <Footer/>
        </>);
};

PpisTemplates.propTypes = {};

PpisTemplates.defaultProps = {};
export default PpisTemplates;
