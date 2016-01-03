import { SetModule, Component, Inject, bootstrap } from 'angular2now';

SetModule('app', []);

@Component({
    selector: 'app',
    template: '<h1>angular2-now Application</h1>',
    services: ['$http']
})
//@Inject('$http')
class App {
    constructor($http) {
        console.log('@ app: $http: ', $http);
    }
}

bootstrap(App);
