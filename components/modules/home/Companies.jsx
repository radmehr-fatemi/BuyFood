import React from 'react';

//Style
import styled from "./Companies.module.scss";

//ICON
import AppleICON from "../../icons/Apple";
import SpaceXICON from "../../icons/SpaceX";
import BinanceICON from "../../icons/Binance";
import TeslaICON from "../../icons/Tesla";

const Companies = () => {
    return (
        <div className={ styled.companies } >
            <AppleICON />
            <SpaceXICON />
            <BinanceICON />
            <TeslaICON />
        </div>
    );
};

export default Companies;