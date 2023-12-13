/* Include this after mmob-snippet.min.js
 * Example usage:
 *    initMarketplace('#htmlContainer', cp_id, deployment_id, 'https://marketplace.some_client_domain.com', user, 'en');
 */

(function () {
	const CP_ID = {
		MFL: 'cp_0JAJmydbI1kUGHPP4PKyr',
		EMERCE: 'cp_9AidXA6tIpz7RR4thMrrJ',
		METROTV: 'cp_m09e0BzBgRHxOyosptpEs',
	}	
	
	const LANGUAGE = {
		[CP_ID.MFL]: {
			'en': 'en_GB',
			'ms': 'ms_MY',
			'default': 'ms_MY',
		},
		[CP_ID.EMERCE]: {
			'en': 'en_GB',
			'ms': 'ms_MY',
			'default': 'en_GB',
		},
		[CP_ID.METROTV]: {
			'en': 'en_GB',
			'id': 'id_ID',
			'default': 'id_ID',
		},
	}
	
	function getLanguage(cp_id, lang) {
		const l = LANGUAGE[cp_id]?.[lang];
		
		if (l) {
			return l;
		}
		else {
			return LANGUAGE[cp_id]?.default || 'en_GB';
		}
	}
	
	function initMarketplace (html_location, cp_id, cp_deployment_id, marketplace_url, customer_info, language) {
		mmob.init({
			customerInfo: customer_info,
			cp_id,
			cp_deployment_id,
			location: html_location,
			marketplace_url,
			locale: getLanguage(cp_id, language)
		});
	}
	
	window.initMarketplace = initMarketplace;
})();