# Pseudo Code
create a skeleton of document MVC document set up 

create the models for the data bases 
create the index for the data base models 
seed the db 

create the routes to get the information that we need 
adding conditionals 
will need middleware 
error handling 
test those routes 

create a front end with handlebars (very minimal at first)
page for homepage 
page for login
page signup 
page for dashboard 


create the client side js 
that includes the get and post fetch requests 
also put requests as well 



## Data base set up 
Blog_post 
id (primary key)
title
contents
user_id (foreign key)

User 
id (primary key)
password 
user_name

comments 
id 
user_id (foreign key) to find username 
blog_post_id (foreign key) to id which blog post it was on
comment