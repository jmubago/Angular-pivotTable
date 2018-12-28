import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  AfterViewInit,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

import { defaultsDeep } from 'lodash';

import 'pivottable/dist/pivot.min.js';
import 'pivottable/dist/pivot.min.css';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-pivot-table',
  templateUrl: './pivot-table.component.html',
  styleUrls: ['./pivot-table.component.scss']
})
export class PivotTableComponent implements OnInit, AfterViewInit, OnChanges {

  private data = 
  [{'id': '01', 'make': 'Bavaria', 'Model': '36', 'Length': '36', 'type': 'sailboat'},
    {'id': '02', 'make': 'Bavaria', 'Model': '38', 'Length': '38', 'type': 'sailboat'},
    {'id': '03', 'make': 'Bavaria', 'Model': '31', 'Length': '31', 'type': 'sailboat'},
    {'id': '04', 'make': 'Beneteau', 'Model': 'First 27', 'Length': '27', 'type': 'sailboat'},
    {'id': '05', 'make': 'Beneteau', 'Model': 'Oceanis 31', 'Length': '31', 'type': 'sailboat'},
    {'id': '06', 'make': 'Beneteau', 'Model': 'Flyer 8', 'Length': '27', 'type': 'motor'},
    {'id': '07', 'make': 'Beneteau', 'Model': 'Barracuda', 'Length': '31', 'type': 'motor'},
    {'id': '08', 'make': 'Beneteau', 'Model': 'Antares 36', 'Length': '36', 'type': 'motor'},
    {'id': '09', 'make': 'Dehler', 'Model': '31', 'Length': '31', 'type': 'sailboat'},
    {'id': '10', 'make': 'Dehler', 'Model': '34', 'Length': '34', 'type': 'sailboat'}];

  @Input() config: any;
  @Output() newConfig = new EventEmitter<any>();

  private el: ElementRef;
  private container: any;
  private inst: any;
  private targetElement: any;
  private renderers: any;
  private derivers: any;
  private defaultConfig: any;
  private pivotConfig: any;

  constructor(@Inject(ElementRef) el: ElementRef) {
    this.el = el;
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (!this.el || !this.el.nativeElement || !this.el.nativeElement.children) {
      console.log('cant build without element');
      return;
    }

    this.container = this.el.nativeElement;
    this.inst = jQuery(this.container);
    this.targetElement = this.inst.find('.pivot-wrapper');
    if (!this.targetElement) {
      console.log('cant find the pivot element');
      return;
    }

    while (this.targetElement.firstChild) {
      this.targetElement.removeChild(this.targetElement.firstChild);
    }

    this.renderers = jQuery.extend(jQuery.pivotUtilities.renderers, jQuery.pivotUtilities.gchart_renderers);

    this.derivers = $.pivotUtilities.derivers;

    this.defaultConfig = {
      renderers: this.renderers,
      rows: [],
      cols: [''],
      rendererName: '',
      rendererOptions: {
        plotlyConfig: {
          showlegend: false
        }
      },
      onRefresh: () => {
        this.onPivotRefresh();
      }
    };
    this.draw();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.draw();
    }

    if (changes['config'] && this.config !== undefined) {
      this.config.onRefresh = () => this.onPivotRefresh();
      this.draw();
    }
  }

  /**
   * Private Methods
   */

   /**
    * Method to draw the pivot table with provided data and configuration
    */
  private draw(): void {
    if (this.targetElement) {
      this.pivotConfig = defaultsDeep(this.config, this.defaultConfig);
      this.targetElement.pivotUI(this.data, this.pivotConfig, true, 'es');
    }
  }

  /**
   * Method for capturing pivot data configuration changes and emit them to the parent component
   */
  private onPivotRefresh(): void {
    const changeConfig = this.targetElement.data('pivotUIOptions');
    this.newConfig.emit(changeConfig);
  }
}
