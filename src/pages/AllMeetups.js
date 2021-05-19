import { useState, useEffect } from 'react';

import { MeetupList } from "../components/meetups/index";
import { Spinner } from '../components/ui';

import classes from '../components/ui/Spinner/Spinner.module.css'

const AllMeetUpsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

    const dataHandler = data => {
        const meetups = [];
        for(const key in data) {
            const meetup = {
                id: key,
                ...data[key],
            }

            meetups.push(meetup);
        }
        return meetups;
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(
            '[put_your_firebase_json_here]'
        )
        .then(res => res.json())
        .then(data => {
            const dataHelper = dataHandler(data)
            setIsLoading(false);
            setLoadedData(dataHelper);
        })
        .catch(err => console.error(err));
    }, [])
    
    
    if (isLoading) {
        return (
            <section className={classes.spinnerContainer}>
                <Spinner />
            </section>
        )
    }

    return (
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={loadedData} />
        </section>
    )
}

export default AllMeetUpsPage;
