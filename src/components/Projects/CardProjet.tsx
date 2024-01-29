import { MdDescription } from "react-icons/md";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import avatarImage from '../../assets/avatar.jpg';


const pourcentage = 80;

interface Project {
  project_id: string;
  name: string;
  description: string;
  status: string;
}

export default function Card() {

 
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:8088/getprojects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchInput.toLowerCase());
  
    if (statusFilter === 'all') {
      return matchesSearch;
    } else {
      return project.status === statusFilter && matchesSearch;
    }
  });
  

  return (
    <div className="m-1 ">
      <div className="grid grid-cols-5 grid-rows-1 gap-4 -mt-14">
        <div className="mb-3 ">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
        />
      </div>
    <div>
      <div className="flex flex-col ">
              <select
          id="statusFilter"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
        >
          <option value="all">All</option>
          <option value="Done">Done</option>
          <option value="In Progress">In Progress</option>
          <option value="Canceled">Canceled</option>
          <option value="Standby">Standby</option>
        </select>
     </div>
     
     </div>
    
</div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map(project => (
          <div key={project.project_id} className="flex flex-col">
            <div className="relative flex flex-col p-4 md:flex-row md:space-x-5 space-y-3 md:space-y-0  max-w-xs md:max-w-3xl mx-auto border border-white bg-sky-100 w-full">
              <h3 className="font-black text-gray-800 md:text-3xl text-xl text-left">
                {project.name}
              </h3>
            </div>
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
              <div className="w-full bg-white grid place-items-center">
                <img
                  src="../../../src/assets/mahakim.png"
                  alt="tailwind logo"
                  className=""
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <h3 className="font-black text-gray-800 text-left">
                  Description:
                </h3>
                <p className=" text-gray-500 ">
                  {project.description}
                </p>
                <p>squad :</p>
                <AvatarGroup max={4}>
                  <Avatar alt="avatar" sx={{ width: 24, height: 24 }} src={avatarImage} />
                  <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} src={avatarImage} />
                  <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} src={avatarImage} />
                  <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} src={avatarImage} />
                </AvatarGroup>
                <p className="text-xl font-black text-blue-500">
                {project.status === 'Done'
                  ? 'Done'
                  : project.status === 'In Progress'
                  ? 'In Progress'
                  : project.status === 'Canceled'
                  ? 'Canceled'
                  : 'Standby'
                  }                
                  </p>
                <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                  <div className="w-full bg-white">
                    <div className="w-full h-4 bg-blue-200 rounded-full">
                      <div
                        className="h-full text-center text-xs text-white bg-blue-500 rounded-full"
                        style={{ width: `${pourcentage}%` }}
                      >
                        {pourcentage}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}