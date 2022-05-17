let a = document.getElementById("submit_button").addEventListener("click", submit);

function submit() {
    let user = parseInt(document.getElementById("user_id").value);
    // alert(typeof(user);
    // let pass = document.getElementById("user_pass").value;
    let user1 = parseInt(2100291520060);
    let user2 = parseInt(2100291520059);
    let user3 = parseInt(2100291520058);
    let user4 = parseInt(2100291520056);
    let user5 = parseInt(2100291520057);

    switch (user) {
        case user1:
            location.href = "dashboard.html";
            break;

        case user2:
            location.href = "dashboard.html";
            break;

        case user3:
            location.href = "dashboard.html";
            break;

        case user4:
            location.href = "dashboard.html";
            break;

        case user5:
            location.href = "dashboard.html";
            break;

        default:
            alert("wrong id or password");
    }

}

function posted() {
    alert("Posted Succesfully. Will be showm on your dashboard after 24 hrs");
}

function logout(){
    location.href = "index.html";
    alert("Logout Succesfully");
}

function answer(){
    alert("Your answer has been sucessfully submited, will update soon");
    location.reload();
}