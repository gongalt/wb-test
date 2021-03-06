import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() leftTitle: string = "";
  @Input() title: string = "";
  @Input() showAvatar: boolean = false;
  constructor() {}

  ngOnInit() {}
}
