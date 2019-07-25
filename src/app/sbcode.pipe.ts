import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sbcode'
})
export class SbcodePipe implements PipeTransform {
  private keywordRegex = /^[a-zA-Z]*$/;
  private propertyOrEventRegex = /^[a-zA-Z]*\.[a-zA-Z]*$/;
  private operationRegex = /^[a-zA-Z]*\.[a-zA-Z]*(.*)$/;

  transform(value: string): any {
    if (value.match(this.keywordRegex)) {
      return "<span class='sb-keyword sb-code'>" + value + "</span>";
    }
    if (value.match(this.propertyOrEventRegex)) {
      return "<span class='sb-code'><span class='sb-object'>" + value.substring(0, value.indexOf(".")) + "</span>" +
        "<span class='sb-propertyOrEvent'>" + value.substring(value.indexOf(".")) + "</span></span>";
    }
    if (value.match(this.operationRegex)) {
      var retVal: string = "<span class='sb-code'><span class='sb-object'>" + value.substring(0, value.indexOf(".")) + "</span>" +
        "<span class='sb-propertyOrEvent'>" + value.substring(value.indexOf("."), value.indexOf("("));
      var params: string[] = value.substring(value.indexOf("(")+1, value.indexOf(")")).split(",");
      params = params.map((param) => { return "<span class='sb-param'>" + param + "</span>" });
      retVal += "(" + params.join(",") + ")</span></span>";
      return retVal;
    }
    return value;
  }

}
