import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'bar-component',
  templateUrl: 'bar.component.html'
})
export class BarComponent implements OnInit {
  message: string;
  title = 'bar';

  constructor(@Inject('barService') private barService: any) { }

  ngOnInit(): void {
    this.barService.getData().then(result => {
      this.message = result.data.message;
    });
  }
}

