import React, { useEffect, useState } from 'react';
import DatePicker from "./DatePicker";
import axios from 'axios';
import Chart from './Chart/Chart';
import Tableinfo from './Tableinfo';



const datas = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];




const Main = () => {

    const [consult, setConsult] = useState([]);
    const [manager, setManager] = useState([]);
    const [project, setProject] = useState([]);
    const [consommation , setConsommation] = useState([]);

useEffect(() => {
   loadConsult();
    }, []);
    
    const loadConsult = async () => {
    const result = await axios.get('http://localhost:8088/users/consultants/number');
    setConsult(result.data);
};
    

    
  useEffect(() => {
    loadManager();
  }, []);
 
  const loadManager = async () => {
     const result = await axios.get('http://localhost:8088/users/managers/number');
    setManager(result.data);
  };

 useEffect(() => {
    loadProject();
  }, []);
 
  const loadProject = async () => {
     const result = await axios.get('http://localhost:8088/projects/number?startDate=2002-01-01&endDate=2030-01-01');
    setProject(result.data);
  };


useEffect(() => {
    loadConsommation();
}, []);

const loadConsommation = async () => {
const result = await axios.get('http://localhost:8088/entries/consumption');
setConsommation(result.data);
};

    return (
        <div className='px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[18px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer '>Bienvenue dans votre tableau de bord</h1>

            </div>
            <br/>
            <DatePicker /> 
            <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                <div className=' h-[120px] rounded-[8px] bg-white border-l-[4px] border-[#ccc5b9] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#0077b6] text-[1.421875rem] leading-[17px] font-bold'>PROJETS</h2>
                        <h1 className='text-[2rem] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{project}</h1>
                    </div>

                </div>
                <div className=' h-[120px] rounded-[8px] bg-white border-l-[4px] border-[#ccc5b9] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#0077b6] text-[1.421875rem] leading-[17px] font-bold'>
                            MANAGERS</h2>
                        <h1 className='text-[2rem] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{manager}</h1>
                    </div>
                    {/*<PersonOutlineOutlinedIcon  style={{ fontSize: 40 , color: '#0096c7'}}/>*/}
                </div>
                <div className=' h-[120px] rounded-[8px] bg-white border-l-[4px] border-[#ccc5b9] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#0077b6] text-[1.421875rem] leading-[17px] font-bold'>CONSULTANTS</h2>
                        <h1 className='text-[2rem] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{consult}</h1>
                    </div>
                    {/*<PersonOutlineOutlinedIcon  style={{ fontSize: 40 , color: '#0096c7'}}/>*/}
                </div>
                <div className=' h-[120px] rounded-[8px] bg-white border-l-[4px] border-[#ccc5b9] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#0077b6] text-[1.421875rem] leading-[17px] font-bold'>CONSOMMATION</h2>
                        <h1 className='text-[2rem] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{consommation}</h1>
                    </div>
                    {/*<AccessTimeOutlinedIcon style={{ fontSize: 40, color: '#0096c7' }} />*/}
                    </div>

            </div>
            <Chart/>
           </div>
    )
}

export default Main   