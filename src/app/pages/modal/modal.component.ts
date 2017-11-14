import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }
  public person = {
  	sex: 'male'
  }
  public colors = [
	    {id : 1, name : 'black', checked: false},
	    {id : 2, name : 'red',  checked: false},
	    {id : 3, name : 'blue',  checked: false},
	    {id : 4, name : 'yellow',  checked: false},
	    {id : 5, name : 'green', checked: false},
	    {id : 6, name : 'white',  checked: false}
	] ;
	selected = [];
	updateSelect($event, color, id) {
		let checked = $event.target.checked;
		let selected = []
		this.colors[id].checked = checked;
		this.colors.forEach(value => {
			if (value.checked) {
				selected.push(value.name);
			}
		})
		this.selected = selected;
	}
  ngOnInit() {
  }

}
