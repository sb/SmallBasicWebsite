import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDocs'
})
export class SearchDocsPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText) ||
        (item.properties && item.properties.filter(prop => prop.name.toLowerCase().includes(searchText)).length > 0) ||
        (item.operations && item.operations.filter(op => op.name.toLowerCase().includes(searchText)).length > 0) ||
        (item.events && item.events.filter(ev => ev.name.toLowerCase().includes(searchText)).length > 0) ||
        (item.keywords && item.keywords.filter(kw => kw.name.toLowerCase().includes(searchText)).length > 0);
    });
  }
}
