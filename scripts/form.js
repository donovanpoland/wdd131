    const products = [
    //alphabetized by name
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

createFromInputs(products);

document.querySelectorAll('input:required, select:required').forEach((element) => {
  element.addEventListener('blur', () => {
    if (!element.classList.contains('user-interacted')) {
      element.classList.add('user-interacted');
    }
  });
});


document.querySelector("#review-form").addEventListener("submit", function (event) {
  // JS intercepts it
  event.preventDefault();

  // Store submission count
  let count = parseInt(localStorage.getItem("reviewCount")) || 0;
  localStorage.setItem("reviewCount", ++count);

  // Build query string manually to pass form data to review.html
  const form = event.target;
  const formData = new FormData(form);
  const queryString = new URLSearchParams(formData).toString();

  // Redirect with form data
  window.location.href = `${form.action}?${queryString}`;
});

function createFromInputs(products) {
  const form = document.querySelector("#review-form");
  const fieldset = document.createElement("fieldset");
  
  // Create labels
  const required = document.createElement("p");
  required.textContent = "Required";
  required.classList = "required";

  const productNameLabel = document.createElement("label");
  productNameLabel.textContent = "Product Name ";
  productNameLabel.classList = "required";
  productNameLabel.for = "product-name";


  const ratingLabel = document.createElement("label");
  ratingLabel.textContent = "Overall Rating ";
  ratingLabel.classList = "required";
  ratingLabel.for = "stars";


  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date of Installation ";
  dateLabel.classList = "required";
  dateLabel.for = "date-of-install";

  const reviewLabel = document.createElement("label");
  reviewLabel.textContent = "Written Review (Optional) ";
  reviewLabel.for = "review-text";

  const customerNameLabel = document.createElement("label");
  customerNameLabel.textContent = "Your Name (Optional) ";
  customerNameLabel.for = "user-name";

  // Create input/select elements
  const select = document.createElement("select");
  select.required = true;
  select.classList = "required";
  select.id = "product-name";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.required = true;
  dateInput.id = "date-of-install";
  dateInput.name = "date";

  const reviewInput = document.createElement("textarea");
  reviewInput.rows = 4;
  reviewInput.id = "review-text";
  reviewInput.name = "review";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "user-name";
  nameInput.autocomplete = true;

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Send My Review";

  // Append inputs inside their labels
  productNameLabel.appendChild(select);
  dateLabel.appendChild(dateInput);
  reviewLabel.appendChild(reviewInput);
  customerNameLabel.appendChild(nameInput);

  // Populate options for the select
  createOptions(select, products);
  // Add everything to the fieldset
  fieldset.appendChild(required);
  fieldset.appendChild(productNameLabel);
  fieldset.appendChild(ratingLabel);
  CreateStarRating(ratingLabel)
  fieldset.appendChild(dateLabel);
  createCheckboxes(fieldset)
  fieldset.appendChild(reviewLabel);
  fieldset.appendChild(customerNameLabel);
  fieldset.appendChild(submit);
  form.appendChild(fieldset);
}

function createOptions(selectElement, products) {
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.innerHTML = "Please Select &#9662;";
  defaultOption.disabled = true;
  defaultOption.selected = true;

  selectElement.appendChild(defaultOption);

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = toTitleCase(product.name);
    selectElement.appendChild(option);
  }
}

function createCheckboxes(container) {
  const features = ["Design", "Durability", "Ease of Use", "Performance"];

  // Add label/heading
  const intro = document.createElement("p");
  intro.innerHTML = `Which features did you find useful in the product?<br><em>(Check all that apply)</em>`;
  container.appendChild(intro);

  features.forEach((feature) => {
      // Create label that wraps input + text
    let label = document.createElement("label");
    label.classList = "checkbox";
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("name", "features");
      checkbox.setAttribute("value", feature);
    
      // Wrap checkbox and label text together
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(`${feature}`));
      container.appendChild(label);
  });
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function CreateStarRating(container) {
  const starContainer = document.createElement("div");
  starContainer.classList.add("stars");

  // Create radio inputs and labels in reverse order (5 to 1)
  for (let i = 5; i >= 1; i--) {
    const input = document.createElement("input");
    input.type = "radio";
    input.id = `${i}star`;
    input.name = "stars";
    input.value = i;
    input.required = true;

    const label = document.createElement("label");
    label.setAttribute("for", `${i}star`);

    starContainer.appendChild(input);
    starContainer.appendChild(label);
  }

  container.appendChild(starContainer);
}

