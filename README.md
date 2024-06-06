# product-management-app

Demonstration project for product management with user authentication control and roles.

# Backend
In the backend I used Java and Spring Boot to create a common micro service with the MVC architecture model. Also used Spring Data JPA to control the interactions with the database and to map java entities to the database tables (ORM).
Spring Security is the module responsible for setting a authentication context, along with user sessions and permissions control. In this project I choose to use a basic session authentication control instead of a more robust JWT authentication
control due to the simplicity of configuring it, which is more appropriate for a small demonstration project.
Spring Web is the module responsible for setting and configuring the server to run the application and make it accessible.
I used lombok to avoid the boilerplate code in the entity classes and for the database part I choose to use h2 database and flyway, again, only due to the simplicity and easiness in configurations and use.

# Frontend
I used angular and tailwindcss to build a small app to show the necessary interfaces available with a relatively good looking design. The frontend application has a custom login page ("custom" because Spring Security already makes one available by default) that
sends the login requests to the backend and creates a user session if the login is successful. Besides it there are simple components to list the products, edit it and create new ones. Updating and deleting products are operations available only to the super user.
The version of angular is 18 and I also used the new standalone configuration model (released in version 14) where the declaration of modules explicitly is not necessary.
