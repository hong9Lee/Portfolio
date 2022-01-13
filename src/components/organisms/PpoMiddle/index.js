import React, { useEffect }  from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import isToast, {activeToast, CreateToast, SHOW_TOASTER} from 'modules/actions/toast';
import moment from 'moment'
import ToastMessage from "../../atoms/Toast";
/**
 * PpoMiddle
 */
const PpoMiddle = () => {
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.isToast.active);
    const msg = useSelector(state => state.isToast.msg);

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

            <div style={{ display : isActive ? 'none' : ''}}>
                {msg? <ToastMessage title={msg.title} contents={msg.contents}/> : ''}
            </div>
        </div>

    );
};



PpoMiddle.propTypes = {

};
PpoMiddle.defaultProps = {

};
export default PpoMiddle;
