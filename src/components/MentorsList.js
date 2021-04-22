import './MentorsList.css';
import Mentor from './Mentor';


function MentorsList() {
    return (
        <div className="MentorsList">
            <p className="intro">30 mentors disponibles pour vous aider</p>
            <ul className="mentors">
                <Mentor />
            </ul>
        </div>
    );
}

export default MentorsList;