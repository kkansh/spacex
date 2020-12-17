import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonService } from '../hero.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  @Output() cardData: EventEmitter<any> = new EventEmitter();
  constructor(private commonService: CommonService) { }

  ngOnInit() { 
    this.getFilters(); 
  }

  getFilters(paraName?, val?): void {
    this.commonService.getCards(paraName, val).subscribe((data) => {
        this.cardData.emit(data);
    });
  }

}
