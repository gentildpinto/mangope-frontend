import {
	Directive,
	Renderer2,
	ElementRef,
	HostListener,
} from '@angular/core';

@Directive({
  	selector: '.land'
})
export class LandTooltipDirective {

	private _tooltip: any;

	constructor(
		private _renderer: Renderer2,
		private _element: ElementRef
	) {}

	ngAfterViewInit(): void {
		this._tooltip = document.getElementById('tooltip') as HTMLElement;
	}

	@HostListener('mouseover', ['$event'])
	hover() {
		let landName = this._renderer.createText(
			this._element.nativeElement.getAttribute('title')
		);
		this._renderer.addClass(this._tooltip, 'active');
		this._renderer.appendChild(this._tooltip, landName);
	}

	@HostListener('mouseout', ['$event'])
	out() {
		this._tooltip.innerHTML = '';
		this._renderer.removeClass(this._tooltip, 'active');
	}

	@HostListener('mousemove', ['$event'])
	move(event: any) {
		this._tooltip.style.left = event.pageX + 'px';
		this._tooltip.style.top = (event.pageY - 45) + 'px';
	}
}
