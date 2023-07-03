
const firebaseConfig = {
    databaseURL: "https://gtyde-academy-default-rtdb.firebaseio.com"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()


// request query
function DevopsRequestQuery(event){
    event.preventDefault()
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var mobile=document.getElementById("mobile").value
    var course=document.getElementById("course").value
    console.log(name,email,mobile,course)

    var listRef = database.ref('Devops/')
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
function DevopsContactQuery(event){
    event.preventDefault()
    var name1=document.getElementById("dev_name1").value
    var email1=document.getElementById("dev_email1").value
    var mobile1=document.getElementById("dev_mobile1").value
    var course1=document.getElementById("dev_course1").value
    console.log(name1,email1,mobile1,course1)

    var listRef = database.ref('Devops/')
var newRef = listRef.push()
newRef.set({
    'name1': name1,
    'email1': email1,
    'mobile1': mobile1,
    "course1":course1
})
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("dev_name1").value=""
   document.getElementById("dev_email1").value=""
   document.getElementById("dev_mobile1").value=""
    document.getElementById("dev_course1").value=""
}).catch(()=>{
    alert("Network Error, So try after some time "+ err)
    document.getElementById("dev_name1").value=""
    document.getElementById("dev_email1").value=""
    document.getElementById("dev_mobile1").value=""
     document.getElementById("dev_course1").value=""
})
}





// request data




























// function DevopsRequestQuery(event){
//     event.preventDefault()
//     let name = document.getElementById("name")
//     let email = document.getElementById("email")
//     let mobile = document.getElementById("mobile")
//     let course = document.getElementById("course")
//     // console.log(name.value)
//     let std_data={
//         name:name.value,
//         email:email.value,
//         mobile:mobile.value,
//         course:course.value
//     }
//     fetch("https://dreamdrive-enquiry.onrender.com/student",{
//         method:"POST",
//         headers:{"Content-type":"application/json"},
//         body:JSON.stringify(std_data)

//     }).then(()=>{
//         alert("We will get back to you very Soon...!!")
//         name.value=""
//         email.value=""
//         mobile.value=""
//         course.value=""
//     }).catch((err)=>{
//         alert("Network Error, So try after some time "+ err)
//         name.value=""
//         email.value=""
//         mobile.value=""
//         course.value=""
//     })
   
// }



// function DevopsContactQuery(event){
//     event.preventDefault()
//     let name = document.getElementById("name1")
//     let email = document.getElementById("email1")
//     let mobile = document.getElementById("mobile1")
//     let course = document.getElementById("course1")
//     let std_data={
//         "name":name.value,
//         "email":email.value,
//         "mobile":mobile.value,
//         "course":course.value
//     }
//     fetch("https://dreamdrive-enquiry.onrender.com/student",{
//         method:"POST",
//         headers:{"Content-type":"application/json"},
//         body:JSON.stringify(std_data)

//     }).then(()=>{
//         alert("We will get back to you very Soon...!!")
//         name.value=""
//         email.value=""
//         mobile.value=""
//         course.value=""
//     }).catch((err)=>{
//         alert("Network Error, So try after some time "+ err)
//         name.value=""
//         email.value=""
//         mobile.value=""
//         course.value=""
//     })
// }
 

