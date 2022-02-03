import React from "react";
import PropTypes from "prop-types";

/**
 * FoldArrow
 */
const FoldArrow = (prop) => {
    const param = prop;
    console.log(param.chk + "@@@@@@@@@@@@@@@@")

    return(

            <div>
                {param.chk ? '▲' : "(주)아이브릭스 커리어 ▼"}
            </div>

    );
};


FoldArrow.propTypes = {

};
FoldArrow.defaultProps = {

};
export default FoldArrow;
