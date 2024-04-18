import Header from "./header";
import {Outlet} from "react-router-dom"
import Footer from "./footer";

function Layout() {
    return(
        <>
        <nav>
            <Header/>
        </nav>
        <main>
            <Outlet/>
            
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
    
}
export default Layout;