



function createFromInputs(products) {
    const form = document.querySelector("form");

    const fieldset = document.createElement("fieldset");

    // Create labels
    const productNameLabel = document.createElement("label");
    productNameLabel.textContent = "Product Name ";

    const ratingLabel = document.createElement("label");
    ratingLabel.textContent = "Overall Rating ";

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date of Installation ";

    const reviewLabel = document.createElement("label");
    reviewLabel.textContent = "Written Review (Optional) ";

    const customerNameLabel = document.createElement("label");
    customerNameLabel.textContent = "Your Name (Optional) ";

    // Create input/select elements
    const select = document.createElement("select");
    select.style.appearance = "none";

    const ratingInput = document.createElement("input");
    ratingInput.type = "number";
    ratingInput.min = 1;
    ratingInput.max = 5;

    const dateInput = document.createElement("input");
    dateInput.type = "date";

    const reviewInput = document.createElement("textarea");
    reviewInput.rows = 4;

    const nameInput = document.createElement("input");
    nameInput.type = "text";

    const submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Send My Review"

    // Append inputs inside their labels
    productNameLabel.appendChild(select);
    ratingLabel.appendChild(ratingInput);
    dateLabel.appendChild(dateInput);
    reviewLabel.appendChild(reviewInput);
    customerNameLabel.appendChild(nameInput);

    // Populate options for the select
    createOptions(select, products);

    // Add everything to the fieldset
    fieldset.appendChild(productNameLabel);
    fieldset.appendChild(ratingLabel);
    fieldset.appendChild(dateLabel);
    createCheckboxes(fieldset)
    fieldset.appendChild(reviewLabel);
    fieldset.appendChild(customerNameLabel);
    fieldset.appendChild(submit)

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
        const label = document.createElement("label");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", feature)
        checkbox.setAttribute("value","yes");

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
