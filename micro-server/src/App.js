import './App.css';
import FilesTable from './Components/tableComponents/FilesTable';
import axios from 'axios';


async function fetchData(){
  console.log("sending request")
  const response =
    await axios.get("http://localhost:8080/files",{})
  console.log(response.data)
}


function App() {
  return (
    <div className="App">
      <header>Welcome to Micro-Server by Tal Alfi</header>
      {/* <Upload /> */}
      <button onClick={fetchData} >get data from backend</button>
        <FilesTable />
    </div>
  );
}

export default App;
