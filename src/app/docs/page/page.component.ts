import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Rx';

import { Doc } from '../doc.model';
import { DocsService } from '../docs.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  private subscription: Subscription;
  private slug: string;

  selectedDoc: Doc;

  constructor(private activatedRoute: ActivatedRoute, private docsService: DocsService) { }

  getDoc(slug: string): Doc {
      return this.docsService.getDoc(slug);
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
          (params: any) => {
            this.slug = params['slug'];
            this.selectedDoc = this.docsService.getDoc(this.slug);
          }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
