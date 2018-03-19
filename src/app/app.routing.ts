import { StudentDataComponent } from "./student/student-data.component";
import { StudentFormComponent } from "./student/student-form.component";
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";

const ROUTES =[
    {path:'' ,component:HomeComponent},
    {path:'student-form' ,component:StudentFormComponent},
    {path:'student-data' ,component:StudentDataComponent},
    { path:'**', redirectTo:''}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

