import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';

export class ProgramItem {
  title: string;
  link: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public smallBasicFeedUrl = "https://techcommunity.microsoft.com/gxcuf89792/rss/board?board.id=SmallBasic";
  private corsUrl = "https://cors-anywhere.herokuapp.com/";
  private smallBasicFeed: Promise<ProgramItem[]>;

  constructor(private http: HttpClient) { }

  public getPrograms(): Promise<ProgramItem[]> {
    if (!this.smallBasicFeed) {
      this.smallBasicFeed = new Promise((resolve, reject) => {
        this.http.get(this.corsUrl + this.smallBasicFeedUrl, { responseType: "text" }).subscribe((rawFeed) => {
          parseString(rawFeed, (err, result) => {
            if (err) {
              reject(err);
            } else {
              let parsedFeed = result.rss.channel[0].item.map((rawItem) => {
                let parsedItem: ProgramItem = {
                  title: rawItem.title[0],
                  link: rawItem.link[0],
                  description: this.truncateDescription(rawItem.description[0]),
                }
                return parsedItem;
              }
              );
              resolve(parsedFeed);
            }
          });
        });
      });
    }
    return this.smallBasicFeed;
  }

  /**
   * Truncate the link description- remove (most) html, par it down to 60 characters
   * and add '...' at a dword break
   * @param desc original description
   */
  private truncateDescription(desc: string): string {
    var removedHTML = desc.replace(/<\/?[^>]+(>|$)/g, "");
    removedHTML = removedHTML.replace(/&nbsp;/g, "");
    if (removedHTML.length <= 63) {
      return removedHTML;
    } else {
      let truncated = removedHTML.substr(0, 60);
      let lastSpace = truncated.lastIndexOf(" ");
      truncated = lastSpace > 50 ? truncated.substr(0, lastSpace) : truncated;
      truncated += " ...";
      return truncated;
    }
  }

}
