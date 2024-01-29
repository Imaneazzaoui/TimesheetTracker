import React, { useState, useEffect } from 'react';
import axios from "axios";
import avatarImage from "../../assets/avatar.jpg";


interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  const [projectNumberUser, setProjectNumberUser] = useState(0);

  useEffect(() => {
    async function fetchProjectNumber() {
      try {
        const result = await axios.get(`http://localhost:8088/projects/numberByUser?userId=${user.id}`);
        setProjectNumberUser(result.data);
      } catch (error) {
        console.error('Error fetching project number:', error);
      }
    }

    fetchProjectNumber();
  }, [user.id]);

  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={avatarImage}
        alt="User profile"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-2xl text-black font-semibold">
            {user.first_name} {user.last_name}
          </p>
          <p className="text-slate-500 font-medium">
            Profil: {user.profil}
          </p>
          <p className="text-slate-500 font-medium">
            Statut: <span className="rounded p-1 m-1 bg-blue-200">
              {user.status}
            </span>
          </p>
          <p className="text-slate-500 font-medium">
            Projects: <span className="rounded m-1 p-1 ">
              {projectNumberUser}
            </span>
          </p>
          <p className="text-slate-500 font-medium">
            Date: {user.startdate} / {user.enddate}
          </p>
        </div>
        <button
          className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          View more info
        </button>
        <button
          className="px-4 mx-1 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          Edit
        </button>
        <button
          className="px-4 mx-1 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default function Card() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredUsers = users.filter(user => {
    const nameMatch = `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatch = statusFilter === 'all' || user.status === statusFilter;
    return nameMatch && statusMatch;
  });


  useEffect(() => {
    // Fetch users data
    axios.get<User[]>('http://localhost:8088/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="">
       <div className="grid grid-cols-5 grid-rows-1 gap-4 m-3">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search a user..."
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <div className="flex flex-col">
            <select
              name="Status"
              id="statusFilter"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-3 m-5">
        {filteredUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
