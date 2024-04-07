import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
	title: 'Gabriel Samuel',
	description: '',
	source: '',
	baseUrl: '',
	initialFeeds: [
		{ label: 'Notes', url: 'https://raw.githubusercontent.com/gabesamu/rssfeeds/main/blog.atom' }
	],
	additionalFeeds: [
		{ label: 'Notes', url: 'https://raw.githubusercontent.com/gabesamu/rssfeeds/main/blog.atom' },
		// {
		// 	label: 'Dev.to',
		// 	url: 'https://raw.githubusercontent.com/gabesamu/rssfeeds/main/dev-to.atom'
		// },
		{
			label: 'GitHub',
			url: 'https://raw.githubusercontent.com/gabesamu/rssfeeds/main/github.atom'
		},
		{
			label: 'StackOverflow',
			url: 'https://raw.githubusercontent.com/gabesamu/rssfeeds/main/stackoverflow.atom'
		},
		// {
		// 	label: 'Reddit',
		// 	url: 'https://raw.githubusercontent.com/gabesamu/rssfeeds/main/reddit.atom'
		// },
	],

	routeLinks: [
		{ label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
		{
			label: 'Blog',
			route: '/blog',
			color: 'var(--accent-2, #b45eff)',
			description: 'Published articles, notes, tutorials and updates'
		},
		{
			label: 'Projects',
			route: '/projects',
			color: 'var(--accent-3, #01c0f0)',
			description: 'Personal projects and open source work'
		},
		{
			label: 'Contact',
			route: '/contact',
			color: 'var(--accent-1, #ff0099)',
			description: 'Social profile links and contact form'
		},
		// {
		// 	label: 'About',
		// 	route: '/about',
		// 	color: 'var(--accent-4, #1de691)',
		// 	description: 'Bio and professional experience'
		// }
	],
	footerInfo: {
		author: 'Gabriel Samuel',
		authorSite: 'https://github.com/gabesamu',
		license: 'MIT',
		licenseLink: '',
		copyright: true
	},
	githubUser: 'gabesamu',
	defaultLanguage: 'en',
	defaultTheme: 'dark',
	colorSchemes: {
		dark: {
			background: '#101010',
			foreground: '#fafafa',
			'dimmed-text': '#808080',
			'card-background': '#1b1b1b',
			'card-border': '1px solid #2a2a2a',
			'code-background': '#333',
			accent: '#01c0f0',
			'accent-1': '#ff0099',
			'accent-2': '#b45eff',
			'accent-3': '#01c0f0',
			'accent-4': '#1de691',
			'home-accent-background': '#2a3367',
			'home-accent-foreground': 'var(--foreground)'
		},
		light: {
			background: '#ededed',
			foreground: '#2a3367',
			'card-background': '#F8F8FF',
			'card-border': '1px solid #0000001a',
			'home-accent-background': '#2a3367',
			'home-accent-foreground': 'var(--foreground)'
		},
		callisto: {
			background: '#0a192f',
			foreground: '#dcdcdc',
			'dimmed-text': '#8892b0',
			'card-background': '#0b1021',
			'card-border': '1px solid #ffffff1a',
			'accent-1': '#00ccb4',
			'accent-2': '#00ccb4',
			'accent-3': '#00ccb4',
			'accent-4': '#00ccb4',
			'voronoi-background': '#0a192f',

			'home-accent-background': '#00ccb4',
			'home-tile-background': '#0B1021',
			'voronoi-lines': '#4ee8d61a',

			'voronoi-c1': '#141B33',
			'voronoi-c2': '#131A31',
			'voronoi-c3': '#12192F',
			'voronoi-c4': '#11182D',
			'voronoi-c5': '#10172B',
			'voronoi-c6': '#0F1629',
			'voronoi-c7': '#0E1527',
			'voronoi-c8': '#0D1425',
			'voronoi-c9': '#0C1323',
			'voronoi-c10': '#0B1221',

			'voronoi-r0': '#141b33',
			'voronoi-r1': '#141b33',
			'voronoi-r2': '#12182e',
			'voronoi-r3': '#101629',
			'voronoi-r4': '#0e1324',
			'voronoi-r5': '#0c101f',
			'voronoi-r6': '#0c101f',
			'voronoi-r7': '#0a0e1a',
			'voronoi-r8': '#0a0e1a',
			'voronoi-r9': '#080b14',
			'voronoi-r10': '#06080f'
		}
	},
	workExperience: [
		// {
		// 	company: 'AND.Digital',
		// 	companyUrl: 'https://and.digital/',
		// 	companyLogo: 'https://and.digital/favicon.ico',
		// 	jobTitle: 'Principle Engineer',
		// 	datesWorked: 'August 2022 - Present',
		// 	projectType: 'Clients',
		// 	projects: [
		// 		{ name: 'Frasers Group', logo: 'https://i.ibb.co/sQcvxmG/Frasers.png', description: '' },
		// 		{ name: 'Lloyds Bank', logo: 'https://i.ibb.co/GCSDPCq/Lloyds-bank.jpg', description: '' }
		// 	],
		// 	technologies: ['TypeScript', 'React Native', 'Azure']
		// }
	],
	projectComplimentaryData: [
		// {
		// 	name: 'AdGuardian-Term',
		// 	thumbnail: 'https://i.ibb.co/wgJDXs2/adguardian-banner-2.png'
		// },
	],
	postComplimentaryData: [
		// {
		// 	postRef: '50 ways to bring in extra cash as a developer',
		// 	thumbnail: 'https://i.ibb.co/DDQBHvL/developer-side-hustles.png'
		// },

		{ postRef: '', thumbnail: '' }
	],
	contact: {
		name: 'Gabriel Samuel',
		email: 'gabemsamuel@gmail.com',
		website: 'https://gabesamuel.com',
		socials: {
			// Twitter: 'Lissy_Sykes',
			GitHub: 'gabesamu',
			'Dev.to': 'gabesamu',
			LinkedIn: 'in/gabesamu',
			StackOverflow: '23629660/gabriel',
            CodersRank: 'gabesamu',
		},
		socialButtonLimit: 6,
		mailerConfig: {
			service_id: 'contact_service',
			template_id: 'contact_form',
			user_id: 'Ie50J75bhR6EYsEt9',
			template_params: {}
		},
    },
	about: {
		intro: '',
		bio: [
			"",

			``,

			``,

			``,

			``,

			``
		],
		picture: ''
	},
	techStack: {
		backend: [
			{
				language: 'Rust',
				projects: ['AdGuardian-Term']
			},
			{
				language: 'Go',
				projects: ['who-dat', 'go-apod', 'OLD_AdGuardian-Term']
			},
			{
				language: 'Node',
				projects: ['twitter-sentiment-visualisation', 'quick-example-of-testing-in-nodejs']
			},
			{
				language: 'Python',
				projects: [
					'portainer-templates',
					'gh-trending-no-cors',
					'tfl-lift-availability-dash',
					'pax'
				]
			},
			{
				language: 'Java',
				projects: ['Minesweper', 'AlternativeVoteSystem', 'TuneSender', 'TreasureHunt']
			},
			{
				language: 'PHP',
				projects: ['revision-quizzes', 'intern-magnet', 'usermonkey']
			}
		],
		frontend: [
			{
				language: 'Vue',
				projects: [
					'dashy',
					'all-the-countries',
					'alicia-sykes-website',
					'tfl-lift-availability-dash'
				]
			},
			{
				language: 'Svelte',
				projects: ['my-website', 'cheat-code']
			},
			{
				language: 'React',
				projects: ['web-check']
			},
			{
				language: 'Solid',
				projects: ['cso']
			},
			{
				language: 'Angular',
				projects: ['happy-app', 'realtime-speech-analytics']
			},
			{
				language: 'Astro',
				projects: ['git-into-open-source']
			},
			{
				language: 'D3',
				projects: ['twitter-sentiment-visualisation', 'happy-app', 'realtime-speech-analytics']
			},
			{
				language: 'Alpine',
				projects: ['who-dat']
			},
			{
				language: 'CoffeeScript',
				projects: ['sentiment-analysis']
			},
			{
				language: 'HTML',
				projects: [
					'repo-badge-maker ',
					'bullet-convertor',
					'md-toc-generator',
					'email-extractor',
					'cyber-defence-presentation',
					'web-dev-school',
					'md-cv-maker'
				]
			}
		],
		mobile: [
			{
				language: 'Swift',
				projects: ['hasami-shogi', 'Spotter']
			},
			{
				language: 'Kotlin',
				projects: ['anti-theft-charge']
			},
			{
				language: 'Flutter',
				projects: ['nfu']
			},
			{
				language: 'Android',
				projects: [
					'Minesweper',
					'anti-theft-charge',
					'TuneSender',
					'TreasureHunt',
					'got-home-safe',
					'Study-Time'
				]
			}
			// {
			//   language: 'React Native',
			//   projects: [''],
			// },
		],
		other: [
			{
				language: 'Bash',
				projects: ['minimal-terminal-prompt']
			},
			{
				language: 'Docker',
				projects: ['docker-tcpdump', 'dashy']
			},
			{
				language: 'Config',
				projects: ['dotfiles', 'espanso-config', 'conky-system-stats-widget', 'Brewfile']
			},
			{
				language: 'Markdown',
				projects: ['personal-security-checklist', 'awesome-privacy']
			}
		]
	},
	techStackExtras: {
		devOps: ['Ansible', 'Kubernetes', 'Prometheus', 'GitHubActions', 'Grafana'],
		cloud: ['Netlify', 'Vercel', 'CloudFlare', 'Azure', 'AWS', 'GCP'],
		databases: ['PostgreSQL', 'SQLite', 'Redis', 'MySQL', 'MongoDB'],
		testing: ['Jest', 'Puppeteer', 'Enzyme', 'Cypress'],
		security: ['Nmap', 'OWASPZAP', 'BurpSuite', 'Wireshark']
	},
	// plausible: {
	// 	scriptSrc: 'https://no-track.as93.net/js/script.js',
	// 	domain: 'aliciasykes.com'
	// }
};

export default config;
