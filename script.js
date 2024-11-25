// Example for task completion
const tasks = document.querySelectorAll('.task-list li');
tasks.forEach(task => {
    task.addEventListener('click', () => {
        task.style.textDecoration = 'line-through';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all menu items
            menuItems.forEach(menu => menu.classList.remove('active'));
            // Add active class to the clicked menu item
            item.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Show the targeted section
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Show the first section by default
    document.getElementById('today-tasks').style.display = 'block';
});
document.addEventListener('DOMContentLoaded', () => {
    // Menu item click navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');

            // Hide all sections and show the selected one
            sections.forEach((section) => {
                section.style.display = section.id === target ? 'block' : 'none';
            });
        });
    });

    // Edit Profile button
    const editProfileButton = document.querySelector('#settings button');
    const editProfileSection = document.getElementById('edit-profile');
    const settingsSection = document.getElementById('settings');

    editProfileButton.addEventListener('click', () => {
        settingsSection.style.display = 'none';
        editProfileSection.style.display = 'block';
    });

    // Save Profile button
    const saveProfileButton = document.getElementById('save-profile');
    const profileName = document.querySelector('.profile h2');
    const profilePicture = document.querySelector('.profile img');
    const nameInput = document.getElementById('edit-name');
    const profilePictureInput = document.getElementById('edit-profile-pic');

    saveProfileButton.addEventListener('click', () => {
        // Update the profile name
        profileName.textContent = nameInput.value;

        // Update the profile picture if a new one is selected
        if (profilePictureInput.files.length > 0) {
            const file = profilePictureInput.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                profilePicture.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }

        // Navigate back to settings
        editProfileSection.style.display = 'none';
        settingsSection.style.display = 'block';
    });

    // Cancel button
    const cancelEditButton = document.getElementById('cancel-edit');
    cancelEditButton.addEventListener('click', () => {
        // Navigate back to settings
        editProfileSection.style.display = 'none';
        settingsSection.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Theme switching logic
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    const body = document.body;

    themeRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.value === 'dark') {
                body.classList.add('dark-mode');  // Add dark mode class
            } else {
                body.classList.remove('dark-mode');  // Remove dark mode class
            }
        });
    });

    // Other functionality here...
});
document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');  // Button to add task
    const taskInput = document.getElementById('task-input');      // Input field for task
    const taskList = document.getElementById('task-list');        // UL element for tasks

    addTaskBtn.addEventListener('click', () => {
        // Get the task description from the input field
        const taskDescription = taskInput.value.trim();

        // Check if the input is not empty
        if (taskDescription) {
            // Create a new list item for the task
            const newTask = document.createElement('li');
            newTask.innerHTML = `
                <span class="time">New Task</span>
                <span>${taskDescription}</span>
            `;

            // Append the new task to the task list
            taskList.appendChild(newTask);

            // Clear the input field after adding the task
            taskInput.value = '';
        } else {
            alert('Please enter a task description.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const changeTheme = document.querySelectorAll('input[name="theme"]');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const languageSelect = document.getElementById('language');
    const privacyCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    // Handle theme change
    changeTheme.forEach((radio) => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'dark') {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        });
    });

    // Handle profile and password changes (These would typically be sent to a server)
    usernameInput.addEventListener('input', () => {
        console.log('New username:', usernameInput.value);
    });

    passwordInput.addEventListener('input', () => {
        console.log('New password:', passwordInput.value);
    });

    // Handle language selection
    languageSelect.addEventListener('change', () => {
        console.log('Selected language:', languageSelect.value);
    });

    // Handle privacy settings toggling
    privacyCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            console.log(`${e.target.checked ? 'Enabled' : 'Disabled'}: ${e.target.labels[0].innerText.trim()}`);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskDescription = taskInput.value.trim();

        // If the task input is not empty
        if (taskDescription) {
            const currentTime = getCurrentTime();
            addTask(taskDescription, currentTime);
            taskInput.value = ''; // Clear the input field after adding the task
        }
    });

    // Function to get the current time in a specific format
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const period = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);

        return `${formattedHours}:${formattedMinutes} ${period}`;
    }

    // Function to add a new task to the task list
    function addTask(taskDescription, time) {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="time">${time}</span>
            <span>${taskDescription}</span>
        `;
        taskList.appendChild(newTask); // Append the new task to the task list
    }
});