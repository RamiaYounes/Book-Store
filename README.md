# Book Store

Welcome to the Book Store project! This project is designed for showcasing uploaded books (free, purchased and favorite books), enabling online reading, facilitating downloads, allowing search by (author name,book type and book title),adding rates and comments,  and allowing ordering based on reviews. Additionally, it provides APIs for library systems. The project is developed using Django and Angular

## Table of Contents
- Step by step setup guide (Including some useful hints)
- Cross-Origin Resource Sharing already enabled
- Django and Angular project separated(Modouled)
- Backend developer and front-end can work completely isolated from each other.

## Requirements

- Angular Version 17.3.8
- Python Version 3.10.4
- Django Version 4.0.4


## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

     git clone https://github.com/RamiaYounes/Book-Store.git
   
3. Setup Angular Project:
   - Navigate into the project directory:

       cd Book-Store/library-project
     
   - Install node dependencies

       npm install
     
   - Run the angular server (Optional: required during development only):

       ng serve
     
    Do not close this terminal

   - See check to see if it works in the browser (Optional: It is required during front-end development only)

        http://localhost:4200

4. Setup Django Project:
   - Open a new Terminal and go to django-library

       cd /django-library

   - Create a virtual environment (optional but recommended):

       python -m venv env
 
   - Activate the virtual environment:

       source env/bin/activate

   - Run the server

       python manage.py runserver
     
   - Go to http://localhost:8000



