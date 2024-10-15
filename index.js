document.addEventListener('DOMContentLoaded', function() {
    // Existing smooth scrolling functionality
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const windowHeight = window.innerHeight;
                const sectionHeight = targetElement.offsetHeight;
                const sectionTop = targetElement.offsetTop;
                const scrollTo = sectionTop - (windowHeight / 2) + (sectionHeight / 2);

                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }

            const mobileNav = document.querySelector('.mobile-nav');
            if (mobileNav.classList.contains('is-active')) {
                mobileNav.classList.remove('is-active');
            }
        });
    });

    const menuIcon = document.querySelector('#hamburger-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    menuIcon.addEventListener('click', function(e) {
        e.preventDefault(); // Megakadályozza az alapértelmezett viselkedést
        mobileNav.classList.toggle('is-active'); // Toggle mobil navigáció
    });

    // React component
    function App() {
        return (
            <div>
                <h1>Welcome to React in Your Project!</h1>
            </div>
        );
    }

    // Render the React application
    ReactDOM.render(<App />, document.getElementById('root'));
});