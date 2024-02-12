<p align="center">
  <strong>
    <h1 align="center">LIVECODESHARE</h3>
  </strong>
  <p align="center">
    Collaborative Coding and Live Video Chat for Developers.
    <br />
  </p>
</p>

### About The Project

LIVECODESHARE. is a full-stack application built with React.JS, MongoDB, Firebase, TailwindCSS, and WebRTC. This is a social networking app for software developers that also has a collaborative code space. In this app, aspiring developers are able to network with experienced developers to improve their coding skills. The collaborative code space has group live chat messaging, live group video calls, screen sharing, and a collaborative code editor that supports C++, JavaScript, Python, and Java. 


# Built With
LIVECODESHARE. is built on React.JS, Node.JS, MongoDB, WebRTC, Firebase, and TailwindCSS. 

Written in Javascript.

# Features and Highlights

* [Landing Page](#examples)
  - [Login/Registration](#Login/Registration)
  - [Full CRUD for registered users](#FullCRUDforregisteredusers)
  - [Image Uploading with Firebase ](#ImageUploadingwithFirebase)
  - [Mobile-First Design](#MobileFirstDesign)

* [Code Space](#templates)
  - [Create Room Page](#CreateRoomPage)
  - [Collaborative Code Editor](#CollaborativeCodeEditor)
  - [Live Group Call](#LiveGroupCall)
  - [Screen Sharing](#ScreenSharing)
  - [Live Chat Messaging](#LiveChatMessaging)
  
* Next Steps
  - [Next Steps](#NextSteps)


<a name='Login/Registration'></a>
## Login/Registration

The login and registration were created as a multi-step form. The first page asks for the user's email and password, while the second form asks for additional infromation like full name, education, years of experience, a short description and preferred coding languages. 

In order for a user to become a tutor, user must first create an account. This will also allow them to edit their profile information. 

<a name='FullCRUDforregisteredusers'></a>
## Full CRUD for registered users

Registered users have access to full CRUD features regarding their profile. A regular user can only browse through the list of developers and use the code space. However, registered users can edit their profile information, update their profile picture and delete their account. 

<a name='ImageUploadingwithFirebase'></a>
## Image Uploading with Firebase 

LIVECODESHARE uses Firebase to allow users to upload an image from their local computer to add as their profile picture. The image is then stored in Firebase.

<a name='MobileFirstDesign'></a>
## Mobile-First Design

LIVECODESHARE was created with the mobile-first design approach. This means that users can still use and enjoy the application on any type of device. This application is responsive, so it will fit any screen size from phone to a larger desktop.

<a name='CreateRoomPage'></a>
## Create Room Page

The Code Space comes with an animated toggleable feature that allows users to switch between the create a room form and join a room form. 

Next to each form there is a carousel with indicators that allows users to easily navigate through a collection of images and descriptions on how to use teh code space.

<a name='CollaborativeCodeEditor'></a>
## Collaborative Code Editor

LIVECODESHARE'S Code Space comes with a built-in collaborative code editor that supports JavaScript, Java, and Python. Just like in Google Docs any code that is written and executed in the code editor will be seen by all the users in the code space. This allows users to work together with their colleagues on projects, assignments, or homework. 

<a name='LiveGroupCall'></a>
## Live Group Call

The live group call feature was implemented using webRTC. The Code Space can support live group calls with any user that joins the room, and each user is able to turn off their camera, mute their microphone or share their screen. 

<a name='ScreenSharing'></a>
## Screen Sharing

The screen-sharing feature was also implemented using webRTC. Users are allowed to share their screen, window, or a specific tab with all the other users in the Code Space. This feature allows for better communication between parties and makes learning more efficient. 

<a name='LiveChatMessaging'></a>
## Live Chat Messaging

The Code Space comes with live group chat messaging, that was integrated using webRTC. The top right corner of the chat box has a participant counter that keeps track of the number of users in the room. Any time a new user joins the room, all the other users will be notified through a notification in the chat box. This is another mode that users can use to stay in communication with each other. 

<a name='NextSteps'></a>
## Next Steps

- Create a resource page that will have more information on free learning resources that aspiring developers can use to learn and improve their coding skills. (v1.0.1)
- Use the Google Gmail API to allow users to send emails to other users directly from the app.
- Use the Google Calendar API to allow users to schedule meeting times with other users.