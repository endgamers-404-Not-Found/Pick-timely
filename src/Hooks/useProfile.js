import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

export const useProfile = ()=>{
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    
    
    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setProfile(data)
            // console.log(data)
        })
    }, [user])
  
    return [profile]
}