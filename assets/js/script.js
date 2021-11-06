const projects = [
    {
        number: 1,
        name: "expanding-cards",
        imgLink: "1-expanding-cards.png",
        url: "01. Expanding Cards",
    },
    {
        number: 2,
        name: "progress-steps",
        imgLink: "2-progress-steps.png",
        url: "02. Progress Steps",
    },
    {
        number: 3,
        name: "rotating-navigation-animation",
        imgLink: "3-rotating-navigation-animation.png",
        url: "03. Rotating Navigation",
    },
    {
        number: 4,
        name: "hidden-search-widget",
        imgLink: "4-hidden-search-widget.png",
        url: "04. Hidden Search Widget",
    },
    {
        number: 5,
        name: "blurry-loading",
        imgLink: "5-blurry-loading.png",
        url: "05. Blurry Loading",
    },
    {
        number: 6,
        name: "scroll-animation",
        imgLink: "6-scroll-animation.png",
        url: "06. Scroll Animation",
    },
    {
        number: 7,
        name: "split-landing-page",
        imgLink: "7-split-landing-page.png",
        url: "07. Split Landing Page",
    },
    {
        number: 8,
        name: "form-wave",
        imgLink: "8-form-wave.png",
        url: "08. Form Wave Animation",
    },
    {
        number: 9,
        name: "sound-board",
        imgLink: "9-sound-board.png",
        url: "09. Sound Board",
    },
    {
        number: 10,
        name: "dad-jokes",
        imgLink: "10-dad-jokes.png",
        url: "10. Dad Jokes",
    },
    {
        number: 11,
        name: "event-keycodes",
        imgLink: "11-event-keycodes.png",
        url: "11. Event KeyCodes",
    },
    {
        number: 12,
        name: "faq-collapse",
        imgLink: "12-faq-collapse.png",
        url: "12. FAQ Collapse",
    },
    {
        number: 13,
        name: "random-choice-picker",
        imgLink: "13-random-choice-picker.png",
        url: "13. Random Choice Picker",
    },
    {
        number: 14,
        name: "animated-navigation",
        imgLink: "14-animated-navigation.png",
        url: "14. Animated Navigation",
    },
    {
        number: 15,
        name: "incrementing-counter",
        imgLink: "15-incrementing-counter.png",
        url: "15. Incrementing Counter",
    },
    {
        number: 16,
        name: "drink-water",
        imgLink: "16-drink-water.png",
        url: "16. Drink Water",
    },
    {
        number: 17,
        name: "movie-app",
        imgLink: "17-movie-app.png",
        url: "17. Movie App",
    },
    {
        number: 18,
        name: "background-slider",
        imgLink: "18-background-slider.png",
        url: "18. Background Slider",
    },
    {
        number: 19,
        name: "theme-clock",
        imgLink: "19-theme-clock.png",
        url: "19. Theme Clock",
    },
    {
        number: 20,
        name: "button-ripple-effect",
        imgLink: "20-button-ripple-effect.png",
        url: "20. Button Ripple Effect",
    },
    {
        number: 21,
        name: "drag-n-drop",
        imgLink: "21-drag-n-drop.png",
        url: "21. Drag N Drop",
    },
    {
        number: 22,
        name: "drawing-app",
        imgLink: "22-drawing-app.png",
        url: "22. Drawing App",
    },
    {
        number: 23,
        name: "kinetic-loader",
        imgLink: "23-kinetic-loader.png",
        url: "23. Kinetic CSS Loader",
    },
    {
        number: 24,
        name: "content-placeholder",
        imgLink: "24-content-placeholder.png",
        url: "24. Content Placeholder",
    },
    {
        number: 25,
        name: "sticky-navbar",
        imgLink: "25-sticky-navbar.png",
        url: "25. Sticky Navbar",
    },
    {
        number: 26,
        name: "double-vertical-slider",
        imgLink: "26-double-vertical-slider.png",
        url: "26. Double Vertical Slider",
    },
    {
        number: 27,
        name: "toast-notification",
        imgLink: "27-toast-notification.png",
        url: "27. Toast Notification",
    },
    {
        number: 28,
        name: "github-profiles",
        imgLink: "28-github-profiles.png",
        url: "28. Github Profiles",
    },
    {
        number: 29,
        name: "double-click-heart",
        imgLink: "29-double-click-heart.png",
        url: "29. Double Click Heart",
    },
    {
        number: 30,
        name: "auto-text-effect",
        imgLink: "30-auto-text-effect.png",
        url: "30. Auto Text Effect",
    },
    {
        number: 31,
        name: "password-generator",
        imgLink: "31-password-generator.png",
        url: "31. Password Generator",
    },
    {
        number: 32,
        name: "good-cheap-fast",
        imgLink: "32-good-cheap-fast.png",
        url: "32. Good Cheap Fast",
    },
    {
        number: 33,
        name: "notes-app",
        imgLink: "33-notes-app.png",
        url: "33. Notes App",
    },
    {
        number: 34,
        name: "animated-countdown",
        imgLink: "34-animated-countdown.png",
        url: "34. Animated Countdown",
    },
    {
        number: 35,
        name: "image-carousel",
        imgLink: "35-image-carousel.png",
        url: "35. Image Carousel",
    },
    {
        number: 36,
        name: "hoverboard",
        imgLink: "36-hoverboard.png",
        url: "36. Hoverboard",
    },
    {
        number: 37,
        name: "pokedex",
        imgLink: "37-pokedex.png",
        url: "37. Pokedex",
    },
    {
        number: 38,
        name: "mobile-tab-navigation",
        imgLink: "38-mobile-tab-navigation.png",
        url: "38. Mobile Tab Navigation",
    },
    {
        number: 39,
        name: "password-strength-background",
        imgLink: "39-password-strength-background.png",
        url: "39. Password Strength Background",
    },
    {
        number: 40,
        name: "3d-background-boxes",
        imgLink: "40-3d-background-boxes.png",
        url: "40. 3D Background Boxes",
    },
    {
        number: 41,
        name: "verify-account-ui",
        imgLink: "41-verify-account-ui.png",
        url: "41. Verify Account UI",
    },
    {
        number: 42,
        name: "live-user-filter",
        imgLink: "42-live-user-filter.png",
        url: "42. Live User Filter",
    },
    {
        number: 43,
        name: "feedback-ui-design",
        imgLink: "43-feedback-ui-design.png",
        url: "43. Feedback UI Design",
    },
    {
        number: 44,
        name: "custom-range-slider",
        imgLink: "44-custom-range-slider.png",
        url: "44. Custom Range Slider",
    },
    {
        number: 45,
        name: "netflix-mobile-navigation",
        imgLink: "45-netflix-mobile-navigation.png",
        url: "45. Netflix Navigation",
    },
    {
        number: 46,
        name: "quiz-app",
        imgLink: "46-quiz-app.png",
        url: "46. Quiz App",
    },
    {
        number: 47,
        name: "testimonial-box-switcher",
        imgLink: "47-testimonial-box-switcher.png",
        url: "47. Testimonial Box Switcher",
    },
    {
        number: 48,
        name: "random-image-feed",
        imgLink: "48-random-image-feed.png",
        url: "48. Random Image Feed",
    },
    {
        number: 49,
        name: "todo-list",
        imgLink: "49-todo-list.png",
        url: "49. Todo List",
    },
    {
        number: 50,
        name: "insect-catch-game",
        imgLink: "50-insect-catch-game.png",
        url: "50. Insect Catch Game",
    },
];

const projectsEl = document.getElementById("projects");

projects.forEach((project) => {
    const projectEl = document.createElement("div");

    projectEl.innerHTML = `
        <span class="day">Day ${project.number}</span>
        <img src="assets/images/projects-img/${project.imgLink}" alt="${project.name}" />
        <div class="content">
            <h4>${formateProjectName(project.name)}</h4>
            <a
                href="/${project.url}"
                target="_blank"
                class="btn btn-primary"
                >Live Demo</a
            >
        </div>
    `;

    projectsEl.appendChild(projectEl);
});

function formateProjectName(name) {
    return name
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}
