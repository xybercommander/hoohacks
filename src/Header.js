import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://user-images.githubusercontent.com/71402528/111670497-e7e72580-883d-11eb-9af3-8e2622a6654d.png"
                alt=""
                />
                <div className="header__serach">
                    <SeachIcon />
                    <input type="text"/>
                </div>
                <div className="header_right">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={FormatListBulletedIcon} title="ToDo"/>
                    <HeaderOption Icon={NotifictionsIcon} title="Notifications"/>

                </div>

            </div>
        </div>
    )
}

export default Header
