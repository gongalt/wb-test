import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChatPage } from "./chat.page";

import { ChatPageRoutingModule } from "./chat-routing.module";
import { ComponentsModule } from "src/app/components/components.module";
import { AutosizeModule } from "ngx-autosize";
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChatPageRoutingModule,
    ComponentsModule,
    AutosizeModule,
  ],
  declarations: [ChatPage],
})
export class ChatPageModule {}
