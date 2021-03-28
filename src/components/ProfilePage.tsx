import * as React from 'react';
import AccountSwitcher from './AccountSwitcher';
import LogoutButton from './LogOutButton';
import createPersistedState from 'use-persisted-state';

const useUserState = createPersistedState('user');

const ProfilePage: React.FC = () => {
	const [user, setUser] = useUserState(null);

	return (
		<div className="ProfilePage">
			<AccountSwitcher />
			{user && <LogoutButton logoutAction={() => setUser(null)} />}
		</div>
	);
};

export default ProfilePage;
