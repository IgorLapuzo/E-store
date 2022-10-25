import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchTypes, fetchBrands, createDevice, } from '../../http/deviceAPI';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const CreateDevice = observer (({ show, onHide }) => {
	const {device} = useContext(Context)
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [file, setFile] = useState(null)
	const [info, setInfo] = useState([])

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
	}, [])

	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}
	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	const changeInfo = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
	}

	const selectFile = e => {
		setFile(e.target.files[0])
	}

	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', device.selectedBrand.id)
		formData.append('typeId', device.selectedType.id)
		formData.append('info', JSON.stringify(info))
		createDevice(formData).then(data => onHide())
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
						<Dropdown.Toggle>{device.selectedType.name || 'Chose type'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type =>
								<Dropdown.Item 
									key={type.id}
									onClick={() => device.setSelectedType(type)}
								>
									{type.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>	
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>{device.selectedBrand.name || 'Chose brand'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand =>
								<Dropdown.Item 
									key={brand.id}
									onClick={() => device.setSelectedBrand(brand)}
								>
									{brand.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>		
					<Form.Control
						className='mt-3'
						placeholder={'Enter device\'s name'}
						value={name}
						onChange={e => setName(e.target.value)}
					/>	
					<Form.Control
						className='mt-3'
						placeholder={'Enter device\'s price'}
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
						type='number'
					/>	
					<Form.Control
						className='mt-3'
						type='file'
						onChange={selectFile}
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
									value={i.title}
									onChange={(e) => changeInfo('title', e.target.value, i.number)}
									placeholder={'Prop\'s title'}
								/>
							</Col>
							<Col md={4}>
								<Form.Control
									value={i.description}
									onChange={(e) => changeInfo('description', e.target.value, i.number)}
									placeholder={'Prop\'s description'}
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
				<Button variant='outline-success' onClick={addDevice}>Add</Button>
			</Modal.Footer>
		</Modal>
	);
})

export default CreateDevice