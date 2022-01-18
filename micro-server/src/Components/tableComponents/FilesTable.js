import TableHeader from './TableHeader';
import './FilesTable.css'
import TableBody from './TableBody';

const FilesTable = () => 
{
    const demoStruct = [
        {
            fileName : "tal",
            extension :"txt",
            size : "20KB",
            uploadDate: Date.now()
        },
        {
            fileName : "alfi",
            extension :"txt",
            size : "20KB",
            uploadDate: Date.now()
        },
        {
            fileName : "test",
            extension :"txt",
            size : "20KB",
            uploadDate: Date.now()
        },
        {
            fileName : "another",
            extension :"txt",
            size : "20KB",
            uploadDate: Date.now()
        }

    ]

    return (
        <table className="styled-table">
            <TableHeader />
            <TableBody filesList={demoStruct}/>         
        </table>
    )
}

export default FilesTable;