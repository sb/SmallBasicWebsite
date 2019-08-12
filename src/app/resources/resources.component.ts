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
                     description: "Wiki",
                     link: "http://social.technet.microsoft.com/wiki/contents/articles/17553.wiki-small-basic-portal.aspx"
                },
                {
                    description: "International Guide",
                    link: "http://msdn.microsoft.com/en-us/ff423682"
                },
                {
                    description: "Student Testimonies",
                    link: "http://blogs.msdn.com/b/smallbasic/archive/2012/10/25/small-basic-elementary-student-testimonials.aspx"
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
                     description: "API reference",
                     link: "/docs"
                },
                {
                     description: "eBooks",
                     link: "http://social.technet.microsoft.com/wiki/contents/articles/16386.small-basic-e-books.aspx"
                },
                {
                     description: "Extensions",
                     link: "http://blogs.msdn.com/b/smallbasic/archive/2012/10/12/small-basic-extensions-gallery.aspx"
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
                    link: "https://blogs.msdn.microsoft.com/smallbasic/2015/10/18/lego-mindstorms-ev3-extension-for-small-basic-ev3-basic"
                },
                {
                    description: "micro:bit",
                    link: "https://blogs.msdn.microsoft.com/smallbasic/2017/09/13/small-basic-microbit/"
                },
                {
                    description: "QR Code & Barcode",
                    link: "https://blogs.msdn.microsoft.com/smallbasic/2013/06/02/barcode-extension-for-small-basic/"
                },
                {
                    description: "Oculus Rift",
                    link: "https://blogs.msdn.microsoft.com/smallbasic/2016/03/26/new-oculus-rift-extension-for-small-basic-oculus-sb/"
                },
                {
                    description: "Arduino",
                    link: "https://blogs.msdn.microsoft.com/smallbasic/2016/03/22/small-basic-arduino/"
                },
                {
                    description: "Kinect",
                    link: "https://blogs.msdn.microsoft.com/smallbasic/2015/10/01/small-basic-1-2-released-with-kinect-support-and-bug-fixes/"
                },
                {
                    description: "Raspberry Pi",
                    link: "https://blogs.msdn.microsoft.com/smallbasic/2016/07/03/small-basic-talking-to-raspberry-pi/"
                },
            ]
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
