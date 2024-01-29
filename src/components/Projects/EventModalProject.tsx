import React, { useContext, useState,useEffect } from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import axios from 'axios';


export default function EventModal() {




  const [Projectpost,setProjectpost] = useState({
    name: "",
    description : "",
    status:""
})

const {name,description,status} = Projectpost;

const onInputChange = (e : any) => {
  setProjectpost({ ...Projectpost, [e.target.name]: e.target.value });
};

const onSubmit = async (e : any) => {
  e.preventDefault();
  await axios.post("http://localhost:8088/projects", Projectpost);
  window.location.reload();
};  

  const [modalVisible, setModalVisible] = useState(true);
  const closeModal = () => {
    setModalVisible(false);
   
  };
  return (
    <>
     {modalVisible && (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-end items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <form className="bg-white rounded-lg shadow-2xl w-1/4 flex flex-col items-start" style={{ height: "100vh" }} onSubmit={(e) => onSubmit(e)}>
        <header className="pb-3 p-5 flex justify-between w-full" style={{ backgroundColor: "#364574" }}>
          <h2 className="text mr-4" style={{ fontSize: '15px', color: 'white' }}>
          Ajouter un nouveau Projet
          </h2>
          <button className='material-icons-outlined pb-2 text-white' onClick={closeModal}>close</button>
        </header>
        <div className="p-3 w-full" style={{ overflowY: 'auto' }}>
          <div className="w-full">
            <div className="relative w-full">
              <br />
              <div className="">
                <div className='pt-4'>
                  <p>Titre :</p>
                  <input
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    style={{ fontSize: '15px' }}
                    value={name} name='name'  onChange={(e) => onInputChange(e)}
                  >
                  </input>
                </div>
                <div className='pt-4'>
                  <p>Description :</p>
                  <textarea cols={10} rows={10} className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    style={{ fontSize: '15px' }}
                    value={description} name="description"  onChange={(e) => onInputChange(e)}
                    >
                    
                  </textarea>
                  
                </div>
               
                <div className='pt-4'>
                  <p>Status :</p>
                  <select
                    
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    value={status} name="status"  onChange={(e) => onInputChange(e)}
                  >
                   <option value="In Progress">In Progress</option>
                   <option value="Done">Done</option>
                   <option value="Canceled">Canceled</option>
                   <option value="Standby">Standby</option>
                  </select>
                </div>
                <div className='pt-4'>
                  <p>Vinette :</p>
                  <input
                    type="file"
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                  />
                </div>
              </div>
              <br />
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <footer className="flex justify-end p-3 mt-5 bottom-0 ">

              <div className="grid grid-cols-2 grid-rows-1 gap-4">
          <div >
          <button className='bg-blue-900 px-5 py-4 ml-2 my-3 rounded text-white text-sm w-full' type="submit" id='savebutton'>
                Enregistrer
              </button>
          </div>
          <div > <button className='bg-gray-300 px-5 py-4 my-3 rounded text-black text-sm w-full' onClick={closeModal}>
            Fermer
          </button></div>
      </div>    
        </footer>
      </form>
    </div>
  )}
  </>
);
}