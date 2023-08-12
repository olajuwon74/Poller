import "../src/App.css"
import { Link } from "react-router-dom"

export default function Homepage(){
    return (
        <>
            <nav>
                <h1 className="logo">Poller</h1>
                <Link to="/active">Sign In</Link>
            </nav>
            <div className="hero">
                <div className="hero-left">
                    <div className="hero-left-content">
                        <p>Spurn up a poll that cannot be manipulated
                        Get real time concise information in various forms.
                        Built on the worldcoin proof of personhood, polls are ensured to be accurate
                        and genuine
                        </p>
                    </div>
                    <div className="hero-left-button">
                    <Link to="/create"><button>Create Poll</button></Link>
                        <button id="sign-up">Sign up</button>
                    </div>
                </div>
                <div className="hero-right">
                    <img src="/public/comp-removebg-preview 1.svg" alt="hero-image"></img>
                </div>
            </div>
            <div className="trustee">
                <p id="trustee-content">Trusted by</p>
                
                <img src="/public/simple-icons_cocacola.svg"></img>
                <img src="/public/mdi_apple-ios.svg"></img>
                <img src="/public/logos_redhat.svg"></img>
                <img src="/public/cib_spacex.svg"></img>
                <img src="/public/simple-icons_fifa.svg"></img>
                <img src="/public/simple-icons_emirates.svg"></img>
                
            </div>
            <div className="how-it-works">
                <h3>How it works</h3>
                <div className="works-section">
                    <p>Spurn up a poll that cannot be manipulated
                    Get real time concise information in various forms</p>
                    <p>Spurn up a poll that cannot be manipulated
                    Get real time concise information in various forms</p>
                    <p>Spurn up a poll that cannot be manipulated
                    Get real time concise information in various forms</p>
                    <p>Spurn up a poll that cannot be manipulated
                    Get real time concise information in various forms</p>
                </div>
            </div>
            <img src="/public/Blue and Pink Minimalist Aesthetic Trendy Cosmic Cubes Phone Wallpaper (1) 1.svg" id="top-image"></img>
            <div className="store">
                
                <h2>What is in store for you?</h2>
                <img src="/public/Small Trendy Cosmic Cubes Phone Wallpaper (1) 6.png" id="store-content"></img>
                <img src="/public/Small Trendy Cosmic Cubes Phone Wallpaper (1) 6.png" id="store-content"></img>
                <img src="/public/Small Trendy Cosmic Cubes Phone Wallpaper (1) 6.png" id="store-content"></img>
                <img src="/public/Small Trendy Cosmic Cubes Phone Wallpaper (1) 6.png" id="store-content"></img>
                <div id="store-items">
                    <p id="store-items-content">Analytics and advanced graphical repesentation </p>
                    <p id="store-items-content">Analytics and advanced graphical repesentation </p>
                    <p id="store-items-content">Analytics and advanced graphical repesentation </p>
                    <p id="store-items-content">Analytics and advanced graphical repesentation </p>
                </div>
                {/* <div id="store-effect-one"></div>
                <div id="store-effect-two"></div>
                <div id="store-effec-three"></div> */}
                {/* <img src="/public/Blue and Pink Minimalist Aesthetic Trendy Cosmic Cubes Phone Wallpaper (1) 1.svg"></img> */}
            </div>
           

            <footer>
                <h3>Poller</h3>
                    <p id="footer-cta">Contact Us</p>
                    <p id="footer-cta">About Us</p>
                    <p id="footer-cta">Support</p>
                
            </footer>
        </>
    )
}