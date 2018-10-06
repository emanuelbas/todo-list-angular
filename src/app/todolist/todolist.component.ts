import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { MockItemsService } from '../_services/mock-items.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  items : Item[];
  service : MockItemsService;
  constructor() { 
  	this.service= new MockItemsService();
  	this.updateLocalItems();
  }

  updateLocalItems(){
  	this.service.getItems().then(items => this.items = items);
  }

  ngOnInit() {
  }
  onRemove(anItem){
	this.items = this.items.filter(item => item !== anItem);
  }

}
