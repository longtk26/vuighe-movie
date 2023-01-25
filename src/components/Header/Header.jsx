import { AiFillInfoCircle } from "react-icons/ai";
import { FiSun, FiMenu } from "react-icons/fi";
import { FaUser, FaSearch } from "react-icons/fa";
import logo from "../../assets";
import { Button } from "../../components";

function Header() {
    return (
        <header
            className="flex justify-between items-center h-[60px] shadow
                       md:py-4 md:px-14 px-1"
        >
            <div className="flex items-center xl:gap-10 sm:gap-6">
                <img src={logo} alt="logo" className="h-12 w-40" />
                <div className="gap-x-2.5 hidden lg:flex">
                    <Button path="anime">Anime</Button>
                    <Button path="tin-tuc">Tin Tức</Button>
                    <Button path="truyen-tranh">Truyện</Button>
                    <Button path="bang-xep-hang">BXH</Button>
                </div>
                <FiMenu className="lg:hidden text-2xl" />
            </div>
            <div className="flex items-center xl:gap-20 sm:gap-4">
                <div
                    className="relative rounded-[20px] pl-2.5 pr-8 xl:mr-20
                    border-[#ddd] border-[1px] xl:w-[320px] min-w-[250px] border-solid
                    hidden lg:flex"
                >
                    <input
                        type="text"
                        className="px-2 text-[#999] border-none grow outline-none text-sm py-1
                        caret-[#999]"
                        placeholder="Tiềm kiếm anime"
                    />
                    <FaSearch
                        className="absolute text-[#999] right-2 top-[50%] 
                    translate-y-[-50%] hover:text-black cursor-pointer"
                    />
                </div>
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
