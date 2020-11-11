
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'tintuc/:id',
        component: DanhsachComponent,
      },
      {
        path: 'index',
        component: MenuComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    DanhsachComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule.forChild(mainRoutes)],
})
export class MainModule {}

