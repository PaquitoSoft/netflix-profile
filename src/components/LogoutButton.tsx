import * as React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton: React.FC<{ logoutAction: Function }> = ({ logoutAction }) => (
	<Link className="LogoutButton" to="/" onClick={() => logoutAction()}>Log out</Link>
);

export default LogoutButton;
