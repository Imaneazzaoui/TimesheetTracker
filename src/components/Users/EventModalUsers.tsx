import React, { useContext, useState,useEffect } from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function EventModal() {

  const [modalVisible, setModalVisible] = useState(true);
  const closeModal = () => {
    setModalVisible(false);
   
  };
  return (
    <>
     {modalVisible && (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-end items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <form className="bg-white rounded-lg shadow-2xl w-1/4 flex flex-col items-start" style={{ height: "100vh" }}>
        <header className="pb-3 p-5 flex justify-between w-full" style={{ backgroundColor: "#364574" }}>
          <h2 className="text mr-4" style={{ fontSize: '15px', color: 'white' }}>
            Ajouter un nouveau utilisateur
          </h2>
          <button className='material-icons-outlined pb-2 text-white' onClick={closeModal}>close</button>
        </header>
        <div className="p-3 w-full" style={{ overflowY: 'auto' }}>
          <div className="w-full">
            <div className="relative w-full">
              <br />
              <div className="">
             
                <div className='pt-2'>
                  <p>Profil :</p>
                  <select
                    name="profil"
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    style={{ fontSize: '15px' }}
                  >
                   <option>DevOps</option>
                  </select>
                </div>
                <div className='pt-4'>
                  <p>Nom :</p>
                  <input
                    type='text'
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    style={{ fontSize: '15px' }}
                  />
                </div>
                <div className='pt-4'>
                  <p>Prenom :</p>
                  <input
                    type='text'
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    style={{ fontSize: '15px' }}
                  />
                </div>
                <div className='pt-4'>
                  <p>Numero Telephone :</p>
                  <input
                    type='text'
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    style={{ fontSize: '15px' }}
                  />
                </div>
                <div className='pt-4'>
                  <p>Email :</p>
                  <input
                    type='email'
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    style={{ fontSize: '15px' }}
                  />
                </div>
                <div className='pt-4'>
                  <p>Localité :</p>
                  <select
                    name=""
                    id=""
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                  >
                  </select>
                </div>
                <div className='pt-4'>
                  <p>Photo de profil :</p>
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <button className='bg-blue-900 px-5 py-4 ml-2 my-3 rounded text-white text-sm w-full' type="submit" id='savebutton'>
                Enregistrer
              </button>
            </div>
            <div>
            <div>
  <button className='bg-gray-300 px-5 py-4 my-3 rounded text-black text-sm w-full' onClick={closeModal}>
    Fermer
  </button>
</div>
            </div>
          </div>
        </footer>
      </form>
    </div>
  )}
  </>
);
}