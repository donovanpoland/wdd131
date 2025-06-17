let primaryLang = '';
let secondaryLang = '';
let selectedConcept = '';


function setActive(groupSelector, clickedBtn) {
  document.querySelectorAll(groupSelector).forEach(button => {
    button.classList.remove('active');
  });
  clickedBtn.classList.add('active');
}

// Scroll to second language when primary language is chosen
document.querySelectorAll('.current-lang [data-language]').forEach(button => {
    button.addEventListener('click', () => {
        primaryLang = button.dataset.language;
        setActive('.current-lang [data-language]', button);
        document.getElementById('second-lang').scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to concept section when languages are chosen
document.querySelectorAll('.second-lang [data-language]').forEach(button => {
    button.addEventListener('click', () => {
        secondaryLang = button.dataset.language;
        setActive('.second-lang [data-language]', button);
        document.getElementById('concept-section').scrollIntoView({ behavior: 'smooth' });
  });
});
// Scroll to output section when concept is chosen
document.querySelectorAll('[data-category]').forEach(button => {
    button.addEventListener('click', () => {
        selectedConcept = button.dataset.category;
        setActive('[data-category]', button);
        document.getElementById('output-section').scrollIntoView({ behavior: 'smooth' });

        loadCodexData(primaryLang, secondaryLang, selectedConcept);
  });
});

function loadCodexData(lang1, lang2, concept) {
    const output = document.getElementById('concept-content');
    const title = document.getElementById('concept-title');

    const langDisplay = {
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        python: "Python",
        java: "Java",
        csharp: "C#",
        sql: "SQL"
    };

    const lang1Key = lang1.toLowerCase();
    const lang2Key = lang2.toLowerCase();

    title.textContent = `${capitalize(concept)} in ${langDisplay[lang1Key]} vs ${langDisplay[lang2Key]}`;

    const lang1Data = codexData[concept]?.[lang1Key] || "No data available.";
    const lang2Data = codexData[concept]?.[lang2Key] || "No data available.";

        
    output.innerHTML = `
        <div class="code-block">
        <h3>${capitalize(lang1)}</h3>
        <pre><code>${lang1Data}</code></pre>
        </div>
        <br>
        <div class="code-block">
        <h3>${capitalize(lang2)}</h3>
        <pre><code>${lang2Data}</code></pre>
        </div>
    `;

    console.log("Lang1:", lang1);
    console.log("Lang2:", lang2);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//data inside <pre> beware of format
const codexData = {
    loops: {
        html: `&lt;!-- HTML does not support loops directly. 
You would use templating engines or JavaScript to loop content.
--&gt;`,
      
        css: `/* CSS cannot do traditional loops. 
Use pre-processors like SASS or use :nth-child selectors for patterns
*/`,
        
        javascript: `for (let i = 0; i < 5; i++) {
                        console.log(i);
                    }`
  },

    conditionals: {
        html: `&lt;!-- HTML does not support conditionals directly.
            Use scripting (JavaScript) or conditional rendering through frameworks like React or templating engines. --&gt;`,
        
        css: `/* CSS doesn't support conditionals directly.
You can simulate conditional styling with media queries, :has(), or attribute selectors
*/`,
        
        javascript: `if (user.isLoggedIn) {
            showDashboard();
            } else {
            showLogin();
            }`
  },

  variables: {
        html: `&lt;!-- HTML does not have variable support. 
Dynamic values are usually injected with JavaScript or templating engines.
--&gt;`,
      
        css: `:root {
            --primary-color: #00f5d4;
            }

            button {
            background-color: var(--primary-color);
            }`,
    
        javascript: `let userName = "CodeMaster";
            const maxScore = 100;
            var oldStyleVar = "legacy";`
    }
};