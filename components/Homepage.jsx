import "../src/App.css"

export default function Homepage(){
    return (
        <>
            <nav>
                <h1 className="logo">Poller</h1>
                <h5 className="nav-items"> Sign In</h5>
            </nav>
            <div className="hero">
                <div className="hero-left">
                    <div className="hero-left-content">
                        <p>Spurn up a poll that cannot be manipulated
                        Get real time concise information in various forms</p>
                    </div>
                    <div className="hero-left-button">
                        <button>Create Poll</button>
                        <button id="sign-up">Sign up</button>
                    </div>
                </div>
                <div className="hero-right">
                    <img src="/public/comp-removebg-preview 1.svg" alt="hero-image"></img>
                </div>
            </div>
        </>
    )
}