import React, {useState} from 'react';
import './UploadFile.css';

export default function UploadFile(props){

	const handleSubmission = (fileToUpload) => {
		const formData = new FormData();

		formData.append('file', fileToUpload);

		fetch(
			'http://localhost:8080/files',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				props.setReloadTable(props.reloadTable+1)
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	

	const hiddenFileInput = React.useRef(null);
  
	const handleClick = event => {
	  hiddenFileInput.current.click();
	};

	const handleChange = event => {
	  handleSubmission(event.target.files[0])
	};
	return (
	  <>
		<a href={'#'} onClick={handleClick} title="Click to upload a new file">
		  Upload
		</a>
		<input type="file"
			   ref={hiddenFileInput}
			   onChange={handleChange}
			   style={{display:'none'}} 
		/> 
	  </>
	)
}


