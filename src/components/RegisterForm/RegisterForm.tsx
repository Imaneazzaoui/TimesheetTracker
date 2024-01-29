import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // State variables to store form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    user: {
      id: '',
    },
    role: {
      id: '',
      label: '', // Role Label
    },
  });

  // State variable to store the selected Role option
  const [selectedRoleOption, setSelectedRoleOption] = useState('');

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle role selection changes
  const handleRoleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = event.target.value;

    // Set the role ID and label based on the selected role
    let roleID = '';
    let roleLabel = '';

    switch (selectedRole) {
      case 'MANAGER':
        roleID = '3';
        roleLabel = 'Manager';
        break;
      case 'ADMIN':
        roleID = '2';
        roleLabel = 'Admin';
        break;
        case 'CONSULTANT':
          roleID = '4';
          roleLabel = 'Consultant';
          break;
      default:
        // Handle other roles as needed
    }

    setSelectedRoleOption(selectedRole);

    setFormData({
      ...formData,
      role: {
        id: roleID,
        label: roleLabel,
      },
    });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Send the formData to the /register endpoint
    console.log('Form Data:', formData);
    // Example of how to send data to the backend:
    fetch('http://localhost:8088/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Registration successful:', data);
        setRegistrationSuccess(true);
      })
      .catch((error) => {
        console.error('Registration failed:', error);
      });
  };

  return (
    <div className="h-screen pt-24">
<div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300 pt-10 mt-10">            <h2 className="text-4xl font-medium text-center">Add User</h2>
{registrationSuccess && (
  <p className="text-green-600 text-center mt-2">Registration successful!</p>
)}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <div className="form-group">
          <label>
          <p className="font-medium text-slate-700 pb-2">Email address</p>
          
          <input
            type="email"
            name="email"
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Enter email address"
            value={formData.email}
            
            onChange={handleInputChange}
            required
          />
          </label>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            name="password"
            placeholder='Enter password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Role:</label>
          <select
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"

            name="roleLabel"
            value={selectedRoleOption}
            onChange={handleRoleSelectChange}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="MANAGER">Manager</option>
            <option value="ADMIN">Admin</option>
            <option value="CONSULTANT">Consultant</option>
            {/* Add more role options as needed */}
          </select>
        </div>
        <button type="submit" className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">Save</button>
      </form>
    </div>
    </div>

  );
};

export default RegisterForm;