import './App.css';
import UploadFile from './Components/UploadFile'
import FilesTable from './Components/tableComponents/FilesTable';
import { useState } from 'react';


function App() {

  const [reloadTable , setReloadTable] = useState(0)

  return (
    <div className="App">
      <header className='App-header'>Micro-Server by Tal Alfi</header>
        <FilesTable reloadTable={reloadTable} setReloadTable={setReloadTable}/>
       {/* <UploadFile setReloadTable={setReloadTable} reloadTable={reloadTable}/> */}
    </div>
  );
}

export default App;
