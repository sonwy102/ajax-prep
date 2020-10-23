import random

from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    """Show index page."""
    return render_template("index.html")



@app.route('/api/profile', methods=['POST'])
def profile():
    """Return results from profile form."""

    fullname = request.form.get('name')
    age = request.form.get('age')
    occupation = request.form.get('occupation')
    salary = request.form.get('salary')
    education = request.form.get('education')
    state = request.form.get('state')
    city = request.form.get('city')
    garden = request.form.get('garden')
    tv = request.form.get('tv')
    
    return jsonify({'fullname': fullname, 
                    'age': age,
                    'occupation': occupation,
                    'salary': salary,
                    'education': education,
                    'state': state,
                    'city': city,
                    'garden': garden,
                    'tv': tv})



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")