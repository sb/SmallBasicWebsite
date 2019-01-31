import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';

class FeedItem {
    title: string;
    author: string;
    description: string;
    link: string;
    date: number;
}


@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
    public smallBasicUrl = "https://blogs.msdn.microsoft.com/smallbasic/";
    private corsUrl = "https://cors-anywhere.herokuapp.com/";
    private smallBasicFeed: Promise<FeedItem[]>;

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Get and cache the parsed items in the small basic RSS feed
     * Use CORS-Anywhere to get around CORS issues with the feed
     */
    public getAnnouncements(): Promise <FeedItem[]> {
        if (!this.smallBasicFeed) {
            this.smallBasicFeed = new Promise((resolve, reject) => {
                this.http.get(this.corsUrl + this.smallBasicUrl + "feed", { responseType: "text" }).subscribe((rawFeed) => {
                    parseString(rawFeed, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            let parsedFeed = result.rss.channel[0].item.map((rawItem) => {
                                let parsedItem: FeedItem = {
                                    title: rawItem.title[0],
                                    author: rawItem["dc:creator"][0],
                                    description: this.truncateDescription(rawItem.description[0]),
                                    link: rawItem.link[0],
                                    date: Date.parse(rawItem.pubDate[0])
                                }
                                return parsedItem;
                            });
                            resolve(parsedFeed);
                        }
                    });
                });
            });
        }

        return this.smallBasicFeed;
    }

    /**
     * Truncate the link description- par it down to 60 characters and add '...'
     * at a word break
     * @param desc original description
     */
    private truncateDescription(desc: string): string {
        if (desc.length <= 63) {
            return desc;
        } else {
            let truncated = desc.substr(0, 60);
            let lastSpace = truncated.lastIndexOf(" ");
            truncated = lastSpace > 50 ? truncated.substr(0, lastSpace) : truncated;
            truncated += " ...";
            return truncated;
        }
    }
}
