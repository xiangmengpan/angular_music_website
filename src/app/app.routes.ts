import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { AboutpageComponent } from "./aboutpage/aboutpage.component";
import { MyprofilepageComponent } from "./myprofilepage/myprofilepage.component";

export const routes: Routes = [
	{ path: "", component: HomepageComponent },
	{ path: "home", redirectTo: "" },
	{ path: "about", component: AboutpageComponent },
	{ path: "profile", component: MyprofilepageComponent },
];
