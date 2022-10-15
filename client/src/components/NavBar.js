import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



const NavBar = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>E-shop</NavLink>
				{user.isAuth ?
					<Nav className="ml-auto" style={{ color: 'white' }}>
						<Button 
							variant={'outline-light'}
							onClick={() => navigate(ADMIN_ROUTE)}
						>
							Admin panel
						</Button>
						<Button 
							variant={'outline-light'} 
							onClick={() => navigate(LOGIN_ROUTE)}
							className ='ms-2'
							>
								Log Out
							</Button>
					</Nav>
					:
					<Nav className="ml-auto" style={{ color: 'white' }}>
						<Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Log In</Button>
					</Nav>
				}
			</Container> 
		</Navbar>
	) 
})

export default NavBar