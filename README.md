# Youth-Civic-Platform

# Youth Tech Solutions for Africa: Forum and Polls Web Application

## Project Overview
This project is a web-based forum and polls platform designed to encourage African youth to discuss socio-political challenges within their communities. By creating and participating in discussions and polls, users can express their opinions, share ideas, and engage in conversations aimed at addressing issues such as leadership, economic inequality, and accountability.

## Purpose
The platform seeks to:
- Provide a space for youth to engage in meaningful dialogue around socio-political issues.
- Collect opinions and votes on various topics through polls.
- Encourage innovative tech-based solutions that address community challenges.

## Features
1. **Forum Discussions**: Users can view and participate in ongoing discussions about pressing socio-political issues.
   - Topics include leadership accountability, youth protests, economic inequality, and more.
2. **Polls**: Users can vote on important issues such as youth political participation and digital activism.
   - Poll results are displayed with real-time percentages.
3. **Responsive Design**: The web application is designed to be accessible on various devices, from mobile to desktop, with a clean and user-friendly interface.

## Technologies Used
- **Frontend**: HTML, CSS (with maroon undertones for a modern look), and basic JavaScript.
- **Backend**: Express.js to handle server-side logic.
- **Database**: MySQL for storing user data, forum discussions, and poll information.
- **Styling**: Custom CSS for a polished, responsive layout, including forum and poll sections.

## Setup and Installation

### Prerequisites
- Node.js
- MySQL database

### Installation Steps
1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/youth-tech-solutions.git
   ```
2. Install dependencies.
   ```bash
   cd youth-tech-solutions
   npm install
   ```
3. Set up your MySQL database and configure the connection in the `config/db.js` file.
   ```sql
   CREATE DATABASE youth_tech_solutions;
   ```
4. Run the server.
   ```bash
   npm start
   ```

5. Access the application in your browser at `http://localhost:3000`.

## Usage
- **Creating a Discussion**: Users can start a new forum topic by providing a title and description.
- **Viewing and Voting in Polls**: Users can view ongoing polls and vote on issues that matter to them.
- **Participating in Discussions**: Users can reply to discussions and contribute to meaningful debates.

## Folder Structure
```bash
.
├── public
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── script.js
├── views
│   ├── forum.ejs
│   ├── polls.ejs
├── routes
│   └── index.js
├── config
│   └── db.js
├── app.js
├── README.md
└── package.json
```

## Future Enhancements
- **Authentication**: Implement user authentication and registration.
- **Admin Dashboard**: Enable moderators to manage content, approve discussions, and oversee poll results.
- **Advanced Poll Analytics**: Display more detailed poll insights and visualizations.


## Contributors
[@neviabarasa](https://github.com/neviabarasa)
