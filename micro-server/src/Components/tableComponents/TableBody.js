import React from 'react'

export default function TableBody(props) {
    console.log("in TableBody with props: ",props)
    const rows = props.filesList.map(element => {
        let i=0;
        return(
            <tr key={element.id}> 
                <td>{element.name}</td>
                <td>{element.extension}</td>
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
