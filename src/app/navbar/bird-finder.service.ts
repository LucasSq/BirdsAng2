import {Component} from '@angular/core';
import {Injectable} from '@angular/core'
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class BirdFinderService{
	constructor (private http: Http) {}
	
	getBirds() {
		return this.http.get('https://biiirds-d663d.firebaseio.com/birds.json')
		.map(res => res.json());
	}
}