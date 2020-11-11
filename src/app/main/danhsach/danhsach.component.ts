import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-danhsach',
  templateUrl: './danhsach.component.html',
  styleUrls: ['./danhsach.component.css']
})
export class DanhsachComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }
  TinTucById: any;
  ngOnInit(): void {
    this.GetTinTucbyId();
  }
  GetTinTucbyId() {
    this.TinTucById={};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/BaiDang/get-by-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.TinTucById = data;
      });
    });
  }

}
