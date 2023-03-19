import React from "react";
import { SearchBar } from "../SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export const Head = (props) => {

    const {navBarDisplayStyle, setNavBarDisplayStyle} = props;

    const handleNavBarClick = () => {
        setNavBarDisplayStyle('block')

        document.getElementById('subreddits').style.display = 'block';

    }

    return (
        <div className='headerBanner'>
            <div className='navBar'>
                <FontAwesomeIcon icon={faBars} onClick={handleNavBarClick}/>
            </div>
            <div className='bannerTitleDiv'>
                <img className='bannerLogo' src="https://www.kindpng.com/picc/m/690-6909074_reddit-logo-png-transparent-png.png" alt="Reddit Logo Png, Transparent Png@kindpng.com" />
                <div id='bannerTitleText' className='bannerTitle'>
                    <span id='bannerTitleReddit' className='bannerTitle'>Reddit</span>
                    <span className='bannerTitle'>PCGaming</span>
                </div>
            </div>
            <div className='searchBar'>
                <SearchBar/>
            </div>
            
            
        </div>
        
    )
}