function filterRecipes() {
      const input = document.getElementById('searchInput');
      const filter = input.value.toLowerCase();
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? '' : 'none';
      });
    }

    document.getElementById('recipeForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const desc = document.getElementById('description').value;
      const img = document.getElementById('image').value;

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<img src="${img}" alt="${title}"><h3>${title}</h3><p>${desc}</p>`;
      document.getElementById('recipeList').appendChild(card);
      this.reset();
    });