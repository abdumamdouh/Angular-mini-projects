import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // you can add direct html/template in a property call 'template' or point to a file using templateUrl
  templateUrl: './app.component.html',
  // you can add direct css/style in a property call 'template' or point to a file using styleUrl
  styleUrls: ['./app.component.css']
})

//to add ngOnInit life cycle hook you need to import OnInit class then make you component/class implements the OnInit
export class AppComponent implements OnInit {
  // class property, think about it like state in React
  // you can access the class properties and methods in the template using string interpolation
  title = 'angular-sandbox';

  // the constructor is used to inject dependency into the component
  constructor() {}

  // think about it like componentDidMount
  ngOnInit() {}

  /*
  The constructor() should only be used to initialize class members but shouldn't do actual "work". So we should use constructor() to setup Dependency Injection, Initialization of class fields etc. ngOnInit() is a better place to write "actual work code" that we need to execute as soon as the class is instantiated.
  */



}
