# unit5c3
Create an employee management system for a company's HR.
The Applications main goal is to create a dashboard that can manage, hire, fire or promote employees
use mock server to store and retrieve data, make sure that URL is localhost:8080/employee anything else will not work
visit the demo video given in the assignment for better clarity
The app has multiple routes
/ Shows <Home> component, homepage
/login shows <Login> component
/employees shows <EmployeeList> for listing employees
/employees/:id shows details of one employee
/admin Shows one administrator panel to add employee <Admin>
/logout for <Logout> for signing user out
The app has total 2 Private Routes, and they should not be visible unless user is logged in: Employee details and Admin page
Authentication status is mainted in memory via Context API
Navbar should show only 4 Links at a time:
Home
Employee list
Admin
Login if user is logged in, otherwise Logout
Home page shows a statistics dashboard which will show following information:
Total Employees in the database (get this from backend) .totalemp
Total Terminated (Read bellow) .total_terminated
Total Promoted (Read bellow) .total_promoted
Total New (Read bellow) .total_new
here . means it's a classname, ignore that if you are using given boilerplate
The Total Terminated, Promoted, and newly created count is in memory, maintain it in Another context API, increment it when termination, promotion happens or a new user gets created.
The next page is Employee list, it shows one card for every employee, by clicking anywhere on the card you get to go to that employees details
the entire component is a div with class list_container
every card in this component has class name employee_card
Every card shows following information:
Image of employee .employee_image
name of employee in .employee_name
Title of employee in .employee_title
Next page is employee details make sure it's a private page
If user tries to visit /employees/:id without loggin in he should get redirected to /login and see login component
if he's already logged in then he should see employee details as follows:
entire component has .user_details
user image: .user_image
user name .user_name
user salary: .user_salary
users current tasks list .tasks :
create one
with .task
user status: .status
user title: .title
Show a button Fire Employee on this card only if user is not already terminated .fire
show a button to Promote employee, with class .promote only if user is not already a Team Lead and not terminated
if user is fired, or promoted increment the stats in context
The employee status can either be working or terminated
Employees titles can only be in order: Intern Jr Software Developer, Sr Software Developer, Team Lead.
If you promote an Intern he becomes Jr then Sr then finally Team Lead. thus cannot promote Team Lead, so button will not be visible
As soon as you promote or fire employee, the status should be changed immediately on the same page
Login component is easy login form .loginform
input name=username .login_username
input name="password .login_password
input type="submit" .login_submit
on clicking submit, make request to https://reqres.in/api/login with proper username and password, get token back, change status in context.
after loggin in user should automatically taken to whichever page he was trying to visit
if user is logged in, then navbar will show logout button
Logout component is same, it doesn't show any UI
when user visits /logout, just change value of authentication in context API
after loggin out take user to / always
<Admin> page is just a form with following values
admin page if private
use the same name given below
form .createEmployee
Name: input name="employee_name
ID: input name="employee_id"
select dropdown for Title name="title"
Values: intern, Jr Software Developer, Sr Software Developer and Team Lead
Salary Input: name="salary"
user Image: name="image"
username for user name="username"
password name="password"
input name="tasks" for tasks he's working on, comma seperated strings: eg: writting tests, working on dashboard
select name="status" for Status of employee
terminated
working
select name="team" for which team user is part of
values: frontend, backend, qa (stands for quality analysis)
input .createUser for submitting form
user should fill ALL values before submitting
Once user is created, update the statistics in home dashboard
