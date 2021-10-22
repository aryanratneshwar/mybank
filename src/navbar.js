

import logo from './2176472.png'
const navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="not found" />
            <h1 style={{ color: "#EEA47FFF" }}>SPARK BANK</h1>

            <ul>
                <li><a href="/home">Home</a></li>
                <li> <a href="/customerlist">Customerlists</a></li>
                <li><a href="/moneytransfer"> Money Transfer</a></li>
                <li><a href="/transferhistory">Transfer History</a></li>
            </ul>

        </div>

    );
}

export default navbar;