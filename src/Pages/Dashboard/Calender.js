import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const [selected, setSelected] = React.useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected,"pp")}.</p>;
    }
    
    return (
        <div className="hero h-100vh bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
            <div>
                <DayPicker
              
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    
                  
                    footer={footer}
                  
                />
                <div className='ml-60 -mt-12'>
                <button className="btn btn-outline btn-primary text-center">Next</button>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default Calender;