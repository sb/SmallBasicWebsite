import { Component, OnInit } from '@angular/core';
import { FeedsService, FeedItem } from '../commonservices/feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public announcements: FeedItem[] = [];
    public forumPosts: FeedItem[] = [];

    // If the user is on a mac or unknown platform, give them a choice on which editor to use.
    // Remove when github.com/sb/smallbasic-editor/issues/127 is closed
  public codingUrl: string = !navigator.platform || /(Mac|iPad|iPhone|iPod)/i.test(navigator.platform) ? "./redirect" : "https://aka.ms/SBOVnext";

    constructor(public feedService: FeedsService) { }

  ngOnInit() {
        this.feedService.getAnnouncements().then((announcements) => {
            this.announcements = announcements;
        });

        this.feedService.getForumPosts().then((forumPosts) => {
            this.forumPosts = forumPosts;
        });
    }

}
