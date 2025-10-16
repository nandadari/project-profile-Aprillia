document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
    document.getElementById('refresh-button').addEventListener('click', fetchUserData);
  });
  
  async function fetchUserData() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];
  
      const card = document.getElementById('user-profile');
      card.style.animation = 'none';
      void card.offsetWidth; // Reset animation
      card.style.animation = 'float 4s ease-in-out infinite';
  
      document.getElementById('user-photo').src = user.picture.large;
      document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
      document.getElementById('user-email').innerHTML = `📧 ${user.email}`;
      document.getElementById('user-location').innerHTML = `📍 ${user.location.city}, ${user.location.country}`;
    } catch (err) {
      console.error(err);
      document.getElementById('user-name').textContent = 'Gagal memuat data!';
    }
  }
  