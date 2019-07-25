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
