import { Component, OnInit } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public BaiDangList: any=[];
  public BaiDangN: any=[];
  public BaiDangH: any=[];

  constructor(private fb: FormBuilder,private service:ApiService) {
  }

  ngOnInit(): void {
    this.BaiDang();
    this.BaiDangNew();
    this.BaiDangHot();
  }
  BaiDang(){
    this.service.get("/api/BaiDang/get-all").subscribe(data=>{
      this.BaiDangList = data;
      console.log(this.BaiDangList);
    })
  }
  BaiDangNew(){
    this.service.get("/api/BaiDang/get-new").subscribe(data=>{
      this.BaiDangN = data;
      console.log(this.BaiDangN);
    })
  }
  BaiDangHot(){
    this.service.get("/api/BaiDang/get-hot").subscribe(data=>{
      this.BaiDangH = data;
      console.log(this.BaiDangH);
    })
  }

}
