import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
    public topics = [
        {
            subject: "Building Small Basic applications for other platforms",
            resources: [
                {
                    description: "Lego Mindstorms",
                    link: "https://blogs.msdn.microsoft.com/smallbasic/2015/10/18/lego-mindstorms-ev3-extension-for-small-basic-ev3-basic"
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
