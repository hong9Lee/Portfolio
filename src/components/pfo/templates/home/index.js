import React from "react";
import Header from '../../../organisms/PfoHeader';
import Middle from '../../../organisms/PfoMiddle';
import Footer from '../../../organisms/PfoFooter';

const PfoTemplate = () => {
    return (<>
            <Header/>
            <Middle/>
            <Footer/>
        </>);
};

PfoTemplate.propTypes = {};

PfoTemplate.defaultProps = {};
export default PfoTemplate;
