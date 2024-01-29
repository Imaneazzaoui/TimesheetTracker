import React from 'react';
import ChartPr from "./chartPr"
import ChartBar from "./chartBar"
import Tableinfo from '../Tableinfo';

export default function Chart() {
  
  return (
    <div>


      <div className="grid grid-cols-5 grid-rows-1 gap-4">
          <div className="col-span-2">            <ChartBar/>
</div>
          <div className="col-span-2 col-start-4">            <ChartPr/>
</div>
      </div>
    


      <div>
        <Tableinfo />
      </div>
    </div>
  );
}
