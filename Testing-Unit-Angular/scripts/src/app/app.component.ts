import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    title = "Hello angular!"

    add(a, b) {
        return a + b
    }

    multiply(a, b) {
        return a * b
    }
}