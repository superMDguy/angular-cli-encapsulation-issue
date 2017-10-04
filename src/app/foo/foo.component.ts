import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-foo",
  templateUrl: "./foo.component.html",
  styleUrls: ["./foo.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class FooComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
