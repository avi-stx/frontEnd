import React from 'react'

export default function TableBody(props) {
    const rows = props.filesList.map(element => {
        return(
            <tr>
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
