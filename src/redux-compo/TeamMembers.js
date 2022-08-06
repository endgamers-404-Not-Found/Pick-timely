import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import TeamActions from './TeamService/Actions/TeamActions';

const TeamMembers = () => {

    const { isLoading, teams, error} = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(TeamActions())
    }, [dispatch])

    return (
        <div className='w-[100%] mx-auto p-10'>
            <h1 className='text-3xl font-bold p-10 text-center'>Our Team Members</h1>
            {isLoading && <h1>Loading ....</h1>}
            {error && <h1>{error.message}</h1>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {teams && teams.map(team => <div key={team.id} team={team} class="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img className='mt-5' src={team.img} alt={team.alt} />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{team.name}</h2>
                        <p>{team.role}</p>
                        <p>{team.position}</p>
                        <p>{team.area}</p>
                        <div class="card-actions justify-center">
                        <button class="btn btn-primary">see details</button>
                        </div>
                    </div>
                    </div> )}
            </div>
        </div>
    );
};

export default TeamMembers;