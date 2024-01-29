import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import avatarImage from "../../assets/avatar.jpg";



interface Project {
  name: string;
  status: string;
  end_date: string;
  // Add more properties as needed
}

export default function Tableinfo() {
  const [project, setProject] = useState<Project[]>([]);

  const loadProject = async () => {
    const result = await axios.get<Project[]>('http://localhost:8088/getprojects');
    setProject(result.data);
  };

  useEffect(() => {
    loadProject();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Done':
        return 'bg-green-200 text-green-500';
      case 'In Progress':
        return 'bg-orange-200 text-orange-500';
      case 'Canceled':
        return 'bg-red-200 text-red-500';
      default:
        return 'bg-gray-200 text-gray-500';
    }
  };
  const getProgressPercentage = (status: string) => {
    switch (status) {
      case 'Done':
        return '100%';
      case 'In Progress':
        return '50%';
      case 'Canceled':
        return '20%';
      case 'Standby':
        return '30%';
      default:
        return '0%';
    }
  };

  return (
    <div className='m-4 '>
      <div className="relative m-5 overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-800 dark:text-gray-800">
          <thead className=" text-gray-900 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <p className='text-lg'>Project name</p> 
              </th>
              <th scope="col" className="px-6 py-3">
                <p className='text-lg'>Progress</p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className='text-lg'>Assignee</p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className='text-lg'>Status</p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className='text-lg'>Due Date</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {project.map((projectItem, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="px-6 py-4 text-lg	 text-gray-900 whitespace-nowrap dark:text-white">
                  {projectItem.name}
                </td>
                <td className="px-6 py-4">
                <div className="w-full rounded bg-neutral-200 dark:bg-neutral-600">
                <div
                      className="bg-blue-300 rounded p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{ width: getProgressPercentage(projectItem.status) }}
                    >
                      {getProgressPercentage(projectItem.status)}
                    </div>
                </div>

                </td>
                <td className="px-6 py-4 flex justify-center ">
                <AvatarGroup max={4}>
                  <Avatar alt="avatarImage" sx={{ width: 24, height: 24 }} src={avatarImage} />
                  <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} src={avatarImage} />
                  <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} src={avatarImage} />
                  <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} src={avatarImage} />
                </AvatarGroup>
                </td>
                  <td className="px-6 py-4">
                    <p className={`rounded p-2 ${getStatusColor(projectItem.status)}`}>
                      {projectItem.status}
                    </p>
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {projectItem.end_date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
