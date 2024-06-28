import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./text/en.json'));
register('th', () => import('./text/th.json'));

export const i18nInit = () => {
	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
};
