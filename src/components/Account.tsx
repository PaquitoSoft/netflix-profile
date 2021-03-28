import * as React from 'react';
import { AccountProps } from '../models/proptypes';
import avatars from '../data/avatars';
import { Link } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';

const Account: React.FC<AccountProps> = ({ user, onClickName }) => {
	const avatar = user.avatarId ? avatars[user.avatarId] : avatars[0];
	const profilepic = user.imageUrl ? <ProfilePicture imageUrl={user.imageUrl} /> : null;

	return (
		<div className="profile">
			<Link to="/" onClick={() => onClickName() }>
				{profilepic || avatar}
			</Link>
			<div className="profile-name">
				<Link to="/" onClick={() => onClickName() }>
					{user.name}
				</Link>
			</div>
		</div>
	);
};

export default Account;
