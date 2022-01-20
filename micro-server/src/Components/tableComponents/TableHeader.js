import './FilesTable.css'
import UploadFile from "../UploadFile"

const TableHeader = (props) =>{

    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Extension</th>
                <th>Size</th>
                <th>Upload date</th>                    
                <th></th>
                <th>
                <UploadFile reloadTable={props.reloadTable} setReloadTable={props.setReloadTable}/>
                </th>
            </tr>
        </thead>
    )

}


export default TableHeader;