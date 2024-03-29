import assert from 'assert';
import jsdom from 'jsdom';

import { Component, Header, Card, Main, Footer } from '../js/util.js';

const { JSDOM } = jsdom;

describe('DOM', () => {
	beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	it("should be able to create element via 'Component' class method", () => {
		const component = new Component();
		const paragraphEl = component.createElement(
			'p',
			'desc',
			'Some dummies description'
		);
		document.body.appendChild(paragraphEl);

		const isParagraphElExist = !!document.querySelector('.desc');
		assert.ok(isParagraphElExist);
	});

	it("should be able to return element attribute data via 'Component' class method", () => {
		const component = new Component();
		const srcData = component.createElementAttribute(
			'src',
			'./images/avatar.jpg'
		);

		const expectedSrcData = {
			name: 'src',
			value: './images/avatar.jpg',
		};

		assert.deepEqual(srcData, expectedSrcData);
	});

	it("should be able to create header element via 'Header' class", () => {
		const header = new Header();
		const headerEl = header.render();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	it("should be able to create card element via 'Card' class", () => {
		const card = new Card();
		const cardEl = card.render();
		document.body.appendChild(cardEl);

		const isCardElExist = !!document.querySelector('.card');
		assert.ok(isCardElExist);
	});

	it("should be able to create main element via 'Main' class", () => {
		const main = new Main();
		const mainEl = main.render();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	it("should be able to create footer element via 'Footer' class", () => {
		const footer = new Footer();
		const footerEl = footer.render();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
