import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import DeviceList from '../components/DeviceList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';

const Shop = () => {
	return (
		<Container>
			<Row className='mt-2'>
				<Col md={3}>
					<TypeBar/>
				</Col>
				<Col md={9}>
					<BrandBar/>
					<DeviceList/>
				</Col>
			</Row>

		</Container>
	)
}

export default Shop;