import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 my-3 text-center'>
          <h1>Todo App</h1>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-6' style={{ width: '100vw', }}>
          
            <pre className='font-style text-center'>
              {`
A to-do list is a list of items that need to be completed. The items on the list can range from simple
activities like replying to an email, to more complex tasks like creating project briefs.

A todo list, short for "to-do list," is a tool used to organize tasks or activities that need to be completed.
It's a simple yet effective way to manage and prioritize different activities, ensuring that important tasks
are not forgotten or overlooked. Here are some key details about todo lists:


Purpose:
Task Management: The primary purpose of a todo list is to manage tasks or activities. It helps individuals or teams 
keep track of what needs to be done.
Organization: It provides a structured way to organize tasks, enabling better time management and productivity.

Features:
Task Items: Todo lists consist of individual task items. Each item represents a specific task that needs to be completed.
Checkboxes or Markers: Items on a todo list often have checkboxes or markers that can be ticked off or marked as completed 
when the task is done.
Priority and Sorting: Some todo lists allow users to prioritize tasks or sort them based on importance, due dates, or categories.
Notes or Descriptions: Users can often add additional information or notes to each task to provide context or details about the task.


Benefits:
Organization: Helps in organizing tasks and preventing important tasks from being forgotten.
Productivity: Increases productivity by providing a clear list of tasks that need to be accomplished.
Focus: Enables users to focus on one task at a time and avoid feeling overwhelmed by a large number of tasks.
Tracking Progress: Allows users to track their progress by marking completed tasks.

Types of Todo Lists:
Personal Todo Lists: Used by individuals to manage personal tasks, errands, goals, etc.
Team/Project Todo Lists: Used in collaborative environments to manage tasks within a team or project.
Digital Todo Lists: Many applications and tools offer digital todo lists that can be accessed across devices, 
allowing for easy task management.
`}
            </pre>
          
        </div>
      </div>
    </div>
  );
}

export default About;
