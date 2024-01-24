class Component {
	createElementAttribute(name, value) {
		return {
			name,
			value,
		};
	}

	createElement(tag, className, text, attributes) {
		const newElement = document.createElement(tag);
		if (className) {
			newElement.className = className;
		}
		newElement.textContent = text || '';
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				newElement.setAttribute(attr.name, attr.value);
			}
		}
		return newElement;
	}
}

class Header extends Component {
	render() {
		const headerEl = this.createElement('header');

		const headerTitleEl = this.createElement(
			'h1',
			'sr-only',
			'NFT preview card component'
		);

		headerEl.appendChild(headerTitleEl);

		return headerEl;
	}
}

class Card extends Component {
	render() {
		const cardEl = this.createElement('article', 'card');

		/* card image */
		const cardImageWrapperEl = this.createElement('div', 'card__image');

		const cardImageEl = this.createElement('img', null, null, [
			this.createElementAttribute('src', './images/equilibrium.jpg'),
			this.createElementAttribute('alt', ''),
			this.createElementAttribute('width', 302),
			this.createElementAttribute('height', 302),
		]);

		cardImageWrapperEl.appendChild(cardImageEl);

		/* card content */
		const cardContentEl = this.createElement('div', 'card__content');

		/* card title */
		const cardTitleEl = this.createElement('h2', 'card__title');

		const cardTitleLinkEl = this.createElement(
			'a',
			'btn btn--link',
			'Equilibrium #3429',
			[this.createElementAttribute('href', '#')]
		);

		cardTitleEl.appendChild(cardTitleLinkEl);

		/* card description */
		const cardDescriptionEl = this.createElement(
			'p',
			'card__desc',
			'Our Equilibrium collection promotes balance and calm.'
		);

		/* card statuses */
		const cardStatusListEl = this.createElement('ul', 'card__stats-list');

		const cardStatuses = [
			{ icon: 'icon-ethereum', value: '0.041 ETH' },
			{ icon: 'icon-clock', value: '3 days left' },
		];

		for (const status of cardStatuses) {
			const cardStatusItemEl = this.createElement(
				'li',
				'card__stats-list-item'
			);

			const cardStatusItemIconEl = this.createElement('i', status.icon);
			cardStatusItemIconEl.ariaHidden = 'true';

			const cardStatusItemTextEl = this.createElement(
				'span',
				null,
				status.value
			);

			cardStatusItemEl.appendChild(cardStatusItemIconEl);
			cardStatusItemEl.appendChild(cardStatusItemTextEl);

			cardStatusListEl.appendChild(cardStatusItemEl);
		}

		/* card author */
		const cardAuthorEl = this.createElement('div', 'card__author');

		const cardAuthorImageEl = this.createElement(
			'img',
			'card__author-img',
			null,
			[
				this.createElementAttribute('src', './images/avatar.png'),
				this.createElementAttribute('alt', 'Jules Wyvern'),
				this.createElementAttribute('width', 33),
				this.createElementAttribute('height', 33),
			]
		);

		const cardAuthorDescriptionEl = this.createElement(
			'span',
			'card__author-desc',
			'Creation of '
		);

		const cardAuthorDescriptionLinkEl = this.createElement(
			'a',
			'btn btn--link',
			'Jules Wyvern',
			[this.createElementAttribute('href', '#')]
		);

		cardAuthorDescriptionEl.appendChild(cardAuthorDescriptionLinkEl);

		cardAuthorEl.appendChild(cardAuthorImageEl);
		cardAuthorEl.appendChild(cardAuthorDescriptionEl);

		cardContentEl.appendChild(cardTitleEl);
		cardContentEl.appendChild(cardDescriptionEl);
		cardContentEl.appendChild(cardStatusListEl);
		cardContentEl.appendChild(cardAuthorEl);

		cardEl.appendChild(cardImageWrapperEl);
		cardEl.appendChild(cardContentEl);

		return cardEl;
	}
}

class Main extends Component {
	render() {
		const mainEl = this.createElement('main');

		const mainContainerEl = this.createElement('div', 'container');

		const card = new Card();
		const cardEl = card.render();

		mainContainerEl.appendChild(cardEl);

		mainEl.appendChild(mainContainerEl);

		return mainEl;
	}
}

class Footer extends Component {
	render() {
		const footerEl = this.createElement('footer');

		const footerContainerEl = this.createElement('div', 'container');

		const footerTextEl = this.createElement('p', null, 'Challenge by ');

		const footerTextLinkCreatorEl = this.createElement(
			'a',
			'btn btn--link',
			'Frontend Mentor',
			[
				this.createElementAttribute(
					'href',
					'https://www.frontendmentor.io?ref=challenge'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		const footerTextLinkCoderEl = this.createElement(
			'a',
			'btn btn--link',
			'al3xback',
			[
				this.createElementAttribute(
					'href',
					'https://github.com/al3xback'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		footerTextEl.appendChild(footerTextLinkCreatorEl);
		footerTextEl.append('. Coded by ');
		footerTextEl.appendChild(footerTextLinkCoderEl);

		footerContainerEl.appendChild(footerTextEl);

		footerEl.appendChild(footerContainerEl);

		return footerEl;
	}
}

export { Component, Header, Card, Main, Footer };
