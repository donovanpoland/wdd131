// Scroll to second language when primary language is chosen
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('second-lang').scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to concept section when languages are chosen
document.querySelectorAll('.second-lang [data-language]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('concept-section').scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to output section when concept is chosen
document.querySelectorAll('[data-category]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('output-section').scrollIntoView({ behavior: 'smooth' });
  });
});