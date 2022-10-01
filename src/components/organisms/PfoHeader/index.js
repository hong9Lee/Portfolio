import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import moment from 'moment';
import {CreateToast} from "modules/actions/toast";
import ToastMessage from "../../atoms/Toast";

/**
 * PpoHeader
 */
const PpoHeader = () => {
    const [isToggled, setIsToggled] = useState(false);
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.isToast.active);
    const msg = useSelector(state => state.isToast.msg);

    useEffect(() => {
        dispatch(CreateToast({
            title    : "반갑습니다.",
            contents : moment().format('YYYY-MM-DD HH:mm:ss')
        }))
    }, []);

    return (<header>
            <div>
                <h1>
                    <a href="/"> {`
                            honggyu's Portfolio
                        `}</a>
                </h1>

                <nav className={"lnb menu" + (isToggled ? " collapse" : "")}>
                    <ul>
                        <li>
                            <a href="/introduce">소개</a>
                        </li>

                        <li>
                            <a href="/project">프로젝트</a>
                        </li>

                        <li>
                            <a href="https://github.com/hong9Lee" target="_blank" rel="noreferrer">깃허브</a>
                        </li>
                    </ul>
                </nav>

                <div id="overlay" className="overlay"/>

                <button id="burger" type="button" onClick={
                    () => {setIsToggled(!isToggled)}
                }>
                    <span/>
                    <span/>
                    <span/>
                </button>



                {/*
                <div className="_toast_div" style={{display : isActive ? 'none' : ''}}>
                    {msg ? <ToastMessage title={msg.title} contents={msg.contents}/> : ''}
                </div>
                */}
            </div>



        </header>);
};

// PpoHeader.propTypes = {
//     isToggled : PropTypes.string, // userToggled : PropTypes.string
// };
// PpoHeader.defaultProps = {
//     isToggled : PropTypes.string, // userToggled : PropTypes.string
// };
export default PpoHeader;
