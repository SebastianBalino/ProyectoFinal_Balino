import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Navbar() {
	return (
		<>
			<nav className='menu'>
				<h2>All<span>Sports</span></h2>
				<CartWidget />
				<div className='botones'>
					<button>Inicio</button>
					<button>Productos</button>
					<button>Nosotros</button>
					<button>Contacto</button>
				</div>
				
			</nav>
		</>
	)
}

export default Navbar


