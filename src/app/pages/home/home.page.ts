import { Component, OnInit } from "@angular/core";
import subjectsData from "src/constants/subjects.json";
interface Subjects {
  id: Number;
  img: String;
  title: String;
  description: String;
  moments: String;
}
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  subjects: Subjects[] = subjectsData;
  isSubjects: Boolean = true;
  isCoaches: Boolean = false;
  constructor() {}

  ngOnInit() {}

  segmentChanged(event) {
    this.isSubjects = !this.isSubjects;
    this.isCoaches = !this.isCoaches;
  }
}
