import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { login, registration } from '../http/userAPI';

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	const click = async () => {
		if (isLogin) {
			const response = await login();
		} else {
			const response = await registration()
			console.log(response)
		}
		
	}
	
	return (
		<Container 
		className = 'd-flex justify-content-center align-items-center'
		style = {{height: window.innerHeight - 54}} 
		>
			<Card style={{width: 600}} className = 'p-5'>
				<h2 className = 'm-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
				<Form className = 'd-flex flex-column'>
					<Form.Control
						className='mt-3'
						placeholder='Enter your e-mail'
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter your password'
					/>
					<div className='d-flex justify-content-between mt-3 ps-3 pe-3'>
						{isLogin ?
							<div>
								No account yet? Register <NavLink to={REGISTRATION_ROUTE}>here</NavLink>
							</div>
							:
							<div>
								Do you have an account?  <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
							</div>
						}
						<Button variant={'outline-success'}>
							{isLogin ? 'Sign In' : 'Registration'}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	)
}
 
export default Auth;