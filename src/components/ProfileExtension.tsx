import * as React from 'react';
import { Link } from 'react-router-dom';
import createPersistedState from 'use-persisted-state';
import { User } from '../models/types';
import avatars from '../data/avatars';

const useUserState = createPersistedState('user');

const ProfileExtension: React.FC = () => {
	const [user, _] = useUserState<User>(null);

	if (!user) return <Link to="/profile">Log In</Link>;

	const avatar = user.avatarId ? avatars[user.avatarId] : avatars[0];
	const profilepic = user.imageUrl ? <img src={user.imageUrl} alt={user.name} /> : avatar;

	return (
		<Link to="/profile">
			<div className="UserProfile">
				<div className="User">
					<div className="name">{user.name}</div>
					<div className="image">{profilepic}</div>
				</div>
			</div>
		</Link>
	);
};

export default ProfileExtension;
