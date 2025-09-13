import { useContext, useEffect, useRef } from "react";
import { SidebarContext } from "../../context/SidebarContext";

const Branch = () => {
    const { showSidebar, showBranch, setShowBranch } = useContext(SidebarContext);
    const ref = useRef();
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (!ref.current.contains(e.target)) {
                setShowBranch(false)
            }
        })
    }, [])

    return (
        <li ref={ref} className={`${showSidebar == false ? "opacity-0 scale-0 text-nowrap md:scale-100 md:opacity-100" : ""} transition-all duration-250 flex items-center md:p-0 border-b border-gray-4 md:border-none`}>
            <div className="relative flex flex-col w-full md:items-center justify-between cursor-pointer">
                <div className="flex p-2 items-center justify-between" onClick={() => { setShowBranch(!showBranch) }}>
                    <a className="flex items-center gap-2" href="#">
                        <svg className="md:hidden" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.79 22.74H6.21C3.47 22.74 1.25 20.51 1.25 17.77V10.36C1.25 8.99996 2.09 7.28996 3.17 6.44996L8.56 2.24996C10.18 0.989964 12.77 0.929964 14.45 2.10996L20.63 6.43996C21.82 7.26996 22.75 9.04996 22.75 10.5V17.78C22.75 20.51 20.53 22.74 17.79 22.74ZM9.48 3.42996L4.09 7.62996C3.38 8.18996 2.75 9.45996 2.75 10.36V17.77C2.75 19.68 4.3 21.24 6.21 21.24H17.79C19.7 21.24 21.25 19.69 21.25 17.78V10.5C21.25 9.53996 20.56 8.20996 19.77 7.66996L13.59 3.33996C12.45 2.53996 10.57 2.57996 9.48 3.42996Z" fill="#353535" />
                            <path d="M13.5 18.75H10.5C8.43 18.75 6.75 17.07 6.75 15V12C6.75 9.93 8.43 8.25 10.5 8.25H13.5C15.57 8.25 17.25 9.93 17.25 12V15C17.25 17.07 15.57 18.75 13.5 18.75ZM10.5 9.75C9.26 9.75 8.25 10.76 8.25 12V15C8.25 16.24 9.26 17.25 10.5 17.25H13.5C14.74 17.25 15.75 16.24 15.75 15V12C15.75 10.76 14.74 9.75 13.5 9.75H10.5Z" fill="#353535" />
                            <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#353535" />
                            <path d="M16.5 14.25H7.5C7.09 14.25 6.75 13.91 6.75 13.5C6.75 13.09 7.09 12.75 7.5 12.75H16.5C16.91 12.75 17.25 13.09 17.25 13.5C17.25 13.91 16.91 14.25 16.5 14.25Z" fill="#353535" />
                        </svg>
                        <span>شعبه</span>
                    </a>
                    <svg className={`${showBranch ? "rotate-180" : "rotate-0"} mt-1 transition-all duration-200`} width="16" height="16" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <ul className={`${showBranch ? "h-[170px] md:h-[164px]  scale-100" : ""} pl-2 md:pl-0 bg-white transition-all duration-200 h-0 scale-0 md:absolute right-0 top-9 divide-gray-4 md:w-36 pr-4 pt-2 md:p-0 w-full md:border rounded-md overflow-hidden`}>
                    <li className="w-full md:border-b">
                        <a className=" w-full block p-2 py-2 text-base md:hover:bg-white hover:bg-tint-1 rounded-md" href="#">اکباتان</a>
                    </li>
                    <li className="w-full md:border-b">
                        <a className=" w-full block p-2 py-2 text-base md:hover:bg-white hover:bg-tint-1 rounded-md" href="#">چالوس</a>
                    </li>
                    <li className="w-full md:border-b">
                        <a className=" w-full block p-2 py-2 text-base md:hover:bg-white hover:bg-tint-1 rounded-md" href="#">اقدسیه</a>
                    </li>
                    <li className="w-full">
                        <a className=" w-full block p-2 py-2 text-base md:hover:bg-white hover:bg-tint-1 rounded-md" href="#">ونک</a>
                    </li>
                </ul>
            </div>
        </li>
    );
}

export default Branch;
