import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://pick-timely-server.onrender.com/admin/${email}`, {
                method:'GET'
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
            })
        }
    }, [user])

    return [admin]
}

export default useAdmin;