import { Component, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";

@Component({
  selector: "app-chat",
  templateUrl: "chat.page.html",
  styleUrls: ["chat.page.scss"],
})
export class ChatPage {
  messages = [
    {
      user: "Adrian",
      createdAt: 1608600562127,
      msg: "This is a test message olah",
    },

    {
      user: "Precious",
      createdAt: 1608600590118,
      msg: "This is a test message from me",
    },
    {
      user: "Precious",
      createdAt: 1608600596125,
      msg: "This is a test message again from precious",
    },
  ];

  currentUser = "Adrian";
  newMessage = "";
  @ViewChild(IonContent) content: IonContent;
  constructor() {}

  sendMessage() {
    if (this.newMessage !== "") {
      this.messages.push({
        user: "Adrian",
        createdAt: new Date().getTime(),
        msg: this.newMessage,
      });
    }

    this.newMessage = "";
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
}
