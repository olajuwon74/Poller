import "../src/App.css"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

export default function Layout(){
    return(
        <>
           <Sidebar />
           <Outlet />
        </>
    )
}

// import { IDKitWidget } from "@worldcoin/idkit";

// <IDKitWidget actionId="get_this_from_the_dev_portal" signal="my_signal" handleVerify={verifyProof}>
//   {({ open }) => (
//     {/* You can render whatever you want here, and call open() to open the widget */}
//     <button onClick={open}>Click me</button>
//   )}
// </IDKitWidget>