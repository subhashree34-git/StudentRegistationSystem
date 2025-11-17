const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const id = document.getElementById("studentId").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  if (!name || !id || !email || !mobile) {
    alert("Please fill all fields!");
    return;
  }

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </td>
  `;

  tableBody.appendChild(newRow);

  alert(`Student "${name}" added successfully!`);
  form.reset();
});

// Handle Edit & Delete
tableBody.addEventListener("click", (e) => {
  const row = e.target.closest("tr");

  // DELETE
  if (e.target.classList.contains("delete-btn")) {
    row.remove();
  }

  // EDIT
  if (e.target.classList.contains("edit-btn")) {
    const cells = row.querySelectorAll("td");

    document.getElementById("name").value = cells[0].innerText;
    document.getElementById("studentId").value = cells[1].innerText;
    document.getElementById("email").value = cells[2].innerText;
    document.getElementById("mobile").value = cells[3].innerText;

    row.remove();
  }
});