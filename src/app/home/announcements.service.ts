import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';

export class FeedItem {
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
    public forumUrl = "https://social.msdn.microsoft.com/Forums/en-US/smallbasic/threads";
    private corsUrl = "https://cors-anywhere.herokuapp.com/";
    private smallBasicFeed: Promise<FeedItem[]>;
    private forumFeed: Promise<FeedItem[]>;

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


    public getForumPosts(): Promise<FeedItem[]> {
        if (!this.forumFeed) {
            this.forumFeed = new Promise((resolve, reject) => {
                this.http.get(this.corsUrl + this.forumUrl + "?outputAs=rss", { responseType: "text" }).subscribe((rawFeed) => {
                    parseString(rawFeed, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            let parsedFeed = result.rss.channel[0].item.map((rawItem) => {
                                let parsedItem: FeedItem = {
                                    title: rawItem.title[0],
                                    author: rawItem["a10:author"][0]["a10:name"][0],
                                    description: this.truncateDescription(rawItem.description[0]),
                                    link: rawItem.link[0],
                                    date: Date.parse(rawItem["a10:updated"])
                                }
                                return parsedItem;
                            });
                            resolve(parsedFeed);
                        }
                    });
                });
            });
        }

        return this.forumFeed;
    }

    /**
     * Truncate the link description- remove (most) html, par it down to 60 characters
     * and add '...' at a word break
     * @param desc original description
     */
    private truncateDescription(desc: string): string {
        var removedHTML = desc.replace(/<\/?[^>]+(>|$)/g, "");
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
