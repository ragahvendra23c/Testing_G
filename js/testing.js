
const firebaseConfig = {
    databaseURL: "https://gtyde-academy-default-rtdb.firebaseio.com"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()


// request query
function TestingRequestQuery(event){
    event.preventDefault()
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var mobile=document.getElementById("mobile").value
    var course=document.getElementById("course").value
    console.log(name,email,mobile,course)

    var listRef = database.ref('Testing/')
var newRef = listRef.push()
newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course":course
})
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("name").value=""
   document.getElementById("email").value=""
   document.getElementById("mobile").value=""
    document.getElementById("course").value=""
}).catch(()=>{
    alert("Network Error, So try after some time "+ err)
    document.getElementById("name").value=""
   document.getElementById("email").value=""
   document.getElementById("mobile").value=""
    document.getElementById("course").value=""
})
}





// contact query
function TestingContactQuery(event){
    event.preventDefault()
    var name1=document.getElementById("test_name1").value
    var email1=document.getElementById("test_email1").value
    var mobile1=document.getElementById("test_mobile1").value
    var course1=document.getElementById("test_course1").value
    console.log(name1,email1,mobile1,course1)

    var listRef = database.ref('Testing/')
var newRef = listRef.push()
newRef.set({
    'name1': name1,
    'email1': email1,
    'mobile1': mobile1,
    "course1":course1
})
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("test_name1").value=""
   document.getElementById("test_email1").value=""
   document.getElementById("test_mobile1").value=""
    document.getElementById("test_course1").value=""
}).catch(()=>{
    alert("Network Error, So try after some time "+ err)
    document.getElementById("test_name1").value=""
    document.getElementById("test_email1").value=""
    document.getElementById("test_mobile1").value=""
     document.getElementById("test_course1").value=""
})
}





// request data
