# CodeSparks' FED task 
## (v.6)
Welcome!

Included with this file is a very simple client-side app.
Your mission, is to improve it a bit by implementing some additional features.
Please focus on good coding practices.  

Once done, please send back the new and improved version.

What to do:
1) Make the piece "hollow" when the mouse hovers over it (hollow means only the border should be drawn with the color of the piece)
2) The `init` function has too much code duplication - fix it 
3) Make sure that the piece *never* gets off the screen when moved
4) Add a 'Reset' button that returns the piece back to its initial location
5) Add a 'Randomize' button that places the piece at a random location on the screen
6) When the page loads, get today's temperature from an API and set the piece's color according to the following ranges:
    - < 10 degrees: Blue
    - 11 - 20 degrees: Green
    - 21 - 30 degrees: Yellow
    - More than 30 degrees: Red

    You can use this URL to retrieve the weather data for Tel-Aviv:  
    https://weatherstack.glitch.me/current?access_key=5f58d7a0eecd822f4bd469586df5585c&query=tel%20aviv
7) Please describe how would you make the motion of the piece smooth instead of jumpy?  
   Implement your suggestion for extra points!
8) How would you improve the code of this project?   
Meaning, how would you implement the same application differently (if at all) - did you have parts of the code that you didn't like? would you add anything? Use a different architecture?
Give some suggestions!

Thanks and good luck!
