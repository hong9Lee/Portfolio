import React, { useEffect }  from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import isToast, {activeToast, CreateToast, SHOW_TOASTER} from 'modules/actions/toast';
import moment from 'moment'
/**
 * PpoMiddle
 */
const PpoMiddle = () => {
    const dispatch = useDispatch();
    const isClick = useSelector(state => state.isToast.active);
    const msg = useSelector(state => state.isToast.msg);
    const title = msg ? msg.title : '';
    const now = msg ? msg.content : '';

    console.log("************", msg)

    useEffect(() => {
        dispatch(CreateToast({
            title : "반갑습니다.",
            contents : moment().format('YYYY-MM-DD HH:mm:ss')
        }))
    },[]);

    return(
        <div>
            <header>
                MIDDLE
            </header>

            <div style={{ backgroundColor : "aqua", display : isClick ? 'none' : ''}}>
                Toaster Message?
                {msg? <p>{title}<br/>{now}</p> : <></>}

            </div>
        </div>
    );
};



PpoMiddle.propTypes = {

};
PpoMiddle.defaultProps = {

};
export default PpoMiddle;
