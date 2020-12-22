import { Component, OnInit } from "@angular/core";
import { SimpleService } from "src/app/services/simple.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private simpleService: SimpleService) {}

  ngOnInit() {
    this.simpleService.getUsers().subscribe((res) => {
      console.log("res", res);
    });
  }

  segmentChanged(event) {
    console.log("event", event);
  }
}
