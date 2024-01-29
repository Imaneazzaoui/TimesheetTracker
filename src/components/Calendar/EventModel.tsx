import React, { useContext, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const labelsClasses = ['gray'];

export default function EventModal() {
  const { setShowEventModal, daySelected, selectedEvent, dispatchCalEvent } = useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [numberValue, setNumberValue] = useState(selectedEvent ? selectedEvent.numberValue : "");
  const { setDaySelected } = useContext(GlobalContext);
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label) : labelsClasses[0]
  );
  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false); // Nouvel état

  const handleTitleChange = (e: { target: { value: any; }; }) => {
    setTitle(e.target.value);
  };

  const handleNumberChange = (e: { target: { value: string; }; }) => {
    const inputValue = parseFloat(e.target.value);
    let newValue = isNaN(inputValue) ? 0 : Math.max(inputValue, 0);
    newValue = Math.min(newValue, 1);
    setNumberValue(newValue);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (numberValue === 0) {
      setTitle("");
    }
    
    // Create and dispatch the original project event
    const originalCalendarEvent = {
      title,
      numberValue,
      label: selectedLabel,
      day: daySelected?.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
  
    console.log("Original Calendar Event:", originalCalendarEvent);
  
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: originalCalendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: originalCalendarEvent });
    }
  
    // Create and dispatch the new project event
    if (showAdditionalInputs && newTitle && newNumberValue) {
      const newCalendarEvent = {
        title: newTitle,
        numberValue: newNumberValue,
        label: selectedLabel,
        day: daySelected?.valueOf(),
        id: Date.now(), // Assign a new id for the new project
      };
  
      console.log("New Calendar Event:", newCalendarEvent);
  
      dispatchCalEvent({ type: "push", payload: newCalendarEvent });
    }
  
    // Reset the input fields
    setNewTitle("");
    setNewNumberValue("");
  
    // Close the modal
    setShowEventModal(false);
  };
  
  

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const [newTitle, setNewTitle] = useState(""); 
  const [newNumberValue, setNewNumberValue] = useState("");


  const parsedNumberValue = parseFloat(numberValue);
  const parsedNewNumberValue = parseFloat(newNumberValue);
  const totalConsumption = isNaN(parsedNumberValue) || isNaN(parsedNewNumberValue)
    ? 0
    : parsedNumberValue + parsedNewNumberValue;
    
    
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-end items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <form className="bg-white rounded-lg shadow-2xl w-1/4 flex flex-col items-start" style={{ height: "100vh" }}>
      <header className="pb-2 flex justify-between w-full pt-4" style={{ backgroundColor: "#364574", height: "50px" }}>
  <div></div>
  <h2 className="text pt-2" style={{ fontSize: '15px', color: 'white', margin: 0 }}>Ajouter une feuille de temps</h2>
  <button onClick={() => setShowEventModal(false)}>
    <span className="material-icons-outlined pt-1 text-white">close</span>
  </button>
  <button
    onClick={() => {
      dispatchCalEvent({
        type: "delete",
        payload: selectedEvent,
      });
      setShowEventModal(false);
    }}
    className='material-icons-outlined pr-8 text-rose-600	'
    id="deletebutton"
  >
    <span className="material-icons-outlined text-black-400">delete</span>
  </button>
</header>


        <div className="p-3 w-full">
          <div className="w-full">
            <div className="relative w-full">
              <div className="w-full pt-5 relative">
                <input type="text" className='appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight text-center' value={formattedDate} readOnly />
                
              </div>
              <br></br>
              <hr></hr>
              <div className="grid gap-4 grid-cols-2">
                <div className='pt-4'>
                  <p>Projet :</p>
                  <select
                    name="projet"
                    defaultValue={title}
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    onChange={handleTitleChange}
                    style={{ fontSize: '15px' }}
                  >
                    <option value="" disabled>
                      Projet
                    </option>
                    <option value="E-himaya">E-himaya</option>
                    <option value="SEH Social">SEH Social</option>
                    <option value="Manifest Frot">Manifest Frot</option>
                  </select>
                </div>
                <div className='pt-4'>
                  <p>Consommation :</p>
                  <input
                    type="number"
                    step="0.25"
                    defaultValue={numberValue}
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    onChange={handleNumberChange}
                    style={{ fontSize: '15px' }}
                    max={1}
                  />
                </div>
              </div>
              <br></br>
              <hr></hr>
              {showAdditionalInputs && (
                <div className="grid gap-4 grid-cols-2">
                  <div className='pt-4'>
                  <select
                    name="projet"
                    placeholder="Nouveau projet"
                    value={newTitle}
                    required
                    className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    onChange={(e) => setNewTitle(e.target.value)} // Update newTitle
                    style={{ fontSize: '15px' }}
                  >
                    <option value="" disabled>
                      Projet
                    </option>
                    <option value="E-himaya">E-himaya</option>
                    <option value="SEH Social">SEH Social</option>
                    <option value="Manifest Frot">Manifest Frot</option>
                  </select>
                   
                  </div>
                  <div className='pt-4'>
                    <input
                      type="number"
                      step="0.25"
                      placeholder="Nouvelle consommation"
                      value={newNumberValue}
                      onChange={(e) => setNewNumberValue(e.target.value)}
                      className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                      max={1}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* ... (autres éléments) */}
          <div className="mt-5">
            <button
              className="bg-gray-300 px-5 py-4 mt-5 rounded text-blue-600 ml-3 full-width text-sm"
              onClick={() => setShowAdditionalInputs(true)} // Afficher les champs supplémentaires au clic
            >
              <AddBoxOutlinedIcon /> AJOUTER UN NOUVELLE ENREGISTREMENT
            </button>
          </div>
          <br />
          <br />
          <div className="w-full flex justify-center gap-x-2">
            {labelsClasses.map((lblClass, i) => (
              <span
                key={i}
                onClick={() => setSelectedLabel(lblClass)}
                className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
              >
                {selectedLabel === lblClass && (
                  <span className="material-icons-outlined text-white" style={{ fontSize: '15px' }}>
                    check
                  </span>
                )}
              </span>
            ))}
          </div>
          <br />
          <div className="w-full flex justify-center">
            <p>{daySelected ? dayjs(daySelected).format('dddd, MMMM DD') : 'Aucune date sélectionnée'}</p>
          </div>
          
        </div>

        <div className="grid gap-4 grid-cols-2 pt-5 m-5">
        <div className='text-lg font-semibold text-blue-400'>      Total consommation </div>
        <div className="w-full flex justify-center ml-5">
    <p className={`text-lg font-semibold ml-5 ${ totalConsumption > 1 ? 'text-red-500' : 'text-green-500'}`}>
        {totalConsumption.toFixed(2)}
    </p>
</div>
        </div>
        

       

        <footer className="flex justify-end p-3 mt-5 fixed bottom-0 ">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <button className='bg-blue-500 px-5 py-4 my-3 ml-1 rounded text-white text-sm w-full'>Envoyer</button>
            </div>
            <div>
              <button className='bg-blue-800 px-5 py-4 my-3 rounded text-white text-sm w-full'  onClick={handleSubmit} id='savebutton'>Enregistre</button>
            </div>
            <div>
              <button className='bg-gray-300 px-5 py-4 my-3 rounded text-black text-sm w-full' onClick={() => setShowEventModal(false)}>Fermer</button>
            </div>
          </div>
        </footer>
      </form>
    </div>
  );
}