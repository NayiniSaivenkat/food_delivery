import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { BadgeComponent } from "./Badge.component";
@NgModule({
    declarations:[BadgeComponent],
    imports :[CommonModule,IonicModule],
    exports :[BadgeComponent],
    
})
export class BadgeModule {}
