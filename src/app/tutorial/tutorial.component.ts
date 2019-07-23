import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  public chapters = [
    { link: "chapter1", title: "Chapter 1" },
    { link: "chapter2", title: "Chapter 2: Getting Started" },
    {
      link: "chapter3", title: "Chapter 3: Variables", sections: [
        { link: "Using_Variables_in_our_program", title: "Variables in our program" },
        { link: "Analysis_of_the_program", title: "Analysis of the program" },
        { link: "Rules_for_naming_Variables", title: "Rules for naming Variables" },
        { link: "Playing_with_Numbers", title: "Playing with Numbers" },
        { link: "A_Simple_Temperature_Converter", title: "A Simple Temperature Converter" },
      ] },
    {
      link: "chapter4", title: "Chapter 4: Conditions and Branching", sections: [
        { link: "If", title: "If" },
        { link: "Else", title: "Else" },
        { link: "Indentation", title: "Indentation" },
        { link: "Even_or_Odd", title: "Even or Odd" },
        { link: "Branching", title: "Branching" },
      ]
    },
    {
      link: "chapter5", title: "Chapter 5: Loops", sections: [
        { link: "For_Loop", title: "For Loop" },
        { link: "While_Loop", title: "While Loop" },
      ]
    },
    {
      link: "chapter6", title: "Chapter 6: Beginning Graphics", sections: [
        { link: "Introducing_GraphicsWindow", title: "Introducing GraphicsWindow" },
        { link: "Setting_up_the_Graphics_Window", title: "Set up GraphicsWindow" },
        { link: "Drawing_Lines", title: "Drawing Lines" },
        { link: "Drawing_and_Filling_Shapes", title: "Drawing and Filling Shapes" },
      ]
    },
    {
      link: "chapter7", title: "Chapter 7: Fun with Shapes", sections: [
        { link: "Rectangalore", title: "Rectangalore" },
        { link: "Circtacular", title: "Circtacular" },
        { link: "Randomize", title: "Randomize" },
        { link: "Fractals", title: "Fractals" },
      ]
    },
    {
      link: "chapter8", title: "Chapter 8: Turtle Graphics", sections: [
        { link: "Logo", title: "Logo" },
        { link: "The_Turtle", title: "The Turtle" },
        { link: "Moving_and_Drawing", title: "Moving and Drawing" },
        { link: "Drawing_a_Square", title: "Drawing a Square" },
        { link: "Changing_Colors", title: "Changing Colors" },
        { link: "Drawing_more_complex_shapes", title: "Drawing more complex shapes" },
        { link: "Moving_Around", title: "Moving Around" },
        { link: "Position_Turtle", title: "Position Turtle" },
      ]
    },
    {
      link: "chapter9", title: "Chapter 9: Subroutines", sections: [
        { link: "Subroutines", title: "Subroutines" },
        { link: "Advantages_of_using_Subroutines", title: "Advantages of using Subroutines" },
        { link: "Using_variables", title: "Using variables" },
        { link: "Calling_Subroutines_inside_Loops", title: "Calling Subroutines inside Loops" },
        { link: "Best_Practices", title: "Best Practices" },
      ]
    },
    {
      link: "chapter10", title: "Chapter 10: Arrays", sections: [
        { link: "Review_Variables", title: "Review Variables" },
        { link: "What_is_an_array", title: "What is an array?" },
        { link: "Indexing_an_array", title: "Indexing an array" },
        { link: "More_than_one_dimension", title: "More than one dimension" },
        { link: "Using_Arrays_to_represent_grids", title: "Using Arrays to represent grids" },
      ]
    },
    {
      link: "chapter11", title: "Chapter 11: Events", sections: [
        { link: "How_are_events_useful", title: "How are events useful?" },
        { link: "Handling_multiple_events", title: "Handling multiple events" },
        { link: "A_paint_program", title: "A paint program" },
      ]
    },
    {
      link: "appendixA", title: "Appendix A: Fun Samples", sections: [
        { link: "Turtle_Fractal", title: "Turtle Fractal" },
        { link: "Photos_from_Flickr", title: "Photos from Flickr" },
        { link: "Dynamic_Desktop_Wallpaper", title: "Dynamic Desktop Wallpaper" },
        { link: "Paddle_Game", title: "Paddle Game" },
      ] },
    {
      link: "appendixB", title: "Appendix B: Colors", sections: [
        { link: "Red_Colors", title: "Red Colors" },
        { link: "Pink_Colors", title: "Pink Colors" },
        { link: "Orange_Colors", title: "Orange Colors" },
        { link: "Yellow_Colors", title: "Yellow Colors" },
        { link: "Purple_Colors", title: "Purple Colors" },
        { link: "Green_Colors", title: "Green Colors" },
        { link: "Blue_Colors", title: "Blue Colors" },
        { link: "Brown_Colors", title: "Brown Colors" },
        { link: "White_Colors", title: "White Colors" },
        { link: "Gray_Colors", title: "Gray Colors" },
      ] },
  ];

  constructor() {}

  ngOnInit() {}
}
