To Do App with Local Storage (BOM Challenge for Learning).

1.  Access the DOM Elements.
2.  Prevent Default Submission.
3.  Create An empty Array to Store the Tasks.
4.  Add a Task on click.
    -     if the input field is not empty:
    -       Add Task to Array of Tasks, by Calling the addElements function and the Input Value as Parameter.
    -       then empty The Input Field.
5.  Create A function add Task to the Array of Tasks.
    -     Create An Object to save Task Data (id, title, completed).
    -     Push Task(Object) To the Array of Tasks
    -     Add new Tasks to Page by Calling the addElements function.
    -     Add Tasks To local Storage by Calling the addTasksToLocalStorage function.
6.  Create A function to Add Elements to Page from Array Of Tasks.
    -     Make sure to empty Tasks Div.
    -     Looping On Array of Tasks:
    -       Create Main Div.
    -       If Task Is Done, give it a ("done") Class.
    -       Create Title of Task.
    -       Append Title to Main Div.
    -       Create Delete Button.
    -       Appen Button to Main Div.
    -       Add Task Div to Tasks Container.
7.  Create A function to Add Data to Local Storage from Array of Tasks.
    -     Set Item ("tasks")
    -     The value is JSON.stringify(Array Of Tasks)
    -     call the Function and give it the Array Of Tasks as Parameter.
8.  Create A function to get Data from Local Storage.
    -     Check If Item ("tasks") is existing
    -     Then revese the data by using JSON.parse.
    -     Then upload the data by calling the addElements function.
9.  Trigger Get Data from Local Storage function.
10. Check if There’s Tasks in Local Storage to save them in the Array of Tasks.

11. Put click event on Task Element when it's exist:
    -     If the Element has Delete Class:
    -       Remove Task form Local Storage if the element has ("data-id") Attribute.
    -       Remove the Parent Element form Page.
    -     Check the Task Element if it contains "task" Class:
    -       Call the function Toggle Completed for The Task.
    -       Then give it a "done" class if it has'nt alreay.(toggle Method)
12. Create a function to delete Task With task Id:
    -     Do filtering on the Array of Tasks and reutrn the id if it not equal to the current element id.
    -     Then update the Element in Local Storage by Calling the Add Data to Local Storage function.
13. Create a function to toggle Status Task with Task Id:
    -     Check If the Element ID == task ID :
    -       Do looping on arrayOfTasks and change completed to ture on click.
    -       Then update the Element in Local Storage by Calling the Add Data to Local Storage function.
