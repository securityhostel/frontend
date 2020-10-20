import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SimpleReview from './SimpleReview';

function ActiveReviews() {
    const [data, setData] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const response = await axios('http://localhost:4000/api/review?state=Created');
            setData(response.data);
        }

        fetchData();
    }, []);

    return (
        <>
            <ul>
                {data.map((review) => (
                    <SimpleReview key={review._id} review={review}/>
                ))}
            </ul>
        </>
    );
}

export default ActiveReviews;