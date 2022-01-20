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
    console.log("in TableBody with props: ",props)
    const rows = props.filesList.map(element => {

        const [fileName, fileExtension] = getFileDescription(element.name)
        return(
            <tr key={element.id}> 
                <td>{fileName}</td>
                <td>{fileExtension}</td>
                <td>{element.size}</td>
                <td>{Date(element.date)}</td>
                <td><button>Delete</button></td>
            </tr>
        )
    });


    return (
        <tbody>
            {rows}
        </tbody>
    )
}
