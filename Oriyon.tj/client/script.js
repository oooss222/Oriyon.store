 
        // Basic interactivity for the demo
        document.addEventListener('DOMContentLoaded', function() {
            // Favorite button functionality
            const favoriteButtons = document.querySelectorAll('.favorite-btn');
            favoriteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.classList.toggle('active');
                    if (this.classList.contains('active')) {
                        this.innerHTML = '<i class="fas fa-heart"></i>';
                    } else {
                        this.innerHTML = '<i class="far fa-heart"></i>';
                    }
                });
            });
            
            // Categories menu toggle
            const categoriesBtn = document.querySelector('.categories-btn');
            const categoriesMenu = document.querySelector('.categories-menu');
            
            categoriesBtn.addEventListener('click', function() {
                categoriesMenu.style.display = categoriesMenu.style.display === 'none' ? 'grid' : 'none';
            });
            
            // City buttons
            const cityButtons = document.querySelectorAll('.city-btn');
            cityButtons.forEach(button => {
                button.addEventListener('click', function() {
                    cityButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Language selector
            const langButtons = document.querySelectorAll('.language-selector button');
            langButtons.forEach(button => {
                button.addEventListener('click', function() {
                    langButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Simulate loading recommended items
            const loadMore = document.querySelector('.view-all');
            loadMore.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Ворид кардани eълонҳои иловагӣ...');
            });
        });