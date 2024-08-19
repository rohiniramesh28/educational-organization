document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate authentication process
    if (username && password) {
        if (role === 'student') {
            window.location.href = 'student_dashboard.html';
        } else if (role === 'parent') {
            window.location.href = 'parent_dashboard.html';
        } else if (role === 'teacher') {
            window.location.href = 'teacher_dashboard.html';
        }
    } else {
        alert('Please fill in all fields.');
    }
});
