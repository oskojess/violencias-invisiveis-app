import React from 'react'

import MenuItem from './menuItem'

import { slide as Menu } from 'react-burger-menu'

export default props => (
	<Menu width={ '25%' } >
		<MenuItem path='/dashboard' label='Dashboard' icon='dashboard' />
		<MenuItem path='/novoBaixoAssinado' label='Iniciar baixo-assinado' icon='star' />
		<MenuItem path='/acompanharBaixoAssinado' label='Acompanhar baixo-assinado' icon='clock' />
		<MenuItem path='/tutorial' label='Tutorial' icon='info' />
		<MenuItem path='/perfil' label='Meu Perfil' icon='user' />
	</Menu>
)