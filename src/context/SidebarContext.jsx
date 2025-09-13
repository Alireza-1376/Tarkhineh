import { createContext, useState } from "react";

export const SidebarContext =createContext();

function SidebarProvider({children}){
    const [showSidebar , setShowSidebar] = useState(false);
    const [showMenu , setShowMenu] = useState(false)
    const [showBranch , setShowBranch] = useState(false)
    const [showProfile , setShowProfile] = useState(false)
    return <SidebarContext.Provider value={{showSidebar , setShowSidebar ,showMenu , setShowMenu ,showBranch , setShowBranch ,showProfile ,setShowProfile}}>{children}</SidebarContext.Provider>
}

export default SidebarProvider ;