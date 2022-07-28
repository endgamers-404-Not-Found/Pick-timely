import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const [selected, setSelected] = React.useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    
    return (
        <div class="hero h-100vh bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          
            <div>
                <DayPicker
              
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    
                  
                    footer={footer}
                  
                />
               
                
            </div>
        </div>
    </div>
    );
};

export default Calender;