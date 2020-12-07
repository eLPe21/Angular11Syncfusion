import { enableRipple } from '@syncfusion/ej2-base';
import { Component } from '@angular/core';

// enable ripple effects
enableRipple(true);

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Syncfusion Angular UI Button!
  </h1>

  <button ejs-button>Button</button>
  `
})
export class AppComponent {

}
