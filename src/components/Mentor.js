import './Mentor.css';
import avatarTrottier from '../assets/avatar-augustin-trottier.png';
import horloge from '../assets/horloge.png';

function Mentor() {
    return (
        <li className="Mentor">
            <img className="Mentor__image" width="342px" height="227px" src={avatarTrottier} alt="Augustin Trottier mentor" />
            <h2 className="Mentor__name">Augustin Trottier</h2>
            <p className="Mentor__job">Développeur web sénior</p>
            <p className="Mentor__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.</p>
            <div className="Mentor__time">
                <img src={horloge} alt="" />
                <p>Long terme</p>
            </div>
        </li>
    );
}

export default Mentor;


// https://picsum.photos/id/1027/342/227