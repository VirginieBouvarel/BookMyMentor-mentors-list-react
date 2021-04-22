import './Mentor.css';
import horloge from '../assets/horloge.png';

function Mentor({ id, imageSource, name, job, text, time }) {
    return (
        <li key={id} className="Mentor">
            <img className="Mentor__image" width="342px" height="227px" src={imageSource} alt={`${name} mentor`} />
            <h2 className="Mentor__name">{name}</h2>
            <p className="Mentor__job">{job}</p>
            <p className="Mentor__text">{text}</p>
            <div className="Mentor__time">
                <img src={horloge} alt="" />
                <p>{time}</p>
            </div>
        </li>
    );
}

export default Mentor;


// https://picsum.photos/id/1027/342/227