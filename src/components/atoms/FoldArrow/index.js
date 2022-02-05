import React from "react";
import PropTypes from "prop-types";

/**
 * FoldArrow
 */
const FoldArrow = (prop) => {
    const param = prop;

    const more = <label htmlFor="collapsible" className="lbl-toggle"/>;
    const short = <label htmlFor="collapsible" className="lbl-toggle-short"/>;

    return(

            <div>
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
