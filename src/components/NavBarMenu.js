
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";


export const NavBarMenu = (props) => {

    const {navBarDisplayStyle, setNavBarDisplayStyle} = props;
    

    const hideNavBar = () => {
        setNavBarDisplayStyle('none');
        document.getElementById('subreddits').style.display = 'none';
    }


    return (
        <div className='navBar-menu' style={{display: navBarDisplayStyle}}>
            <div className='menu'>
                <div className='menu-items'>
                    <div className='menu-header'>
                        <img className='mobileBannerLogo' src="https://www.kindpng.com/picc/m/690-6909074_reddit-logo-png-transparent-png.png" alt="Reddit Logo Png, Transparent Png@kindpng.com" />
                    </div>
                    <div className='mobileBannerTitle'>
                        <span className='mobileBannerTitleReddit'>Reddit</span>
                        <span className='mobileBannerTitlePCGaming'>PCGaming</span>
                    </div>
                </div>
                
                <div className='closeButtonArea' onClick={hideNavBar}>
                    <FontAwesomeIcon icon={faXmarkSquare} className='closeButton'/>
                    <span className='closeButton'>Close menu</span>
                </div>
            </div>
            <div className='transparent-background' onClick={hideNavBar}></div>
        </div>
    )
}