import { useEffect, useState } from "react";

export const useAppointmentScheduling = ()=>{
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch("appointmentScheduling.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return [data];
}