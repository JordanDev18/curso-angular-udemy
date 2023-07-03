import { Component} from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { BreadcrumbsComponent } from 'src/app/shared/breadcrumbs/breadcrumbs.component';
@Component({
  selector: 'app-breadcrumbs2',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class Breadcrumb1sComponent {

  label: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) {
    this.getDataRoute().subscribe(data => {
      if (data.hasOwnProperty('titulo')) {
        this.label = data['titulo'];
        this.title.setTitle(this.label);

        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.label
        };

        this.meta.updateTag(metaTag);
      }
    });
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter((evento: any) => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

  ngOnInit() {
  }

  
}