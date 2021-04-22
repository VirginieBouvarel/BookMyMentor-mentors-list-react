import './Header.css';
import logo from '../assets/logo.svg';
import Navbar from '../components/Navbar';

function Header() {
    return (
        <div className="Header">
            <a href="index.html">
                <img src={logo} alt="Accueil Book My Mentor" />
                <h1 className="sr-only">Book My Mentor</h1>
            </a>
            <Navbar />
        </div>
    );
}

export default Header;