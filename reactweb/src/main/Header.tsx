import { FC } from 'react';
import logo from './tatik-papik.logo.jpg';

type Args = {
	subtitle: string
}

const Header: FC<Args> = ({ subtitle }) => {
	return (
		<header className='row mb-4'>
			<div className='col-5'>
				<img src={logo} className='logo' alt="logo" />
			</div>
			<div className="col-7 mt-5 subtitle">{subtitle}</div>
		</header>
	);
}

export default Header