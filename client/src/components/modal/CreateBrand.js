import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/deviceAPI';


const CreateBrand = ({ show, onHide }) => {
	const [value, setValue] = useState('')
	const addBrand = () => {
		createBrand({name: value}).then(data => setValue(''))
		onHide()
	}
	return (
		<Modal
			show={show}
			onHide={onHide}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add Brand
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder={'Enter brand\'s name'}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Close</Button>
				<Button variant='outline-success' onClick={addBrand}>Add</Button>
			</Modal.Footer>
		</Modal>
	);

}

export default CreateBrand