import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosFilm } from "react-icons/io";
import { HiNewspaper, HiChartBar } from "react-icons/hi";
import { BsFillBookFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo from "../../assets";
import Search from "../Search/Search";
import NavbarLink from "../NavbarLink/NavbarLink";

function NavbarLeft({ show, onShow }) {
    // Use to click outside of navbarLeft
    const navbarRef = useRef();
    const handleCloseNavbar = (e) => {
        if (!navbarRef.current.contains(e.target)) {
            onShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleCloseNavbar);

        //Component is actually not unmount but we need to add this
        return () =>
            document.removeEventListener("mousedown", handleCloseNavbar);
    }, []);
    return (
        <div
            className={`fixed left-0 top-0 bottom-0 bg-white w-[280px]
            shadow-navbar translate-x-[-100%] transition-transform duration-300
            ${show && "translate-x-0"} lg:hidden`}
            ref={navbarRef}
        >
            <div className="flex justify-between items-center px-2.5 mt-1">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-[50px] w-[156px]" />
                </Link>
                <AiOutlineClose
                    onClick={() => onShow(false)}
                    className="cursor-pointer"
                />
            </div>
            <div className="mt-4 px-2 text-sm">
                <Search navbar />
                <div className="flex flex-col mt-2">
                    <NavbarLink Icon={IoIosFilm} path="anime">
                        Anime
                    </NavbarLink>
                    <NavbarLink Icon={HiNewspaper} path="tin-tuc">
                        Tin tức
                    </NavbarLink>
                    <NavbarLink Icon={BsFillBookFill} path="truyen-tranh">
                        Truyện
                    </NavbarLink>
                    <NavbarLink Icon={HiChartBar} path="bang-xep-hang">
                        BXH
                    </NavbarLink>
                </div>
            </div>
        </div>
    );
}

export default NavbarLeft;
