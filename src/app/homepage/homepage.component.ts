import { Component } from "@angular/core";
import { LeftnavComponent } from "./leftnav/leftnav.component";

@Component({
	selector: "app-homepage",
	standalone: true,
	imports: [LeftnavComponent],
	templateUrl: "./homepage.component.html",
	styleUrl: "./homepage.component.css",
	// host: { style: "height:100%;display:flex" },
})
export class HomepageComponent {}
