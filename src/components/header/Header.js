import Logo from "../logo/Logo.js";
import MenuItem from "../menuItem/MenuItem.js";
import React, { useState } from "react";
import propTypes from 'prop-types';

const Header = ({activeTitle, onMenuChange}) => {
    const [_activeTitle, setActiveTitle] = useState(activeTitle)
    const [menuItems] = useState(
        [{
            title: "Ülkelere Göre Veriler",
            value: 1
        },
        {
            title: "Kayda Geçmiş Tüm Veriler",
            value: 2
        },
        {
            title: "Kıtalara Göre Veriler",
            value: 3
        }]
    )
    return (
        <nav className="bg-gray-900 border-gray-800 px-2 py-2.5">
            <div className="container flex flex-wrap justify-around items-center mx-auto">
                <Logo />
                <div className="w-auto">
                    <ul className="flex mt-0 font-semibold text-xs md:space-x-8 sm:space-x-8">
                        {menuItems.map((item) => {
                            return (
                                <MenuItem key = {item.title} active = {item.title === _activeTitle} onClick={(title) => {
                                    setActiveTitle(title)
                                    onMenuChange(item.value)
                                }} title={item.title} />
                            )
                        } )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.prototype = {
    activeTitle : propTypes.string,
    onMenuChange : propTypes.func,
}

Header.defaultProps = {
    activeTitle : "Ülkelere Göre Veriler",
    onMenuChange : () => null,
}

export default Header