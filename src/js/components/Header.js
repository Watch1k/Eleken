import { css, Resp } from '../modules/dev/_helpers';
import { TimelineMax, TweenMax } from 'gsap';

class Header {
	constructor() {
		this.header = document.querySelector('.header');
		this.burger = this.header.querySelector('.header__burger');
		this.burgerLines = [...this.burger.children];
		this.nav = this.header.querySelector('.header__nav');
		this.navLinks = [...this.nav.children];
		
		if (this.header) this.init();
	}
	
	init() {
		this.prepareBurgerAnim();
		this.prepareNavAnim();
		this.bindEvents();
		this.clearResize();
	}
	
	bindEvents() {
		this.burger.addEventListener('click', () => {
			this.toggleMenu();
		});
	}
	
	toggleMenu(state = false) {
		switch (state) {
			case 'open':
				this.burger.classList.add(css.active);
				break;
			case 'close':
				this.burger.classList.remove(css.active);
				break;
			default:
				this.burgerActiveState = css.active;
		}
		this.toggleBurger();
		this.toggleNav();
		
		return HeaderAPI;
	}
	
	set burgerActiveState(className) {
		this.burger.classList.toggle(className);
	}
	
	get burgerActiveState() {
		return this.burger.classList.contains(css.active);
	}
	
	prepareBurgerAnim() {
		this.burgerTl = new TimelineMax({ paused: true });
		
		this.burgerTl
			.to(this.burgerLines[0], 0.5, {
				rotation: 45,
				y: 6
			}, 0)
			.to(this.burgerLines[1], 0.3, {
				alpha: 0,
				width: 0
			}, 0)
			.to(this.burgerLines[2], 0.5, {
				rotation: -45,
				y: -6
			}, 0);
	}
	
	prepareNavAnim() {
		this.navTl = new TimelineMax({ paused: true });
		
		this.navTl
			.set(this.navLinks, {
				autoAlpha: 0,
				y: -20
			})
			.to(this.nav, 0.5, {
				autoAlpha: 1
			}, 0)
			.staggerTo(this.navLinks, 0.5, {
				autoAlpha: 1,
				y: 0
			}, 0.125);
	}
	
	toggleBurger() {
		this.burgerActiveState ? this.burgerTl.play() : this.burgerTl.reverse();
	}
	
	toggleNav() {
		this.burgerActiveState ? this.navTl.timeScale(1).play() : this.navTl.timeScale(2).reverse();
	}
	
	clearResize() {
		window.addEventListener('resize', () => {
			this.burger.classList.remove(css.active);
			TweenMax.set(this.burgerLines, { clearProps: 'all' });
			TweenMax.set(this.nav, { clearProps: 'all' });
			TweenMax.set(this.navLinks, { clearProps: 'all' });
			this.prepareBurgerAnim();
			this.prepareNavAnim();
		});
	}
}

export const HeaderAPI = new Header();
