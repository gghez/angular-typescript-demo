class HelloController {
  public message: string;

  constructor() {
    this.message = 'Hello World !';
  }
}

export class Hello implements ng.IComponentOptions {
  public template: string = "<h1>{{$ctrl.message}}</h1>";
  public controller: any;
  public controllerAs: string = "$ctrl";

  constructor() {
    this.controller = HelloController;
  }
}
