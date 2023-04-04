const login = () => {
    const reqBody = {
        username: document.getElementById("username-form").value,
        password: document.getElementById("password-form").value
    };
    axios.post("http://127.0.0.1:5513/login", reqBody)
        .then(res => {
            if (res.status === 200) {
                window.location.href="http://127.0.0.1:5500/capstone/frontend/main-page.html"
            } else {
                alert("Login failed")
            }
        })
        .catch(error => {
            alert("Login failed")
        });

};

const loginBtn = document.getElementById("loginbtn");
loginBtn.addEventListener('click', login);

const createAccount = () => {
    window.location.href="http://127.0.0.1:5500/capstone/frontend/create-page.html"
};

const createBtn = document.getElementById("createaccount");
createBtn.addEventListener('click', createAccount);
