form.addEventListener("submit", () => {
    const login = {
        email: email.value,
        password: password.value,
    }
    fetch('/api/login', {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            var success = document.getElementById("success");
            var error = document.getElementById("error");
            if(data.status == 'error'){
                success.style.display = "none";
                error.style.display = "block";
                error.innerHTML = data.error;
            }else{
                success.style.display = "block";
                error.style.display = "None";
                success.innerHTML = data.sucess;
            }
        })
})