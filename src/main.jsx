import ReactDOM from "react-dom/client" ;
import App from "./App";
import SidebarProvider from "./context/SidebarContext";
const root =document.getElementById('root')

ReactDOM.createRoot(root).render(<SidebarProvider>
    <App />
</SidebarProvider>)