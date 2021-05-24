# TrainTasker
React Phone Web App to facilitate a Machine Learning training market place.

This is a a React Web app designed allow a 'Mechanical Turk' type market place for AI Machine Learning training.

    The tasker web app is open source and MIT licensed. The source is located at:
    https://github.com/Aphene/TrainTasker

    A live instance can be found at:
    http://23.91.21.132/dash/index.html

    The app was developed using the React framework with MaterialUI components.
    
Background:
One of the largest expenses in machine learning is training the Machine Learning application. 
Supervised training usually requires humans to manually produce paired input and output data. For example, 
a self driving application requires untold thousands of images.

While preparing a data pair may be simple for a human to do, it has to be repeated thousands of times. 
Hiring a staff of people to do this can quickly become an expensive proposition. 
One method to mitigate these costs is to out-source these tasks as free-lance ‘gigs’.  
The task is broken down to its simplest elements and is bid out to a group of potential contractors.  
The key to implementing this strategy is to make the underlying infrastructure as automated and ‘frictionless’ as possible. 
The easier it is to perform a training task, the lower the cost of the entire training project.

System Architecture

This application part of system with three components:

    Tasker Web app (this app). This is where the actual training is performed.This is a ‘phone first’ design, 
    though using a desktop works just as well.  The user of this app will be referred to as the ‘Tasker’ from here on.

    Training Server.  This is a server application hosting the server data and job results database. 
    The Tasker App communicates exclusively with the Training Data Server. Logon and job requests are handled here. 
    The Task Requester App will alse exclusively communicate with this server.

    Machine Learning Task Requester App.  This is the client piece for the Machine Learning Task Requester.  
    This is for the developer who wants training data for his ML application and is willing to pay to have it created. 
    The user of this app will be referred to as the ‘Requester’ from here on.
    
    This app (TrainTasker) performs the following functions:
    
    Tasker creates an account.
    Tasker is able to browse available tasks and associated bounty.
    Tasker chooses a task, and is presented with the task description.
    Tasker chooses whether to accept the job or not.
    Tasker then enters labeling entries until they decide to quit or the tasks are depleted.
    Tasker is presented with the total reward amount. If this is the first time the Task Performer is using the app, he is presented with enrollment instructions.
    First time performers register for a Dash Wallet.
    Dash address is uploaded with payment request.
    Dash wallet is sent payment from the Escrow server.


Data object descriptions

Job
Describes a collection of tasks required to train a Machine Learning app. 
The requester creates a single Job, and uploads multiple images for that Job.

Task
One individual task (one image that needs to be highlighted).  
This task object describes the resources required to perform the task. 
Multiple taskers (tasker web app users) may perform the same task.

Train
This object contains the result of a tasker performing a particular task. 
i.e. highlight coordinates: x, y, width, height.
    



Tasker App Api calls to the server

TaskerRegistration
  Email
  Password
  Return: UserID
  Registers the web app user with the system.

TaskerLogon
  Email
  Password
  Return: UserID
  Logs a returning user back into the system.

GetAvailableJobs
  Return: a list of available jobs as an array of JSON objects.
  GetNextAvailableTrain
  Returns JSON ob containing image url and task info for next available task,

GetTaskImage
     URL  Returns the image as Base64 bit encoded data.
    Report
    Train JSON object as POST data
    Return status of database update.

RequestPayment
    UserI
    Dash Address
    Returns acknowledgement


    
    

    
