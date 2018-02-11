/**
 * Website's public API.
 * Make some functions and methods accessible in global scope.
 *
 * @module PublicAPI
 */

import { HeaderAPI } from './Header';

export class PublicAPI {
	/**
	 * Some of 'Header' module public methods.
	 *
	 * PublicAPI.Nav.open() - open navigation
	 * PublicAPI.Nav.close() - close navigation
	 * PublicAPI.Nav.toggle() - toggle navigation
	 *
	 * @return {{open: function(), close: function(), toggle: function()}}
	 */
	static get Nav() {
		const openNav = () => HeaderAPI.toggleMenu('open');
		const closeNav = () => HeaderAPI.toggleMenu('close');
		const toggleNav = () => HeaderAPI.toggleMenu();
		
		return {
			open: openNav,
			close: closeNav,
			toggle: toggleNav
		};
	}
}

/** Expose Public API */
export default window.PublicAPI = PublicAPI;
