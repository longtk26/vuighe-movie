import { useState } from "react";
import { useTransition } from "@react-spring/web";
import { FiSun } from "react-icons/fi";
import { TfiMenu } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets";
import { Button, NavbarLeft, Search } from "../../components";

function Header() {
    const [showNavbarLeft, setShowNavbarLeft] = useState(false);

    //Create animation for navbarleft
    const transitions = useTransition(showNavbarLeft, {
        from: { x: -280 },
        enter: { x: 0 },
        leave: { x: -290 },
    });

    return (
        <header
            className="border-b dark:shadow dark:border-none h-[60px] bg-white w-full fixed left-0 right-0 top-0
        dark:bg-slate-800 dark:shadow-slate-700 transition-all duration-300"
        >
            <div
                className="flex justify-between items-center h-[60px] 
                       md:py-4 lg:px-12 md:px-3 px-2 lg:w-full md:m-auto md:w-[768px]"
            >
                <div className="flex items-center xl:gap-4">
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-12 w-40" />
                    </Link>
                    <div className="gap-x-2.5 hidden lg:flex">
                        <Button path="anime">Anime</Button>
                        <Button path="movie">Movie</Button>
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
                        <Button circle Icon={FiSun} hover />
                        <Button circle Icon={FaUser} user />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
