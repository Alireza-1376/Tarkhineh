import { useContext, useEffect, useRef } from "react";
import { SidebarContext } from "../../context/SidebarContext";

const Menu = () => {
    const { showSidebar, showMenu, setShowMenu } = useContext(SidebarContext);
    const ref = useRef();
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (!ref.current.contains(e.target)) {
                setShowMenu(false)
            }
        })
    }, [])
    return (
        <li ref={ref} className={`${showSidebar == false ? "opacity-0 scale-0 text-nowrap md:scale-100 md:opacity-100" : ""}  flex items-center  md:p-0 border-b md:border-none border-gray-4`}>
            <div className="relative flex flex-col w-full md:items-center justify-between cursor-pointer ">
                <div onClick={(e) => { setShowMenu(!showMenu) }} className="flex items-center justify-between p-2">
                    <a className="flex items-center gap-2 " href="#">
                        <svg className="md:hidden" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3799 22.75H3.23993C2.28993 22.75 1.40993 22.31 0.839932 21.54C0.259932 20.76 0.0899403 19.78 0.37994 18.85L4.58993 5.31995C4.96993 4.05995 6.12995 3.19995 7.44995 3.19995H19.7499C20.9599 3.19995 22.0499 3.92004 22.5099 5.04004C22.7599 5.62004 22.8099 6.28005 22.6599 6.93005L19.2899 20.46C18.9699 21.81 17.7699 22.75 16.3799 22.75ZM7.45993 4.70996C6.80993 4.70996 6.21993 5.14002 6.02993 5.77002L1.81994 19.3C1.67994 19.77 1.75993 20.26 2.05993 20.66C2.33993 21.04 2.77994 21.26 3.24994 21.26H16.3899C17.08 21.26 17.6799 20.79 17.8399 20.12L21.2099 6.57996C21.2899 6.24996 21.2699 5.92 21.1399 5.63C20.9 5.06 20.3699 4.69995 19.7599 4.69995H7.45993V4.70996Z" fill="#353535" />
                            <path d="M20.78 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H20.78C21.19 21.25 21.57 21.08 21.85 20.78C22.13 20.48 22.27 20.08 22.24 19.67L21.25 6.05002C21.22 5.64002 21.53 5.27997 21.94 5.24997C22.35 5.22997 22.71 5.52991 22.74 5.93991L23.73 19.56C23.79 20.38 23.5 21.2 22.94 21.8C22.39 22.41 21.6 22.75 20.78 22.75Z" fill="#353535" />
                            <path d="M9.67977 7.12996C9.61977 7.12996 9.55977 7.11994 9.49977 7.10994C9.09977 7.00994 8.84979 6.6099 8.94979 6.1999L9.98976 1.87996C10.0898 1.47996 10.4898 1.22991 10.8998 1.32991C11.2998 1.42991 11.5498 1.82994 11.4498 2.23994L10.4098 6.56001C10.3298 6.90001 10.0198 7.12996 9.67977 7.12996Z" fill="#353535" />
                            <path d="M16.3799 7.13999C16.3299 7.13999 16.2699 7.13997 16.2199 7.11997C15.8199 7.02997 15.56 6.62995 15.64 6.22995L16.5799 1.88999C16.6699 1.47999 17.0699 1.23003 17.4699 1.31003C17.8699 1.39003 18.1299 1.79992 18.0499 2.19992L17.1099 6.54001C17.0399 6.90001 16.7299 7.13999 16.3799 7.13999Z" fill="#353535" />
                            <path d="M15.7002 12.75H7.7002C7.2902 12.75 6.9502 12.41 6.9502 12C6.9502 11.59 7.2902 11.25 7.7002 11.25H15.7002C16.1102 11.25 16.4502 11.59 16.4502 12C16.4502 12.41 16.1102 12.75 15.7002 12.75Z" fill="#353535" />
                            <path d="M14.7002 16.75H6.7002C6.2902 16.75 5.9502 16.41 5.9502 16C5.9502 15.59 6.2902 15.25 6.7002 15.25H14.7002C15.1102 15.25 15.4502 15.59 15.4502 16C15.4502 16.41 15.1102 16.75 14.7002 16.75Z" fill="#353535" />
                        </svg>
                        <span>منو</span>
                    </a>
                    <svg className={`${showMenu ? "rotate-180" : "rotate-0"} mt-1 transition-all duration-200`} width="16" height="16" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_281_14667)">
                            <path d="M13 8.80001C12.3 8.80001 11.6 8.53001 11.07 8.00001L4.55002 1.48001C4.26002 1.19001 4.26002 0.710015 4.55002 0.420015C4.84002 0.130015 5.32002 0.130015 5.61002 0.420015L12.13 6.94001C12.61 7.42001 13.39 7.42001 13.87 6.94001L20.39 0.420015C20.68 0.130015 21.16 0.130015 21.45 0.420015C21.74 0.710015 21.74 1.19001 21.45 1.48001L14.93 8.00001C14.4 8.53001 13.7 8.80001 13 8.80001Z" fill="#353535" />
                            <path d="M20.7437 0.773804C20.8384 0.679072 21.0015 0.679086 21.0962 0.773804C21.1909 0.868542 21.1909 1.0316 21.0962 1.12634L14.5767 7.64685C14.1438 8.07971 13.5723 8.30005 13.0005 8.30017C12.4285 8.30017 11.8564 8.07984 11.4233 7.64685L4.90381 1.12634C4.80907 1.0316 4.80907 0.868542 4.90381 0.773804C4.99855 0.679066 5.16161 0.679066 5.25635 0.773804L11.7769 7.29333C12.4521 7.96849 13.5479 7.96847 14.2231 7.29333L20.7437 0.773804Z" stroke="black" />
                        </g>
                        <defs>
                            <filter id="filter0_d_281_14667" x="0.33252" y="0.202515" width="25.335" height="16.5975" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_14667" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_14667" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <ul className={`${showMenu ? "h-[170px] md:h-[164px] scale-100" : " "} pl-2 md:pl-0 bg-white h-0 scale-0 transition-all duration-200 md:absolute left-0 top-9 divide-gray-4 md:w-36 w-full pr-4 pt-2 md:p-0 md:border rounded-md overflow-hidden`}>
                    <li className="w-full md:border-b">
                        <a className=" w-full block p-2 hover:bg-tint-1 rounded-md md:hover:bg-white py-2 text-base" href="#">غذای اصلی</a>
                    </li>
                    <li className="w-full md:border-b">
                        <a className=" w-full block p-2 hover:bg-tint-1 rounded-md md:hover:bg-white py-2 text-base" href="#">پیش غذا</a>
                    </li>
                    <li className="w-full md:border-b">
                        <a className=" w-full block p-2 hover:bg-tint-1 rounded-md md:hover:bg-white py-2 text-base" href="#">دسر</a>
                    </li>
                    <li className="w-full">
                        <a className=" w-full block p-2 hover:bg-tint-1 rounded-md md:hover:bg-white py-2 text-base" href="#">نوشیدنی</a>
                    </li>
                </ul>
            </div>
        </li>
    );
}

export default Menu;
