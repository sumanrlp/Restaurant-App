import { Component, OnInit, ViewChild, } from '@angular/core';
import { AuthServicesService } from '../services/auth-services.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatDialog } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ViewFeedbackComponent } from '../view-feedback/view-feedback.component';
import { FilterDataComponent } from '../filter-data/filter-data.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: AuthServicesService, private dialogue: MatDialog) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatPaginator;

  users: any
  dataSource: any
  temp_datasource: any = new MatTableDataSource();
  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (res: any) => {
        this.users = res
        console.log(this.users)
        this.dataSource = new MatTableDataSource(this.users)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource)
        sessionStorage.removeItem('filterActive')
        sessionStorage.removeItem('filterDisable')
        sessionStorage.removeItem('filterSatff')
        sessionStorage.removeItem('filterUser')
        sessionStorage.removeItem('filterGiven')
        sessionStorage.removeItem('filterNotGiven')
      },
      error: err => {
        console.log(err)
        alert('Unexpected error occured')
      }
    })
  }

  displayedColumns: string[] = ['name', 'userName', 'email', 'role', 'status', 'action', 'feedback', 'lastLoggedIn'];

  update(code: any) {
    const dialog = this.dialogue.open(PopUpComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '50%',
      data: {
        userId: code
      }

    });
    dialog.afterClosed().subscribe(res => {
      this.ngOnInit();
    })
  }

  viewFeedback(code: any) {
    const dialog = this.dialogue.open(ViewFeedbackComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '50%',
      data: {
        userId: code
      }

    })
    dialog.afterClosed().subscribe(res => {
      this.ngOnInit()
    })
  }

  keyUp(data: any) {
    console.log(data)
    this.dataSource.filter = data;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  filter() {
    const dialog = this.dialogue.open(FilterDataComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '30%',
    })
    dialog.afterClosed().subscribe((res: any) => {
      if (res) {
        this.dataSource = new MatTableDataSource(this.users)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      let data = res.split('_')
      if (data == 'all') {
        this.dataSource = new MatTableDataSource(this.users)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        for (let i = 0; i < data.length; i++) {
          console.log(this.dataSource)
          let userData = { ...this.dataSource.filteredData }
          let result = Object.keys(userData).map(function (key) {
            return userData[key];
          });
          console.log(result)
          this.temp_datasource = new MatTableDataSource(result)
          this.temp_datasource.paginator = this.paginator;
          this.temp_datasource.sort = this.sort;
          this.temp_datasource.filter = data[i]
          this.dataSource = _.clone(this.temp_datasource)
          console.log(this.temp_datasource, this.dataSource)
        }
      }
    })
  }


}