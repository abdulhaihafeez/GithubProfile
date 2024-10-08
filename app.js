async function fetchProfile() {
    const username = document.getElementById('github-username').value;
    
    if (username === '') {
        alert('Please enter a GitHub username');
        return;
    }

    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.message === "Not Found") {
            alert('User not found');
            return;
        }

        document.getElementById('profile-box').classList.remove('hidden');
        document.getElementById('profile-img').src = data.avatar_url;
        document.getElementById('profile-name').textContent = data.name ? data.name : 'No Name Available';
        document.getElementById('repo-count').textContent = data.public_repos;
        document.getElementById('followers-count').textContent = data.followers;
        document.getElementById('following-count').textContent = data.following;
        document.getElementById('profile-url').href = data.html_url;
        document.getElementById('profile-url').textContent = `View ${data.login}'s GitHub Profile`;

    } catch (error) {
        alert('Error fetching profile');
    }
}