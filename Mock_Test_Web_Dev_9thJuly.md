# 1. DOM Manipulation: Create a page with a square box of size 300x300 on the page which will be red initially, upon clicking the red box it should change the color to yellow and the size should be doubled

> Solution

## HTML, CSS, JS

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Box Color</title>
    <style>
        body{
            overflow: hidden;
        }
        .container{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #box{
            width: 300px;
            height: 300px;
            background-color: rgb(255, 54, 54);
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="box" onclick="changeColor()"></div>
    </div>

    <script>
        let box = document.getElementById('box')
        let height = box.clientHeight
        let width = box.clientWidth

        const changeColor = () => {
            box.style.width = (width * 2) + 'px'
            box.style.height = (height * 2) + 'px'
            box.style.backgroundColor = "rgb(255, 238, 54)"
        }
    </script>
</body>
</html>
```


# 2. Create a app where you have an input box and whenever a user types something in the input box and hits submit it should be added on the webpage below the input box

> Solution

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Todo Like App</title>
</head>
<body>
    <div class="container">
        <div class="formContainer">
            <form class="form" onsubmit="addTodo(event)">
                <input type="text" name="" id="inputBox" class="input" placeholder="Type something...">
                <button type="submit" class="btnSubmit">Add</button>
            </form>
        </div>


        <div class="todos" id="todos">

        </div>
    </div>
</body>
</html>
```

## CSS
```css
*{
    padding: 0;
    margin: 0;
}

body{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}


.container{
    width: 100vw;
    min-height: 90vh;
    height: max-content;
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
}

.formContainer{
    width: 100vw;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form{
    width: 600px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(37, 255, 37);
    border-radius: 5px;
}

.input{
    width: 500px;
    height: 100%;
    text-indent: 10px;
    border: none;
    outline: none;
    background: #ebebeb;
    box-shadow: 0px 0px 60px #0000005d;
    border-radius: 5px 0 5px 0;
}

.btnSubmit{
    width: 100px;
    height: 100%;
    background: rgb(37, 255, 37);
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.btnSubmit:hover{
    background: rgb(77, 255, 77);
    transition: 0.3s ease-in-out;
}

.todos{
    width: 600px;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
}

.todoItem{
    width: 100%;
    min-height: 40px;
    height: max-content;
    border-radius: 5px;
    background: #4f6fff;
    padding: 5px;
    display: flex;
    align-items: center;
}

.todoText{
    font-size: 18px;
    color: #000000;
}
```

## JS
```javascript
const addTodo = e => {
    e.preventDefault()
    let todoContainer = document.getElementById("todos")
    let text = document.getElementById("inputBox").value
    let todoItem = document.createElement('div')
    todoItem.classList.add('todoItem')
    todoItem.innerHTML = `<h2 class="todoText">${text}</h2>`
    todoContainer.prepend(todoItem)
}
```

# 3. Fetch data from the JSON placeholder API and display it in the browser. Also, implement the skeleton loader which will be displayed when the data is getting fetched. (No library should be used for implementing the skeleton loader)

> Solution 

## HTML 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Fetching Data | JSON Placeholder API</title>
</head>
<body>
    <header>
        Data Fetch From JSON Placeholder API
    </header>
    <div class="container">
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
        <div class="card card_skeleton">
            <div class="card_title card_skeleton_title"></div>
            <div class="card_body"></div>
        </div>
    </div>
</body>
</html>
```

## CSS
```css
*{
    padding: 0;
    margin: 0;
}

body{
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background: #c9c9c9;
}

header{
    width: 100vw;
    height: 70px;
    background: #111;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    box-shadow: 0px 0px 60px #1111117d;
}

.container{
    width: calc(100vw - 60px);
    min-height: 100vh;
    height: max-content;
    padding: 30px;
    margin-top: 70px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.card{
    margin-top: 10px;
    width: 380px;
    min-height: 200px;
    height: max-content;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #0000008a;
    box-shadow: 0px 0px 10px #00000058;
}

.card_skeleton{
    background-color: #ededed;
    background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, .5) 50%,
      rgba(255, 255, 255, 0) 60%
    ) #ededed;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
    box-shadow: none;
    border: none;
}

.card_title{
    width: calc(100% - 20px);
    min-height: 40px;
    height: max-content;
    padding: 5px 10px;
    background: #202020;
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    color: #d4d4d4;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.card_skeleton_title{
        background-color: #d9d9d9;
    background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, .5) 50%,
      rgba(255, 255, 255, 0) 60%
    ) #d9d9d9;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
}


.card_body{
    width: calc(100% - 20px);
    height: max-content;
    padding: 10px;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

@keyframes loading {
    to {
      background-position-x: -20%;
    }
  }
  
```

## JS
```javascript
let jsonData = []
let container = document.querySelector('.container')
window.onload = (ev) => {
    getData()
}

const loadDataInDOM = () => {
    if(jsonData.length > 0){
        container.innerHTML = ''
        jsonData.forEach(data => {
            let template = document.createElement('div')
            template.classList.add('card')
            template.innerHTML = `
            <div class="card_title">${data.title}</div>
            <div class="card_body">${data.body}</div>
            `

            container.append(template)
        })
    }else{
        getData()
    }
}

const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((response) => {
        jsonData = response
        loadDataInDOM()
        console.log(jsonData);
    }).catch(e => {
        alert(e)
    })
}
```



# 4. Build a responsive Navbar, on smaller screens it should be a hamburger menu which on click should reveal the menu items nicely, and on larger screens they should be displayed directly on the screen.

> Solution

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ham-bar</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="header_logo">Ham-Bar</div>
        <nav class="header_nav">
            <ul class="nav">
                <li class="nav_links">Products</li>
                <li class="nav_links">Pricing</li>
                <li class="nav_links">Docs</li>
                <li class="nav_links">About</li>
                <li class="nav_links">Contact Us</li>
                <li class="login">Login</li>
            </ul>
        </nav>
        <div class="hamburger" onclick="toggleMenu()">
            <i class="fa-solid fa-bars"></i>
        </div>
    </header>
</body>
</html>
```
## CSS
```css
*{
    padding: 0;
    margin: 0;
}

body{
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background: #c9c9c9;
}

header{
    width: calc(100vw - 60px);
    height: 70px;
    padding: 0 30px;
    background: #111;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 20px;
    box-shadow: 0px 0px 60px #1111117d;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.header_nav,.nav{
    height: 100%;
    width: max-content;
}

.nav{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    list-style: none;
}

.nav_links{
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.nav_links:hover{
    color: #c9c7c7;
    transition: 0.1s ease-in-out;
}

.login{
    margin-left: 20px;
    background: #32ff4a;
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 5px;
    color: #111;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 0px 10px #32ff4a36;
    transition: 0.3s ease-in-out;
}

.login:hover{
    box-shadow: none;
    transition: 0.3s ease-in-out;
}

.hamburger{
    padding: 5px 10px;
    border: 2px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    display: none;
}

.hamburger:hover{
    border: 2px solid #32ff4a;
    color: #32ff4a;
    transition: 0.3s ease-in-out;
}

@media (max-width: 720px) {
    .hamburger{
        display: unset;
    }

    .header_nav{
        display: none;
        position: fixed;
        right: 0;
        top: 70px;
        height: calc(100vh - 70px);
        background: #111;
        width: 200px;
        border-top: 1px solid #75ff53;
    }

    .nav{
        flex-direction: column;
        justify-content: flex-start;
        gap: 0;
    }

    .nav_links{
        margin-top: 20px;
    }

    .login{
        margin-top: 30px;
        margin-left: 0;
        width: 180px;
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

}
```

## JS
```javascript
let count = 0
let hamburger = document.querySelector('.hamburger')
let header_nav = document.querySelector('.header_nav')

const toggleMenu = () => {
    if(count % 2 === 0){
        hamburger.style.color = "#32ff4a"
        hamburger.style.border = "2px solid #32ff4a"
        header_nav.style.display = 'unset'
    }else{
        hamburger.style.color = "#fff"
        hamburger.style.border = "2px solid #fff"
        header_nav.style.display = 'none'
    }
    count++
}
```


# 5. Create a form with proper form validation using JavaScript (name, email, phone number, password, age, gender, date, color picker)

> Solution

## Html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
</head>
<body>
    <div class="container">
        <div class="successMessage">Validated Successfully.</div>
        <form action="#" class="validate_form" id="validate_form">
            <h1 class="form_title">Validation Form</h1>
            <hr>
            <div class="input_container">
                <span>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="User fullname...">                
                </span>
    
                <span>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="User email...">                
                </span>
    
                <span>
                    <label for="phone">Phone</label>
                    <input type="number" name="phone" id="phone" placeholder="User phone number...">                
                </span>
    
                <span>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password">                
                </span>
    
                <span>
                    <label for="confirm_password">Confirm Password</label>
                    <input type="text" name="confirm_password" id="confirm_password" placeholder="Confirm Password">                
                </span>
    
                <span>
                    <label for="age">Age</label>
                    <input type="number" name="age" id="age" placeholder="User age...Ex. 30">                
                </span>
    
                <span>
                    <label for="gender">Gender</label>
                    <select name="gender" id="gender">
                        <option value="choose">Choose</option>
                        <option value="male">Male</option>
                        <option value="female">female</option>
                        <option value="not_disclosed">Prefer not to say</option>
                    </select>                
                </span>
    
                <span>
                    <label for="date">Date</label>
                    <input type="date" name="date" id="date">                
                </span>
    
                <span>
                    <label for="color">Color</label>
                    <input type="color" name="color" id="color">                
                </span>
            </div>

            <button type="submit" class="validate_btn" onclick="validate(event)">Validate</button>
        </form>
    </div>
</body>
</html>
```

## CSS
```css
*{
    padding: 0;
    margin: 0;
}

body{
    width: 100%;
    height: 100%;
    background: #333;
}

.container{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.validate_form{
    width: 600px;
    height: max-content;
    padding: 10px;
    border-radius: 10px;
    background: #111;
    color: #ebebeb;

    position: relative;
    top: 0;
    left: 0;
}

.input_container{
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 20px;
}

.form_title{
    margin-bottom: 10px;
}

span{
    width: 100%;
    display: flex;
    flex-direction: column;
}

label{
    margin-bottom: 5px;
    font-size: 18px;
}

input{
    margin-bottom: 10px;
    border: none;
    height: 30px;
    text-indent: 5px;
    outline: none;
    border-radius: 5px;
    border: 2px solid transparent;
}

select{
    margin-bottom: 10px;
    border: none;
    height: 30px;
    text-indent: 5px;
    outline: none;
    border-radius: 5px;
    border: 2px solid transparent;
}

.validate_btn{
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    background: cyan;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-top: 20px;
}

.successMessage{
    width: max-content;
    padding: 10px 40px;
    border-radius: 5px;
    background: #37ff83;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    top: 30px;
    right: 30px;
    display: none;
}
```

## Javascript
```javascript
let prev 
const validate = (event) => {
    event.preventDefault()
    prev && (prev.style.border = "2px solid transparent")

    let errorStyle = {
        border: "1px solid red;"
    }

    let form = document.getElementById("validate_form")
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let password = document.getElementById("password")
    let confirm_password = document.getElementById("confirm_password")
    let age = document.getElementById("age")
    let gender = document.getElementById("gender")
    let date = document.getElementById("date")
    let color = document.getElementById("color")
    let emailRegEx = new RegExp(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/)
    let successMessage = document.querySelector('.successMessage')

    if(name.value === ''){
        prev = name
        name.style.border = "2px solid red"
        return
    }else if(email.value === '' || emailRegEx.test(email.value)){
        prev = email
        email.style.border = "2px solid red"
        return
    }else if(phone.value === ''){
        prev = phone
        phone.style.border = "2px solid red"
        return
    }else if(password.value !== confirm_password.value || password.value === '' || confirm_password.value === ''){
        prev = password
        password.style.border = "2px solid red"
        return
    }else if(age.value === ''){
        prev = age
        age.style.border = "2px solid red"
        return
    }else if(gender.value === "choose"){
        prev = gender
        gender.style.border = "2px solid red"
        return
    }else if(date.value === ''){
        prev = date
        date.style.border = "2px solid red"
        return
    }else if(color.value === '#000000'){
        prev = color
        color.style.border = "2px solid red"
        return
    }

    successMessage.style.display = "block"

    setTimeout(()=>{
        successMessage.style.display = "none"
    },2000)

    return
}
```

# 6. Create a custom modal window using HTML, CSS, and JavaScript. On clicking a button the modal window should appear and the user can click outside the modal window to close the modal along with a close button which is inside the modal. Also when the modal is open the window should not be scrollable.

> Solution

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ham-bar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button class="openModal" onclick="openModal()">
        Open Modal
    </button>


    <div class="container">
    <div class="closingContainer" onclick="closeModal()"></div>
        <div class="modal" onclick="">
            <div class="closeModal" onclick="closeModal()">x</div>
        </div>
    </div>
</body>
</html>
```

## CSS
```css
body{
    width: 100%;
    height: 200vh;
    overflow-x: hidden;
}

.openModal{
    width: 150px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #38ff60;
    border: none;
    border-radius: 10px;
    margin: auto;
    margin-top: 300px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container,.closingContainer{
    display: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}

.closingContainer{
    z-index: 500;
}

.modal{
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background: #2f2f2f;
    position: relative;
    top: 0;
    z-index: 1000;
}

.closeModal{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff3838;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
}
```

## JS
```javascript
    let container = document.querySelector('.container')
    let closingContainer = document.querySelector('.closingContainer')

    const openModal = () => {
        container.style.display = 'flex'
        closingContainer.style.display = 'flex'

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    const closeModal = () => {
        container.style.display = 'none'
        closingContainer.style.display = 'none'
        window.onscroll = function() {};
    }
```

