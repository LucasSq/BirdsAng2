import { Component, OnInit } from '@angular/core';
import { BirdFinderService } from '../bird-finder.service';
declare var firebase: any;

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css'],
  providers: [BirdFinderService]
})
export class BirdComponent implements OnInit {

  	birds = [];
  	flipBack = false;

	constructor(private birdservice: BirdFinderService) {}

	ngOnInit() {
		/*this.birdservice.getBirds().subscribe(
		(data) => this.birds = data);*/

		this.fbGetData();
	}

	fbGetData() {
		firebase.database().ref('/birds').on('child_added', (snapshot) => {
			this.birds.push({
				data: snapshot.val(),
				flipBack: false}
				)
		})
	}

	flipToBackButt(bird){
		bird.flipBack = true;
	}

	flipToBack(bird){
		if(bird.flipBack){
		return "flipExtra"}
	}
}
