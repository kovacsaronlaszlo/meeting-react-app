import { useHistory } from 'react-router-dom'

import { NewMeetupForm } from "../components/meetups/index";

const NewMeetupPage = () => {

    const history = useHistory();

    const addMeetupoHandler = (meetupData) => {
        fetch(
            '[put_your_firebase_json_here]',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        }).catch(err => console.error(err));
    }

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupoHandler} />
        </section>
    )
}

export default NewMeetupPage;