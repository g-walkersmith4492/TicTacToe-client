# TIC TAC TOE Project

## List of Technologies used during this project:

- JavaScript
- jQuery
- HTML
- CSS
- Bootstrap
- Sass
- jQuery
- ajax
- API

## Wireframe and User Stories:

Wireframe -> https://imgur.com/a/Qz7oy8k

1.  As a User, I want to be able to sign up for Tic Tac Toe

2.  As a User, I want to be able to sign in to the accunt I created when signing up.

3.  As a User, I want to be able to change my password after signing in

4.  As a User, I want to be able to sign out of my account.

5.  As a User, I want to be able to play the game of Tic Tac Toe to conclusion (win or tie)

6.  As a User, I would like to know the total amount of wins player one has in total.


## Planning and Development Stage:

The first step of my planning was to create a wireframe.  This was created on a free wireframing website, and showed a vague overview of what I would like my project to look like upon completion.  Next, I developed my user stories, which were listed sequentially and provided the steps I must follow to provide a user with the necessary features for this project.  Afterwards, I spoke with an instructor and reformatted my user stories based upon their suggestions.

I started the project by focusing on my game logic, primarily using JavaScript, as I figured I would have an easier time with this than connecting to the API.  After finishing my logic, I speant the majority of my time working on connecting to the API.  Eventually, I was able to send and receive all necessary information to sign in/sign up/change password, as well as retrieve how many games in total Player One had won.

My best problem solving strategy was talking to other members of my cohort, submitting issues, and looking at other people's issues.  Often times, others had the same issue as I did, and looking at the advice from instructors was easier than opening up an issue myself.

## Unsolved Problems/Future Plans:

One problem I would like to solve is to determine how many games Player Two has one.  This would require that I change how I am interacting with the API, as I can only currently send true/false values to the "over" property.  I believe this could likely be acheived by iterating over the object that is provided by the API.

One of my other future plans is to work on the styling for this project, which is something I struggled with (after making sure the game worked).  Specifically, I would like to display images to the board for the user pieces, rather than just X and O.
