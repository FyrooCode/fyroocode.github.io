document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code can be added here

    // Smooth scrolling to the "Projects" section
    document.querySelector('nav ul li a[href="#projects"]').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });

    // Smooth scrolling to the top when clicking on the brand
    document.querySelector('.brand').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Language translations
    const translations = {
        en: {
            brand: "BLKRBL",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            intro: "Hi, I'm Bell<br>A fullstack web developer",
            "tools-title": "Tools I Use",
            "projects-title": "Projects",
            "project1-title": "Project 1",
            "project1-desc": "Description of project 1.",
            "project2-title": "Project 2",
            "project2-desc": "Description of project 2.",
            "project3-title": "Project 3",
            "project3-desc": "Description of project 3."
        },
        es: {
            brand: "BLKRBL",
            about: "Acerca de",
            projects: "Proyectos",
            contact: "Contacto",
            intro: "Hola, soy Bell<br>Un desarrollador web fullstack",
            "tools-title": "Herramientas que uso",
            "projects-title": "Proyectos",
            "project1-title": "Proyecto 1",
            "project1-desc": "Descripción del proyecto 1.",
            "project2-title": "Proyecto 2",
            "project2-desc": "Descripción del proyecto 2.",
            "project3-title": "Proyecto 3",
            "project3-desc": "Descripción del proyecto 3."
        },
        id: {
            brand: "BLKRBL",
            about: "Tentang",
            projects: "Proyek",
            contact: "Kontak",
            intro: "Hai, saya Bell<br>Seorang pengembang web fullstack",
            "tools-title": "Alat yang Saya Gunakan",
            "projects-title": "Proyek",
            "project1-title": "Proyek 1",
            "project1-desc": "Deskripsi proyek 1.",
            "project2-title": "Proyek 2",
            "project2-desc": "Deskripsi proyek 2.",
            "project3-title": "Proyek 3",
            "project3-desc": "Deskripsi proyek 3."
        },
        jp: {
            brand: "BLKRBL",
            about: "約",
            projects: "プロジェクト",
            contact: "連絡先",
            intro: "こんにちは、私はベルです<br>フルスタックウェブ開発者",
            "tools-title": "使用するツール",
            "projects-title": "プロジェクト",
            "project1-title": "プロジェクト 1",
            "project1-desc": "プロジェクト 1 の説明。",
            "project2-title": "プロジェクト 2",
            "project2-desc": "プロジェクト 2 の説明。",
            "project3-title": "プロジェクト 3",
            "project3-desc": "プロジェクト 3 の説明。"
        }
        // Add more languages as needed
    };

    // Function to update text content based on selected language
    function updateLanguage(language) {
        document.querySelectorAll('[data-translate]').forEach(function(element) {
            const key = element.getAttribute('data-translate');
            element.innerHTML = translations[language][key];
        });
    }

    // Event listener for language switcher
    document.getElementById('language-switcher').addEventListener('change', function(event) {
        const selectedLanguage = event.target.value;
        updateLanguage(selectedLanguage);
    });

    // Set default language
    updateLanguage('en');

    // Scroll event listener for fade-out effect
    window.addEventListener('scroll', function() {
        const scrollDown = document.querySelector('.scroll-down');
        if (window.scrollY > 100) { // Adjust the scroll value as needed
            scrollDown.classList.add('fade-out');
        } else {
            scrollDown.classList.remove('fade-out');
        }
    });
});