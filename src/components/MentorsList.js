import './MentorsList.css';
import { mentorsData } from '../datas/datas.js'
import Mentor from './Mentor';


function MentorsList() {
    return (
        <div className="MentorsList">
            <p className="intro">30 mentors disponibles pour vous aider</p>
            <ul className="mentors">
                {mentorsData.map(({ id, imageSource, name, job, text, time }) => (
                    <Mentor
                        key={id}
                        imageSource={imageSource}
                        name={name}
                        job={job}
                        text={text}
                        time={time}
                    />
                )
                )}

            </ul>
        </div>
    );
}

export default MentorsList;