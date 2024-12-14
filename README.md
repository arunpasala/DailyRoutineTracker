# DailyRoutineTracker
Daily Routine Tracker

Overview

The Daily Routine Tracker is a simple web application that allows users to add, manage, and track their daily tasks. Users can input their daily tasks, mark them as completed, and monitor their progress. The application stores the tasks locally on the user's browser using localStorage, ensuring data persistence even when the page is refreshed.

Features

Add Tasks: Users can add tasks with a single click.

Mark as Completed: Tasks can be marked as completed or uncompleted by clicking on them.

Progress Tracking: The application calculates the completion percentage and visually represents it with a progress bar.

Persistent Data: All tasks are saved in localStorage, so they remain available even after the page is closed or refreshed.

Technologies Used

HTML: For the structure of the web page.

CSS: For styling and layout.

JavaScript: For functionality and dynamic updates.

How to Use

Add a Task:

Enter the task in the input field.

Click the Add Task button to add it to the list.

Mark a Task as Completed:

Click on a task in the list to toggle its completion status.

Track Progress:

The progress bar updates dynamically based on the number of completed tasks.

The progress percentage is displayed above the progress bar.

Data Persistence:

Tasks are stored in your browser’s localStorage.

Tasks will be retained even if you close and reopen the browser.

Installation

Clone or download this repository to your local machine:

git clone https://github.com/your-username/daily-routine-tracker.git

Open the folder and launch index.html in your preferred web browser.

File Structure

- index.html       # Main HTML file
- style.css       # CSS file for styling
- gradetool.js        # JavaScript file for functionality

Future Enhancements

History Feature: Track routines by date to analyze trends.

Mobile App: Convert the website into a Progressive Web App (PWA).

User Accounts: Add user authentication to save tasks across devices.

Push Notifications: Remind users to review or update their daily tasks.

Charts: Visualize task completion trends using libraries like Chart.js.
