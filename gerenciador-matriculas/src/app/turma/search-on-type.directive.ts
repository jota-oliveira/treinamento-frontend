import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSearchOnType]'
})
export class SearchOnTypeDirective {

  @Input() searchFunction: (texto: string) => void;
  // // private timeout: any;
  // private debounceTime = 300;

  constructor() {}

  @HostListener('keyup', ['$event']) onKeyup(e: any) {

    if (!e.target.value) {
      return;
    }

    this.searchFunction(e.target.value);
  }

}
