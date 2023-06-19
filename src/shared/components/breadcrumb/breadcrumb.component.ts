import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs';
import { IBreadCrumb } from 'src/shared/types/breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadCrumb[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => {
          return event instanceof NavigationEnd;
        })
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      });
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    // ... implementation of buildBreadCrumb
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    const lastRoutePart = path?.split("/").pop();
    const isDynamicRoute = lastRoutePart?.startsWith(":");
    if (isDynamicRoute && route.snapshot) {
      const paramName = lastRoutePart?.split(":")[1];
      if (lastRoutePart && paramName)
      {
        path = path?.replace(lastRoutePart, route.snapshot.params[paramName]); //?
        label = label + " " + route.snapshot.params[paramName];
      }
    }
    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
        //If we are not on our current path yet,
        //there will be more children to look after, to build our breadcumb
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
