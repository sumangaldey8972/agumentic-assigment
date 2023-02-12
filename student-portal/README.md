NAME = Involvio student portal with admin dashboard

to run backend => 1. npm i 2. npm start (please change mongoDb url)

to run frontend => 1. npm i 2. npm start.

Backend Section => 
    1. admin signin : base_url/admin/signin (post request, credentials : username=sumangal, password:sd1234)

    2. Home Route :
        1. base_url/home/mainbanner (get request, response is a image)
        2. base_url/home/mainbanner (post request, response 200, and a success message will be appeared
        note that, this request only for one time. otherwise error message will be appeared)
        3. base_url/home/updatemainbanner/:id (patch request, response 200, and a success message will be appeared)
        4. base_url/home/supportheadline (get request, response is a headline or tag line)
        5. base_url/home/supportheadline (post request, response 200, and a success message will be appeared
        note that, this request only for one time. otherwise error message will be appeared)
        6. base_url/home/supportheadline/:id (patch request, response 200, and a success message will be appeared)
        7. base_url/home/product (get request, response is a list of products)
        8. base_url/home/product (post request, response is 200. successfull message will be appeared)
        9. base_url/home/product/:id (put request, response is 200. successfull message will be appeared, one or more document can be modifed)
        10. base_url/home/product/:id (delete request, response is 200. selected product will be deleted. and success message will be appeared)

    3. contact us Route:
        1. base_url/contact/get (get request, resposne is list of guest user queries)
        2. base_url/contact/create (post request, response 200. will be add one new message or queries to the database)
        3. base_url/contact/update/:id (put request, response is 200. successfull message will be appeared, status of document was change "false" to "true")

Frontend Section:
    Active Pages 
        1. Home Page 
        2. Admin Signin Page (username: sumangal, password: sd1234) 
        3. AdminDashboard Page 4. Contact us Page

here is the live link - https://silly-snickerdoodle-877973.netlify.app/

thank you for your time :)