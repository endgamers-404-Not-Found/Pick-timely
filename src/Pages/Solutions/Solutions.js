import React from 'react';
import Accounts from './OtherSolutions/Accounts';
import Career from './OtherSolutions/Career';
import Meetings from './OtherSolutions/Meetings';
import Podcasts from './OtherSolutions/Podcasts';
import Recruitment from './OtherSolutions/Recruitment';
import Sales from './OtherSolutions/Sales';

const Solutions = () => {
    return (
        <div>
            
            <Sales></Sales>
            <Recruitment></Recruitment>
            <Accounts></Accounts>
            <Podcasts></Podcasts>
            <Career></Career>
            <Meetings></Meetings>
        </div>
    );
};

export default Solutions;