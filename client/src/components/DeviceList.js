import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import DeviceItem from './DeviceItem';
import Card from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';




const DeviceList = observer(() => {
	const { device } = useContext(Context)
	return (
		<Row className='d-flex'>
			{device.devices.map(device =>
				<DeviceItem key={device.id} device={device}/>
			)}
		</Row>
	)
})

export default DeviceList