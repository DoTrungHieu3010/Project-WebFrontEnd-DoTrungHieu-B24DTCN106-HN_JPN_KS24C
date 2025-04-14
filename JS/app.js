let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
    let usernameElement = document.getElementById('username');
    let welcomeHeading = document.querySelector('.container h1');
    if (usernameElement) {
        usernameElement.textContent = `Hi, ${currentUser.firstName} ${currentUser.lastName}`;
    }
    if (welcomeHeading) {
        welcomeHeading.textContent = `Welcome to learning, ${currentUser.firstName} ${currentUser.lastName}!`;
    }
    let logoutButton = document.querySelector('.btn.btn-danger');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            let logoutModal = new bootstrap.Modal(document.getElementById('notificationModal'));
            document.getElementById('notificationMessage').textContent = 'Are you sure you want to logout?';
            logoutModal.show();
            document.getElementById('confirmLogout').addEventListener('click', function () {
                localStorage.removeItem('currentUser');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log out completed!",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = "../index.html";                });
            });
        });
    }
} 