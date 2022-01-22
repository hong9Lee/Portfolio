import React from "react";
import Header from '../../../organisms/PpoHeader';
import Middle from '../../../organisms/PpoMiddle';
import Footer from '../../../organisms/PpoFooter';

const PpoTemplate = () => {
    return (<>
            <Header/>
            <Middle/>
            <Footer/>
        </>);
};

PpoTemplate.propTypes = {};

PpoTemplate.defaultProps = {};
export default PpoTemplate;
