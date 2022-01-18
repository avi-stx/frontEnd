import React from 'react'

export default function TableBody(props) {
    const rows = props.filesList.map(element => {
        let i=0;
        return(
            <tr key={element.id}> 
                <td>{element.fileName}</td>
                <td>{element.extension}</td>
                <td>{element.size}</td>
                <td>{element.date}</td>
                <td></td>
            </tr>

        )
    });

    console.log(rows)

    return (
        <tbody>
            {rows}
        </tbody>
    )
}
