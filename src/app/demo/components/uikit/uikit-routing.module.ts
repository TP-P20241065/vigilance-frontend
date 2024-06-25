import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'button', data: { breadcrumb: 'Button' }, loadChildren: () => import('./button/buttondemo.module').then(m => m.ButtonDemoModule) },
        { path: 'charts', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./charts/chartsdemo.module').then(m => m.ChartsDemoModule) },
        { path: 'file', data: { breadcrumb: 'File' }, loadChildren: () => import('./file/filedemo.module').then(m => m.FileDemoModule) },
        { path: 'unit-management', data: { breadcrumb: 'Float Label' }, loadChildren: () => import('./unit-management/floatlabeldemo.module').then(m => m.FloatlabelDemoModule) },
        { path: 'camera-management', data: { breadcrumb: 'Form Layout' }, loadChildren: () => import('./camera-management/formlayoutdemo.module').then(m => m.FormLayoutDemoModule) },
        { path: 'user-management', data: { breadcrumb: 'Input' }, loadChildren: () => import('./user-management/inputdemo.module').then(m => m.InputDemoModule) },
        { path: 'invalidstate', data: { breadcrumb: 'Invalid State' }, loadChildren: () => import('./incident-report/invalidstatedemo.module').then(m => m.InvalidStateDemoModule) },
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./list/listdemo.module').then(m => m.ListDemoModule) },
        { path: 'media', data: { breadcrumb: 'Media' }, loadChildren: () => import('./media/mediademo.module').then(m => m.MediaDemoModule) },
        { path: 'message', data: { breadcrumb: 'Message' }, loadChildren: () => import('./messages/messagesdemo.module').then(m => m.MessagesDemoModule) },
        { path: 'misc', data: { breadcrumb: 'Misc' }, loadChildren: () => import('./misc/miscdemo.module').then(m => m.MiscDemoModule) },
        { path: 'overlay', data: { breadcrumb: 'Overlay' }, loadChildren: () => import('./overlays/overlaysdemo.module').then(m => m.OverlaysDemoModule) },
        { path: 'panel', data: { breadcrumb: 'Panel' }, loadChildren: () => import('./panels/panelsdemo.module').then(m => m.PanelsDemoModule) },
        //{ path: 'reports', data: { breadcrumb: 'Reporte de incidencias' }, loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
        { path: 'tree', data: { breadcrumb: 'Tree' }, loadChildren: () => import('./tree/treedemo.module').then(m => m.TreeDemoModule) },
        { path: 'menu', data: { breadcrumb: 'Menu' }, loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }
