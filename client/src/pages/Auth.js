import React, { useContext } from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


const Auth = observer( () => {
	const {user} = useContext(Context)
	const location = useLocation()
	const navigate = useNavigate()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password)
			}
			user.setUser(data)
			user.setIsAuth(true)
			navigate(SHOP_ROUTE)
		} catch (e) {
			alert(e.response.data.message)
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
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter your password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
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
						<Button 
							variant={'outline-success'}
							onClick={click}
						>
							{isLogin ? 'Sign In' : 'Registration'}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	)
})
 
export default Auth;