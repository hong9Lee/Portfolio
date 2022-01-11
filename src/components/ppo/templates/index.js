import React from "react";
import Header from '../../organisms/PpoHeader';
import Middle from '../../organisms/PpoMiddle';
import Footer from '../../organisms/PpoFooter';

const PpoTemplate = () => {
    return(
        <div>
            <div>
                <Header />
                <Middle />
                <Footer />
            </div>
        </div>
    );
};

PpoTemplate.propTypes = {

};

PpoTemplate.defaultProps = {

};
export default PpoTemplate;
