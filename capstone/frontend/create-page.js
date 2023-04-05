const createUser = () => {
    const reqBody = {
        username: document.getElementById("emailAddress").value,
        verifyEmail: document.getElementById("verifyEmail").value,
        password: document.getElementById("password").value,
        verifyPassword: document.getElementById("verifyPassword").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        zipcode: document.getElementById("zipcode").value
    };
    axios.post("http://127.0.0.1:5513/createUser", reqBody)
        .then(res => {
            if (res.status === 200) {
                window.location.href="http://127.0.0.1:5500/capstone/frontend/main-page.html"
            } else {
                alert("Create user failed")
            }
        })
        .catch(error => {
            alert("Create user failed")
        });

};

const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener('click', createUser);
