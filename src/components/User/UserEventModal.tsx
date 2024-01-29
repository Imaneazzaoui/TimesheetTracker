import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserTabs } from './UserTabs';

  
  
export default function EventModal() {
    
    const navigate = useNavigate(); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };
      
      

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    mail_pers: '',
    num_pers: '',
    localite: '',
    statut: '',
    avatar:''
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
   console.log('user');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/users/save`, user);
      console.log('User added');
      alert('User added successfully');
      navigate('/users'); 
    } catch (error) {
      console.error('Error adding user:', error);
      console.log('User data:', user);
    }
  };
  

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-end items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)",overflowY: "auto" }}>
    <form className="bg-white rounded-lg shadow-2xl w-[400px] flex flex-col items-start" onSubmit={handleSubmit} style={{ height: "100vh", position: "fixed" }}>
        <header className=" pb-2 flex justify-between w-full h-[52px]" style={{ backgroundColor: "#364574" }}>
          <div></div>
          <h5 className="text-white mr-auto ml-5 mt-4" style={{  fontSize: '18px', fontWeight: 'normal', fontFamily:'Poppins,sans-serif'}}>Ajouter un utilisateur</h5>
          <button>
            <span className="material-icons-outlined  pt-3 text-white pr-2" style={{ marginRight: '5px' }}>close</span>
          </button>
          
        </header>
        
        <div className="p-3 w-full">
          <div className="w-full">
            <div className="relative w-full">
            <UserTabs />
            <div>
            <div className="mb-2 block">
            <Label
            htmlFor="first_name"/>
            </div>
            <div className="mb-2 block">
            <label>First Name:</label>
            </div>
            <TextInput
            id="first_name"
            name='first_name'
            value={user.first_name}
            onChange={handleChange}
            required
            shadow
            type="text"
            />
            </div>

            

            <div>
            <div className="mb-2 block">
            <Label
            htmlFor="last_name"
            />
            </div>
            <div className="mb-2 block">
            <label>Last Name:</label>
            </div>
            <TextInput
            id="last_name"
            name='last_name'
            value={user.last_name}
            onChange={handleChange}
            required
            shadow
            type="text"
            />
            </div>

            
            <div>
            <div className="mb-2 block">
            <Label
            htmlFor="avatar"
            />
            </div>
            <div className="mb-2 block">
            <label>Avatar:</label>
            </div>
            <TextInput
            id="avatar"
            name='avatar'
            value={user.avatar}
            onChange={handleChange}
            required
            shadow
            type="text"
            />
            </div>

            <div>
            <div className="mb-2 block">
            <Label
                htmlFor="mail_pers"
            />
            </div>
            <div className="mb-2 block">
            <label>Email:</label>
            </div>
            <TextInput
            id="mail_pers"
            name='mail_pers'
            value={user.mail_pers}
            onChange={handleChange}
            required
            shadow
            type="email"
            />
        </div>


        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="num_pers"
            />
            </div>
            <div className="mb-2 block">
            <label>Numéro de téléphone:</label>
            </div>
            <TextInput
            id="num_pers"
            name='num_pers'
            value={user.num_pers}
            onChange={handleChange}
            required
            shadow
            type="text"
            />
        </div>

        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="localite"
            />
            </div>
            <div className="mb-2 block">
            <label>Localité:</label>
            </div>
            <TextInput
            id="localite"
            name='localite'
            value={user.localite}
            onChange={handleChange}
            required
            shadow
            type="text"
            />
        </div>

        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="statut"
            />
            </div>
            <div className="mb-2 block">
            <label>Statut:</label>
            </div>
            <TextInput
            id="statut"
            name='statut'
            value={user.statut}
            onChange={handleChange}
            required
            shadow
            type="text"
            />
        </div>

        

      <br></br>
      <Button type="submit" >
        Ajouter nouveau utilisateur
      </Button>
              
            </div>
          </div>
          {/* ... (autres éléments) */}
          
          <br />
          <br />
          
          <br />
          <div className="w-full flex justify-center">
          </div>
        </div>
        </form>
    
        {/*<footer className="flex p-2 mt-5 fixed bottom-0 ">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <button className='bg-blue-900 px-5 py-4 ml-8 my-3 rounded text-white text-sm w-full' type="submit"
                 id='savebutton'>Enregistrer</button>
            </div>
            <div>
              <button className='bg-gray-300 px-5 py-4 ml-9 my-3 rounded text-black text-sm w-full' >Fermer</button>
            </div>
          </div>
  </footer>*/}
    </div>
  );
}
