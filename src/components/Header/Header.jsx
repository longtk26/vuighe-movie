import { useState } from "react";
import { useTransition } from "@react-spring/web";
import { AiFillInfoCircle } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { TfiMenu } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets";
import { Button, NavbarLeft, Search } from "../../components";

function Header() {
    const [showNavbarLeft, setShowNavbarLeft] = useState(false);

    const transitions = useTransition(showNavbarLeft, {
        from: { x: -280 },
        enter: { x: 0 },
        leave: { x: -290 },
    });

    return (
        <header
            className="flex justify-between items-center h-[60px] shadow
                       md:py-4 md:px-14 px-1 fixed w-full left-0 right-0 top-0"
        >
            <div className="flex items-center xl:gap-4">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-12 w-40" />
                </Link>
                <div className="gap-x-2.5 hidden lg:flex">
                    <Button path="anime">Anime</Button>
                    <Button path="tin-tuc">Tin Tức</Button>
                    <Button path="truyen-tranh">Truyện</Button>
                    <Button path="bang-xep-hang">BXH</Button>
                </div>

                <TfiMenu
                    className="lg:hidden text-2xl cursor-pointer"
                    onClick={() => setShowNavbarLeft(true)}
                />

                {transitions((style, show) => {
                    return (
                        show && (
                            <NavbarLeft
                                onShow={setShowNavbarLeft}
                                style={style}
                            />
                        )
                    );
                })}
            </div>
            <div className="flex items-center xl:gap-20 sm:gap-4">
                <Search />
                <div className="flex gap-x-2.5">
                    <Button circle Icon={AiFillInfoCircle} />
                    <Button circle Icon={FiSun} hover />
                    <Button circle Icon={FaUser} user />
                </div>
            </div>
        </header>
    );
}

export default Header;
