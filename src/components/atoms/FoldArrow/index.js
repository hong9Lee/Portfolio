import React from "react";
import PropTypes from "prop-types";

/**
 * FoldArrow
 */
const FoldArrow = (prop) => {
    const param = prop;

    // const more = <><p>더보기</p><label htmlFor="collapsible" className="lbl-toggle"/></>;
    const more = <label htmlFor="collapsible" className="lbl-toggle"/>;
    const short = <label htmlFor="collapsible" className="lbl-toggle-short"/>;

    return(

            <div className="cover">
                {param.chk ?
                    short :
                    more}
            </div>

    );
};


FoldArrow.propTypes = {

};
FoldArrow.defaultProps = {

};
export default FoldArrow;
