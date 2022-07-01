import React, {FC} from "react";
import {Images} from "../Images";

const Header: FC = () => {
    return (
        <div className='header-container'>
            <a href="#">
                <img className='header-container__logo' src={Images.Header.Logo} alt="Logo"/>
            </a>
            <p className='header-container__title'>currency converter</p>
        </div>
    )
}

export default Header;