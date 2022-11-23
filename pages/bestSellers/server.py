from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html", name="Jay")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route

@app.route('/')
def run_first():
   print('Hi, welcome to my first home assignment page')
   # we'll talk about the following two lines after we learn a little more
   # about forms
   # name = request.form['name']
   # email = request.form['email']
   # print(name)
   # print(email)
   # redirects back to the '/' route
   return render_template("/")



@app.route('/ninjas')
def show_user_profile(user):
    print(user)

app.run(debug=True) # run our server

