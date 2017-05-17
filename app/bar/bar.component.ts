import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'bar-component',
  templateUrl: 'bar.component.html'
})
export class BarComponent implements OnInit {
  message: string;
  title = 'bar';

  constructor(@Inject('barService') private barService: any, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.barService.getData().then(result => {
      this.message = result.data.message;
      this.changeDetector.detectChanges();
    });
  }
}

