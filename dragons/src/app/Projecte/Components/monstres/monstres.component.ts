import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-monstres',
  templateUrl: './monstres.component.html',
  styleUrls: ['./monstres.component.css']
})
export class MonstresComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  monstreList!: Array<any>;
  monstreSeleccionat!: Array<any>;

  ngOnInit(): void {
    this.loadMonsters();
    console.log(this.monstreSeleccionat);
  }

  public loadMonsters() {
    this.apiService.getMonsters().subscribe((data: any) => {
      this.monstreList = data.results;
    }
    );
  }

  public visualitzarImg(data: any){
    this.apiService.getMonsterImg(data).subscribe((data: any) => {
      this.monstreSeleccionat = data;
        }
    );
  }

}
