import * as angular from "angular";

import { Hello } from "./helloComponent";


const app: ng.IModule = angular.module('tsDemo', ['ng']);

app.component('hello', new Hello());
