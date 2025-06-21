import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';
import { ServicesPage } from './pages/services/services';


export const routes: Routes = [
    {
        path:'',
        component:HomePage,
        title:'Pagina de Inicio'
    },
    {
        path:'about',
        component:AboutPage
    },
    {
        path:'contact',
        component:ContactPage
    },
    {
        path:'services',
        component:ServicesPage
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
