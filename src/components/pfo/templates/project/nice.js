import React from "react";
import Header from '../../../organisms/PfoHeader';
import Footer from '../../../organisms/PfoFooter';
import ProjectNice from "../../../pages/Project/nice";


const NiceTemplates = () => {
    return (<>
            <Header/>
            <ProjectNice/>
            <Footer/>
        </>);
};

NiceTemplates.propTypes = {};

NiceTemplates.defaultProps = {};
export default NiceTemplates;
