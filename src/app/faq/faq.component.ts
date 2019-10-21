import { Component, OnInit } from '@angular/core';

class FaqTopic {
    topic: string;
    questions: FaqQuestion[];
}

class FaqQuestion {
    question: string;
    answer: string;
    isExpanded: boolean;
}

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
    public faqTopics: FaqTopic[] = [
        {
            topic: "What is Small Basic and how is it different from other programming languages?",
            questions: [
                {
                    question: "What is Small Basic?",
                    answer: "<p>Small Basic is a programming language that serves a stepping stone from block-based coding languages to more complex text-based languages." +
                    "The goal of Small Basic is to make programming easy and accessible for beginners.There are three main components of Small Basic - the language, the IDE, and the libraries.</p><br / >" +
                    "<p><i>Language:</i> The Small Basic language was inspired by an early variant of BASIC (<b>B</b >eginner's <b>A</b>ll-purpose <b>S</b>ymbolic <b>I</b>nstruction <b>C</b>ode). " +
                    "BASIC was one of the first languages created with the goal of helping students to learn to code.</p><br / > " +
                    "<p> <i>IDE (Integrated Development Environment):</i> The Small Basic IDE is simple yet rich in features. The IDE strikes a balance between ease of use and preparing students to use more advanced compilers in the future.</p > <br />" +
                    "<p> <i>Libraries:</i> The Small Basic libraries helps beginners learn by writing interesting and compelling programs.</p>",
                    isExpanded: false
                },
                {
                    question: "Why another Basic language?",
                    answer: "<p>The BASIC language family is a group of general purpose, easy to use programming languages. There are more than 230 different documented variations of the BASIC language. The principles " +
                    "of BASIC emphasize simplicity and approachability – a strong framework for an introductory language such as Small Basic.</p>",
                    isExpanded: false
                },
                {
                    question: "What about the other Small Basic?",
                    answer: "<p>Microsoft Small Basic are not affiliated with the similarly-named " +
                    "<a href=\"https://smallbasic.sourceforge.io/\" title=\"Other small basic\" >SmallBASIC</a> language.</p >",
                    isExpanded: false
                },
                {
                    question: "How is Small Basic different from QBasic?",
                    answer: "<p>Unlike QBASIC, Small Basic is based on .NET and can consume (not produce) \"Objects\". It supports distinct Operations, Properties and Events.</p>",
                    isExpanded: false
                },
                {
                    question: "How is Small Basic different from Visual Basic?",
                    answer: "<p>The Small Basic language is aimed toward beginning programmers. As such, it supports a much smaller feature set than the capabilities provided by Visual Basic.</p>",
                    isExpanded: false
                },
                {
                    question: "How is Small Basic different from Scratch or Alice?",
                    answer: "<p>Scratch and Alice are block-based programming languages that serve as great tools to help beginners learn the concepts of programming. Instead of using text," +
                    " Scratch and Alice allow users to write programs by chaining together blocks that perform various programming functions. In comparison, Small Basic is a text-based language.</p>",
                    isExpanded: false
                },
                {
                    question: "What are the unique features of the Small Basic language?",
                    answer: "<p><i>Imperative</i>:" +
                    "Just like the early variants of BASIC, Small Basic is imperative and doesn't use or expose beginners to concepts like scopes, types, object orientation, etc.</p><br/>" +
                    "<p><i>Simple</i>:" +
                    " The Small Basic language consists of just 14 keywords.</p><br / > " +
                    "<p><i>Type System</i>:" +
                    " There actually isn't one. You can create string and numeric constants and assign them to variables. Operations performed on these variables will be interpreted according to the content.</p><br />" +
                    "<p><i>Variables</i>:" +
                    " All variables are global and are always initialized.They can be used without assignment.</p><br / > " +
                    "<p><i>Events</i>:" +
                    " You can create a sub- routine and assign it to an event.This will cause the sub- routine to be called when the event happens.</p><br / > " +
                    "<p><i>Libraries</i>:" +
                    " The libraries provide static \"Objects\" that group operations, properties and events.New libraries can be created using other .NET languages and added to the Small Basic runtime.</p>",
                    isExpanded: false
                },
            ]
        },
        {
            topic: "How do I use Small Basic?",
            questions: [
                {
                    question: "Who should learn with Small Basic?",
                    answer: "<p>Small Basic is intended for beginning programmers. This language is often used as a next step after learning a block-based language such as" +
                    " Scratch. Small Basic has been very successful with students in elementary and middle school. However, the language is not just limited to children " +
                    "- adults that are interested in learning how to program have found Small Basic to be a very helpful first step.</p>",
                    isExpanded: false
                },
                {
                    question: "How can I learn Small Basic on Windows?",
                    answer: "<p>The Small Basic Windows IDE can be downloaded on computers running Windows Vista, 7, 8, 8.1 or 10. Computers running Windows Vista or Windows 7 need to have the Microsoft .NET Framework 4.5 installed.</p>",
                    isExpanded: false
                },
                {
                    question: "How can I learn Small Basic on Mac, iOS, Android, or other non-Windows platforms?",
                    answer: "You can use this website to write Small Basic code online! Check out the link on our homepage.",
                    isExpanded: false
                },
                {
                    question: "How can students submit work?",
                    answer: "<p>Every program published by students has a unique ID and a link to where it is hosted on the web. Students can also share programs via email. Teachers can use any of these tools to access student programs.</p>",
                    isExpanded: false
                },
                {
                    question: "How can I debug Small Basic programs?",
                    answer: "<p>The Small Basic IDE provides rich error messages to help students understand compilation errors in their program. In order to keep the IDE simple and approachable for beginners, there is not an advanced debugger similar to the ones that can be found in more advanced IDEs.</p>",
                    isExpanded: false
                }
            ]
        },
        {
            topic: "Where is the Small Basic language going and how can I help improve Small Basic?",
            questions: [
                {
                    question: "Is Small Basic extensible?",
                    answer: "<p>The Small Basic IDE allows for third-party Small Basic library plug-ins in order to extend the possibilities of what can be done within Small Basic. Extensions can be written in C# or Visual Basic. Click " +
                    "<a href=\"https://social.technet.microsoft.com/wiki/contents/articles/14025.small-basic-how-to-create-an-extension-using-c.aspx\" title=\"c#\">here to read more about C# Extensions</a>.</p>",
                    isExpanded: false
                },
                {
                    question: "How can I contribute to Small Basic through open source?",
                    answer: "<p>To join the project, click here to <a href=\"https://github.com/sb/\" title=\"view the code on git hub\">view the code</a> and clone the repo on GitHub." +
                    "The code for this website, as well as the online editor, is open source. The source code that powers the online editor will eventually replace "+ 
                    "the desktop version as well.</p>",
                    isExpanded: false
                }
            ]
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    public expandOrCollapseAll(index: number) {
        let expand = this.faqTopics[index].questions.filter((question) => {
            return !question.isExpanded;
        }).length > 0;

        this.faqTopics[index].questions.forEach((question) => {
            question.isExpanded = expand;
        });
    }
}
