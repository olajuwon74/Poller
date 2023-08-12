import { IDKitWidget } from "@worldcoin/idkit";
import Active from "../pages/Active";
// import Homepage from "../pages/Homepage";

export default function Worldcoin(){
    return(
        <IDKitWidget
        app_id="app_GBkZ1KlVUdFTjeMXKlVUdFT" // obtained from the Developer Portal
        action="vote_1" // this is your action name from the Developer Portal
        signal="Poll-Vote" // any arbitrary value the user is committing to, e.g. a vote
        onSuccess={Active}
        theme="dark"
        credential_types={['phone']} // the credentials you want to accept
        enableTelemetry
        >
        {({ open }) => 
        <button onClick={open} id="worldcoin-button">Verify with World ID</button>}
        </IDKitWidget>
    )
    
}

