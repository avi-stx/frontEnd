import TableHeader from './TableHeader';
import './FilesTable.css'
import TableBody from './TableBody';
import axios from 'axios';
import { useEffect, useState } from 'react';




const FilesTable = () => 
{

    const [tableStruct,setTableStruct] = useState(false)

    async function fetchData(){

        fetch("http://localhost:8080/files").then((response) => {
            return response.json();
          }) .then((data) => {
            const transformedTable = data.map((rowData) => {
              return {
                ...rowData
              };
            });
            setTableStruct(transformedTable);
    
          });
      }

    useEffect(() => {
        (
          async () => fetchData()
        )()
      }, [])


    
    return (
        <>
            <button onClick={fetchData} >get data from backend</button>
            <table className="styled-table">
                <TableHeader />
                {tableStruct && <TableBody filesList={tableStruct}/>}
            </table>
        </>
    )
}

export default FilesTable;