To-Do-App-Local-Storage

To Do App with Local Storage (BOM Challenge for Learning).

1.  Access the DOM Elements.
2.  Prevent Default Submission.
3.  Create An empty Array to Store the Tasks.
4.  Add a Task on click.
    a) if the input field is not empty:
    -     Add Task to Array of Tasks.
    -     To empty The Input Field.
5.  Create A function add Task to the Array of Tasks.
    a) Create An Object to save Task Data (id, title, completed).
    b) Push Task(Object) To the Array of Tasks
    c) Add new Tasks to Page by Calling the addElements function.
    d) Add Tasks To local Storage by Calling the addTasksToLocalStorage function.
6.  Create A function to Add Elements to Page from Array Of Tasks.
    a) Make sure to empty Tasks Div.
    b) Looping On Array of Tasks:
    -     Create Main Div.
    -     If Task Is Done, give it a ("done") Class.
    -     Create Title of Task.
    -     Append Title to Main Div.
    -     Create Delete Button.
    -     Appen Button to Main Div.
    -     Add Task Div to Tasks Container.
7.  Create A function to Add Data to Local Storage from Array of Tasks.
    a) Set Item ("tasks")
    b) The value is JSON.stringify(Array Of Tasks)
8.  Create A function to get Data from Local Storage.
    a) Check If Item ("tasks") is existing
    b) Then revese the data by using JSON.parse.
    c) Then upload the data by calling the addElements function.
9.  Trigger Get Data from Local Storage function.
10. Check if There’s Tasks in Local Storage to save them in the Array of Tasks.

11. Put click event on Task Element when it's exist:
    a) If the Element has Delete Class:
    -     Remove Task form Local Storage if the element has ("data-id") Attribute.
    -     Remove the Parent Element form Page.
    -     Check the Task Element if it contains task:
    -         Then give it a done class if it has'nt alreay.
    -     Call the Toggle Completed for The Task function.
    -     Toggle Done Class.
12. Create a function to delete Task With task Id:
    a) Do filtering on the Array of Tasks and reutrn the id if it not equal to the current element id.
    b) Then update the Element in Local Storage by Calling the Add Data to Local Storage function.
13. Create a function to toggle Status Task with Task Id:
    a) Do looping on arrayOfTasks and change completed to ture on click.
    b) Then update the Element in Local Storage by Calling the Add Data to Local Storage function.
