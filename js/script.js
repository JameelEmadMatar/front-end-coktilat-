document.querySelectorAll('.counselor-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove expanded class from all cards
        document.querySelectorAll('.counselor-card').forEach(c => {
            c.classList.remove('expanded');
        });
        // Add expanded class to the clicked card
        card.classList.add('expanded');
    });

    // Prevent the card click event from firing when clicking buttons
    card.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const description = button.previousElementSibling;
        description.style.webkitLineClamp = 'initial';
        button.style.display = 'none';
    });
});

document.querySelectorAll('.collapse-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.counselor-card');
        card.classList.remove('expanded');
    });
});