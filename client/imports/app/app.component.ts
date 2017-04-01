import { Component, OnInit } from '@angular/core';

import template from './app.component.html';
import style from './app.component.scss';

declare var jQuery: any;

@Component({
    selector: 'app',
    template,
    styles: [style]
})
export class AppComponent implements OnInit {

    ngOnInit() {
        this.initializeDocument();
        this.initializeEachPart();
    }

    initializeDocument() {
        jQuery(document).ready(function () {
            jQuery('.target').pushpin({
                top: 0,
                bottom: 1000,
                offset: 0
            });
        });
    }

    initializeEachPart() {
        jQuery('.pushpin-demo-nav').each(function () {
            var $this = $(this);
            var $target = $('#' + $(this).attr('data-target'));
            $this.pushpin({
                top: $target.offset().top,
                bottom: $target.offset().top + $target.outerHeight() - $this.height()
            });
        });
    }

}