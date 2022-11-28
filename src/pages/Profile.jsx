import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Profile() {
    const [profile, setProfile] = useState([]);
    

    const getProfile = async () => {
        try{
            const storedToken = localStorage.getItem('authToken');

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
                headers: {Authorization: `Bearer ${storedToken}`}
            });

            setProfile(response.data);
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    };
    useEffect(() => {
        getProfile()
    })
  return (
    <div className='UserProfile'>
    

    </div>
  )
}

export default Profile