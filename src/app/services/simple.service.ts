import { Injectable } from "@angular/core";
import { ErrorService } from "./error.service";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SimpleService {
  httpOptions: any;
  constructor(public http: HttpClient, private errorService: ErrorService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  public getUsers() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .pipe(
        map((res) => {
          console.log("res", res);
          return res;
        })
      )
      .pipe(catchError((error) => this.errorService.handleError(error)));
  }
}
