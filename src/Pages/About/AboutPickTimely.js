import React from 'react';

const Info = () => {
    return (
        <div className="lg:w-[900px] w-full lg:p-0 p-8 mx-auto ">
            <h2 className="font-extralight text-4xl text-bold font-serif mt-10">ABOUT PICK TIMELY</h2>

            <p className="font-serif my-5  tracking-wider">
                Pictimely is a meeting scheduling application. It is mainly developed to be used by recruiter companies or any company to manage their meetings or interviews. In this application, any company can schedule meetings, appoint candidates or clients for meetings. There are paid and unpaid packages, one or more members can meet together.
            </p>
            <p className="font-serif my-5 tracking-wider">
                <span className='text-xl'>Features:</span>
                <p className='pb-2'>1.Every application requires users to have an identity and this identity is created by creating an account. Therefore, users can create an account in Pick Timely application or user can  login with Google.</p>
                <p className='pb-2'>2. Since it is a meeting schedule application, anyone can host or call a meeting here. User can call a meeting as per his need.</p>
                <p className='pb-2'>3. The meeting host can invite or appoint one or more users for this meeting as needed.</p>
                <p className='pb-2'>4. This application has different packages based on how many members can join during the meeting.</p>
                 <p className='pb-2'>5. User can buy the package as per his requirement.</p>
                <p className='pb-2'>6. Users can pay with a card for the paid packages.</p>
                <p className='pb-2'>7. Users can meet one by one in a free package.</p>
                <p className='pb-2'>8. Multiple members can meet together in a paid package.</p>
                <p className='pb-2'>9. Users can add and edit his profile information.</p>
                <p className='pb-2'>10. An admin can make other members admin or can remove an admin.</p>
                <p className='pb-2'>11. Anyone can contact us from the contact route.</p>
                <p className='pb-2'>12. We have graph charts for admin on the dashboard. Admin can see his project overview on Graph.</p>
                <p className='pb-2'>13. Users can express his thoughts by adding a review.</p>
                <p className='pb-2'>14. Users can choose a dark or light theme for him.</p>
                <p className='pb-2'>15. Read blog on the blog route and admin can add blog dynamically.</p>


            </p>

        </div>
    );
};

export default Info;