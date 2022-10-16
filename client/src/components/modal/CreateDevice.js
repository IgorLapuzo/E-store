import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const CreateDevice = ({ show, onHide }) => {
	const {device} = useContext(Context)
	const [info, setInfo] = useState([])

	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}
	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add Device
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>Chose device</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type =>
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>	
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>Chose brand</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand =>
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>		
					<Form.Control
						className='mt-3'
						placeholder={'Enter device\'s name'}
					/>	
					<Form.Control
						className='mt-3'
						placeholder={'Enter device\'s price'}
						type='number'
					/>	
					<Form.Control
						className='mt-3'
						type='file'
					/>	
					<hr/>
					<Button
						variant={'outline-dark'}
						onClick={addInfo}
					>
						Add new property
					</Button>
					{info.map(i =>
						<Row className='mt-4' key={i.number}>
							<Col md={4}>
								<Form.Control
									placeholder={'Enter property\'s name'}
								/>
							</Col>
							<Col md={4}>
								<Form.Control
									placeholder={'Enter property\'s description'}
								/>
							</Col>
							<Col md={4}>
								<Button 
									onClick={() => removeInfo(i.number)}
									variant={'outline-danger'}
								>
									Delete
								</Button>
							</Col>
						</Row>	
					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Close</Button>
				<Button variant='outline-success' onClick={onHide}>Add</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CreateDevice