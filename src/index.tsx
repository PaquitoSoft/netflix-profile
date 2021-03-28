import * as React from 'react';
import { PiletApi } from '@paquitosoft/netflix-piral';
import ProfileExtension from './components/ProfileExtension';
import './styles/style.scss';

export function setup(app: PiletApi) {
//   app.showNotification('Hello from Piral!', {
//     autoClose: 2000,
//   });
//   app.registerMenu(() =>
//     <a href="https://docs.piral.io" target="_blank">Documentation</a>
//   );
//   app.registerTile(() => <div>Welcome to Piral!</div>, {
//     initialColumns: 2,
//     initialRows: 1,
//   });
	// app.registerExtension('header-items', ProfileExtension);
	app.registerExtension('header-right', ProfileExtension);

	const ProfilePage = React.lazy(() => import('./components/ProfilePage'));
	app.registerPage('/profile', ProfilePage);
}
