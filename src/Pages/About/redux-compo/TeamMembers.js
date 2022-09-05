import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Spinner from '../../../SharedComponents/Spinner';
import TeamActions from './TeamService/Actions/TeamActions';

const TeamMembers = () => {

    const { isLoading, teams, error } = useSelector(state => state);
    console.log('teams', teams)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TeamActions())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='w-[100%] mx-auto px-10'>
            <p className='font-semibold text-center'>Pick Timely Application developed by
                <span className='font-bold'> Team 404 Not Found</span></p>
            <h1 className=' text-4xl  font-bold mb-10 text-center'>Meet the Development Team</h1>
            {isLoading && <h1>Loading ....</h1>}
            {error && <h1>{error.message}</h1>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {teams && teams.map(team => 
                <div key={team._id} className="card lg:w-96 w-80  shadow-2xl shadow-black">
                    <figure>
                        <img className='mt-5 w-8/12 mask mask-decagon' src={team.img} alt={team.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">{team.name}</h2>
                        <p className='font-semibold mt-0'>{team.position}, Team {team.team}</p>
                        <p className='font-semibold'>Email: {team.email}</p>
                        <p className='font-semibold'>Address: {team.address}</p>
                        <div className='grid grid-cols-5 gap-8 pr-4'>
                            <p className='font-semibold'>
                                <a href={team.portfolio} rel="noreferrer" target="_blank" >
                                    <img className='w-24 mask mask-circle' src="https://i.ibb.co/NSY0X1T/image.png" alt="portfolio" /> <span className='font-semibold text-center text-xs hover:link hover:text-blue-600'>Portfolio</span>
                                </a>
                            </p>
                            <p className='font-semibold'>
                                <a href={team.resume} rel="noreferrer" target="_blank">
                                    <img className='w-24 mask mask-circle' src="https://i.ibb.co/QrZjTRD/image.png" alt="portfolio" /> 
                                    <span className='font-semibold text-center text-xs hover:link hover:text-blue-600'>Resume</span>
                                </a>
                            </p>
                            <p className='font-semibold'>
                                <a href={team.github} rel="noreferrer" target="_blank" >
                                    <img className='w-24 mask mask-circle' src="https://i.ibb.co/thGGwxh/image.png" alt="portfolio" /> 
                                    <span className='font-semibold text-center text-xs hover:link hover:text-blue-600'>Github</span>
                                </a>
                            </p>
                            <p className='font-semibold'>
                                <a href={team.linkedIn} rel="noreferrer" target="_blank"  >
                                    <img className='w-24 mask mask-circle' src="https://i.ibb.co/LYfZwHv/download.png" alt="portfolio" />
                                    <span className='font-semibold text-center text-xs hover:link hover:text-blue-600'>LinkedIn</span>
                                </a>
                            </p>
                            <p className='font-semibold'>
                                <a href={team.facebook} rel="noreferrer" target="_blank" >
                                    <img className='w-24 mask mask-circle' src="https://i.ibb.co/DWjbLbH/2021-Facebook-icon-svg.png" alt="portfolio" /> 
                                    <span className='font-semibold text-center text-xs hover:link hover:text-blue-600'>Facebook</span>
                                </a>
                            </p>
                           
                            

                        </div>

                    </div>
        </div>)
}
            </div >
        </div >
    );
};

export default TeamMembers;