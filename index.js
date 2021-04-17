var type = new Typed('.typing-text', {
    strings: ['Python Developer', 'Video Editor', 'C/C++ Developer', 'Django Developer'],
    typeSpeed: 130,
    loop: true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () => {
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));