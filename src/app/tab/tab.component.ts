import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
    selector: 'app-tab',
    template: `{{ tab }}`,
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {

    @Input()
    tab: string;

    @Output()
    clicked: EventEmitter<boolean> = new EventEmitter();

    @HostListener('click')
    tabClicked() {
        this.clicked.emit(true);
    };


}
