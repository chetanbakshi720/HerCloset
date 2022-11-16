form.addEventListener("submit", () => {
    const register = {
        uname: uname.value,
        password: password.value,
        email: email.value,
        contact: contact.value
    }
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            var success = document.getElementById("success");
            var error = document.getElementById("error");

            if(data.status == "error"){
                success.style.display = "none";
                error.style.display = "block";
                error.innerHTML = data.error;
            }else{
                success.style.display = "block";
                error.style.display = "none";
                success.innerHTML = data.success;
            }
        })
})