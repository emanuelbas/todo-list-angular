import { Injectable } from '@angular/core';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
abstract class AbstractItemsService {
	constructor() { }
	abstract getItems(): Promise<Item[]>;
}
export class MockItemsService extends AbstractItemsService {
	items:Item[];
	constructor() { 
		super();
		this.items = [new Item("Buy pendrives")];
	}
	getItems():Promise<Item[]> {
		return new Promise((resolve) => {resolve(this.items)})
	};
}
