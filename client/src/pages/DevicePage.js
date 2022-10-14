import React from 'react';
import { Container } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const DevicePage = () => {

	const device = {id: 6, name: 'Iphone 13 pro', price: 2100, rating: 0, img: 'https://www.reliancedigital.in/medias/Apple-iPhone-13-Pro-Smartphones-491997729-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODQ4Nzh8aW1hZ2UvanBlZ3xpbWFnZXMvaDYwL2hjYi85NjM3MjQ2MDc0OTEwLmpwZ3xkMjA5M2ZkMGU5NjRlZjkxZjAyYjZjOTkxYmViZWU0ZDQ2Yzk0NDE2NGM0ZGY1YTk1MzdhNTQ1YmY1Njg5ZDJl'}

	return (
		<Container className="mt-3">
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={device.img} />
				</Col>
				<Col md={4}>
					<Row className='d-flex flex-column alight-items-center'>
						<h2>{device.name}</h2>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 48 }}
						>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
					className='d-flex flex-column align-items-center justify-content-around'
					style={{width: 300, height:300, fontSize: 32, border: '5px solid iightgray'}}
					>
						<h3>from: {device.price} $</h3>
						<Button variant={'outline-dark'}>Add to basket</Button>
					</Card>
				</Col>

			</Row>

		</Container>
	)
}

export default DevicePage;