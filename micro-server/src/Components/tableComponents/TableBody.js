import React from 'react'

const getFileNAme = (file)=> {
    return file.split('.')[0]
}

const getFileExtension = (file)=> {
    return file.split('.')[1]
}

const getFileDescription = (file) =>{
    return [getFileNAme(file),getFileExtension(file)]
}


export default function TableBody(props) {


    async function downloadFile(fileName){
        fetch("files/"+fileName)
        .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = fileName;
                    a.click();
                });
                //window.location.href = response.url;
        });
    }   

    

    async function removeFile(fileName){
        fetch("files/"+fileName,{
            method: 'DELETE',
          })
          .then(res => {
              if(res.status){
                let newFilesList = props.filesList.filter(file => file.name!==fileName)
                props.setTableStruct(newFilesList)
              }
          })
    }



    console.log("props are : ", props)
    const rows = props.filesList.map(element => {

        const [fileName, fileExtension] = getFileDescription(element.name)
        return(
            <tr key={element.id}> 
                <td>{fileName}</td>
                <td>{fileExtension}</td>
                <td>{element.size+" KB"}</td>
                <td>{Date(element.date)}</td>
                <td>
                    <button onClick={() => removeFile(element.name)}>
                        Delete
                    </button>
                </td>
                <td>
                    <button onClick={() => downloadFile(element.name)}>
                        Download
                    </button>
                </td>
            </tr>
        )
    });


    return (
        <tbody>
            {rows}
        </tbody>
    )
}
