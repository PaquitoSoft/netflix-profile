import * as React from 'react';

const ProfilePicture: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
	<div
		className="profile-icon"
		style={{
			backgroundImage: `url(${imageUrl})`,
			backgroundSize: 'cover'
		}}
	/>
);

export default ProfilePicture;
