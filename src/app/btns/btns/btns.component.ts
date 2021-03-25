import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-btns',
  templateUrl: './btns.component.html',
  styleUrls: ['./btns.component.scss']
})
export class BtnsComponent implements OnInit {

  array = [];
  creating: boolean = false;
  name: string | number = null;
  editing: number = null;

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
  }

  get() {
    this.array = this.service.get();
  }

  edit(item) {
    this.creating = true;
    this.name = item;

    const index = this.array.findIndex(el => el === item);
    if (index > -1) {
      this.editing = index;
    }
  }

  add() {
    this.creating = true;
  }

  done() {
    if (this.editing && this.editing > -1) {
      this.array[this.editing] = this.name;
    } else {
      this.array.push(this.name);
    }

    this.creating = false;
    this.name = null;
    this.editing = null;

    setTimeout(() => {
      this.service.push(this.array);
    }, 1000);
  }

  delete(item) {
    const ind = this.array.findIndex(n => n === item);
    if (ind !== -1) {
      this.array.splice(ind, 1);
    }
  }

}
