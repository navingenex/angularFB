import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    item: '',
    description: ''
  }
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.item.item != '' && this.item.description != '') {
      this.itemService.addItem(this.item);
      this.item.item = '';
      this.item.description = '';
    }
  }


}
