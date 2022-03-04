import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false
  secretVerb = 'Show'
  log = []
  onClickSecret() {
    this.changeSecretShowStaus()
    if (this.showSecret === true) {
      this.secretVerb = 'Hide'
    }  
    
  }

  changeSecretShowStaus() {
    if (this.showSecret) {
      this.log.push(this.log.length + 1)
    }
    
    this.showSecret = !this.showSecret
    if (this.showSecret === false) {
      this.secretVerb = 'Show'
    }
  }
}
