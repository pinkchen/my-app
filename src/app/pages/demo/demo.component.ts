import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
  public hobbyList: Array<string> = ['篮球', '羽毛球', '足球'];
	public sex = ['男', '女'];
	public selectHobby = [];
	public singleModel: string = '1';
  ngOnInit() {

  }
  selectCheckbox(checked: boolean, value: string) {
		var index = this.selectHobby.indexOf(value);
		if (checked) {
			this.selectHobby.push(value);
		} else {
			this.selectHobby = this.selectHobby.filter(ele => ele !== value);
		}
		console.log(this.selectHobby);
	}
}
