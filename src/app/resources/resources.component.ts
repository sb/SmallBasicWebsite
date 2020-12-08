import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
    public topics = [
        {
            subject: "Introduction to Small Basic",
            resources: [
                {
                     description: "Comprehensive Tutorial",
                     link: "/tutorials/chapter1"
                },
                {
                     description: "Commands",
                     link: "/docs"
                },
                {
                     description: "Unique Features",
                     link: "http://aka.ms/unique"
                },
                {
                     description: "Wiki",
                     link: "http://social.technet.microsoft.com/wiki/contents/articles/17553.wiki-small-basic-portal.aspx"
                },
                {
                    description: "International Guide",
                    link: "http://msdn.microsoft.com/en-us/ff423682"
                },
                {
                    description: "Student Testimonies",
                    link: "https://techcommunity.microsoft.com/t5/small-basic-blog/small-basic-elementary-amp-middle-student-testimonials/ba-p/335508"
                },
            ]
      },
      { image: "../../assets/coding.png" },
      {
           subject: "Learning & Community",
           resources: [
                {
                    description: "Tutorials",
                    link: "/tutorials"
                },
                {
                     description: "eBooks",
                     link: "http://social.technet.microsoft.com/wiki/contents/articles/16386.small-basic-e-books.aspx"
                },
                {
                     description: "Extensions",
                     link: "https://techcommunity.microsoft.com/t5/small-basic-blog/small-basic-extensions-gallery/ba-p/335478"
                },
                {
                     description: "Teacher Curriculum",
                     link: "http://social.technet.microsoft.com/wiki/contents/articles/16299.small-basic-curriculum.aspx"
                },
                {
                     description: "Forum",
                     link: "https://social.msdn.microsoft.com/Forums/en-US/home?forum=smallbasic"
                },
            ]
      },
      {
            subject: "Small Basic on other platforms",
            resources: [
                {
                    description: "Lego Mindstorms",
                    link: "https://techcommunity.microsoft.com/t5/small-basic-blog/lego-mindstorms-ev3-extension-for-small-basic-ev3-basic/ba-p/337553"
                },
                {
                    description: "micro:bit",
                    link: "https://techcommunity.microsoft.com/t5/small-basic-blog/small-basic-micro-bit/ba-p/1968424"
                },
                {
                    description: "QR Code & Barcode",
                    link: "https://techcommunity.microsoft.com/t5/small-basic-blog/qr-code-barcode-extension-for-small-basic/ba-p/335765"
                },
                {
                    description: "Oculus Rift",
                    link: "https://techcommunity.microsoft.com/t5/small-basic-blog/new-oculus-rift-extension-for-small-basic-oculus-sb/ba-p/337766"
                },
                {
                    description: "Arduino",
                    link: "https://techcommunity.microsoft.com/t5/small-basic-blog/small-basic-arduino/ba-p/337762"
                },
                {
                    description: "Kinect",
                    link: "https://techcommunity.microsoft.com/t5/small-basic-blog/small-basic-1-2-released-with-kinect-support-and-bug-fixes/ba-p/337523"
                },
                {
                    description: "Raspberry Pi",
                    link: "https://techcommunity.microsoft.com/t5/small-basic-blog/small-basic-talking-to-raspberry-pi/ba-p/337844"
                },
            ]
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
