// Typing effect for hero text
const heroText = document.getElementById('hero-text');
let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Animate progress bars on scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            skill.style.width = skill.style.width; // Trigger animation
        }
    });
});