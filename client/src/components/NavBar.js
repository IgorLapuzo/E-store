import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';


const NavBar = observer(() => {
	const { user } = useContext(Context)
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Buy it now</NavLink>
				{user.isAuth ?
					<Nav className="ml-auto" style={{ color: 'white' }}>
						<Button variant={'outline-light'}>Admin panel</Button>
						<Button variant={'outline-light'} className ='ms-2'>Log In</Button>
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