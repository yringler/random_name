import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import randomWords from "random-words";
import { LoadOnDemandListViewEventData } from "nativescript-ui-listview";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
	items: ObservableArray<string>;

    constructor() {
	}

	ngOnInit(): void {
		this.items = new ObservableArray<string>();
		this.addNames();
	}
	
	addNames() {
		const amount = 20;
		let newWords: string[] = [];

		for (let i = 0; i < amount; i++) {
			let newNameParts:string[] = randomWords(2);
			newWords.push(newNameParts[0] + newNameParts[1]);
		}

		this.items.push(newWords);
	}

	onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
		console.log("called")
		this.addNames();
		args.object.notifyLoadOnDemandFinished();
	}
}
