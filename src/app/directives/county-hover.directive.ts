import {
	Directive,
	Renderer2,
	HostListener,
} from '@angular/core';

@Directive({
  selector: '.land, .county-list-item'
})
export class CountyHoverDirective {

	constructor(
		private _renderer: Renderer2
	) {}

	@HostListener('mouseover', ['$event'])
	onMouseOver(event: any) {
		let {path, li} = this.verifyElement(event.target);
		this._renderer.addClass(path, 'on-hover');
		this._renderer.addClass(li, 'on-hover');
	}

	@HostListener('mouseout', ['$event'])
	onMouseOut(event: any) {
		let {path, li} = this.verifyElement(event.target);
		this._renderer.removeClass(path, 'on-hover');
		this._renderer.removeClass(li, 'on-hover');
	}

	verifyElement(element: HTMLElement) {
		switch (element.tagName) {
			case 'LI':
				let elPath = document.querySelector("[id='" + element.getAttribute('data-county') + "']");
				return { path: elPath, li: element};
			case 'path':
				let elLi = document.querySelector("[data-county='" + element.getAttribute('id') + "']");
				return { path: element, li: elLi};
			default:
				return {};
		}
	}
}
