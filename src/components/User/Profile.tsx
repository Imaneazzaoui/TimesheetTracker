import DropdownComponent from './Dropdown'
import TextInputComponent from './textinput'

 
export default function Profile() {
  return (
    <div>
    <DropdownComponent 
    label={'Role'} 
    options={[]}/>    
     <br/>
     <DropdownComponent label={'Profil'} options={[]}/>    
     <br/>
     <TextInputComponent placeholder="Nom"/>
     <br/>
     <TextInputComponent placeholder="Prénom"/>
     <br/>
     <DropdownComponent label={'Localité'} options={[]}/>    
     <br/>
    <TextInputComponent placeholder="Numéro de téléphone"/>
    </div>
    )
}
