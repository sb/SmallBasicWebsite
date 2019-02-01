import { Component, OnInit } from '@angular/core';
import { AnnouncementsService, FeedItem } from './announcements.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public announcements: FeedItem[] = [];

    constructor(public announcementService: AnnouncementsService) { }

    ngOnInit() {
        this.announcementService.getAnnouncements().then((announcements) => {
            this.announcements = announcements;
        });
    }

}
