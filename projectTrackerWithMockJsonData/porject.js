// for showing this data in table how to call this method form html or can we call this method from js

function getAllProjects() {
  fetch("http://localhost:3000/projects")
    .then((response) => response.json())
    .then((data) => {
      renderTable(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderTable(data) {
  data.forEach((project) => {
    const tbody = document.getElementById("project-list");
    const row = document.createElement("tr");
    // for each project the add,update,delete button not added

    row.innerHTML = `<td>${project.id}</td>
            <td>${project.name}</td>
            <td>${project.status}</td>`;
    row.innerHTML += `<td><button class="btn btn-sm btn-success" onclick="addProjects('${project}')">Add</button></td>`;
    row.innerHTML += `<td><button class="btn btn-sm btn-primary" onclick="updateProject('${project}')">Update</button></td>`;
    row.innerHTML += `<td><button class="btn btn-sm btn-danger" onclick="deleteProject('${project.id}')">Delete</button></td>`;

    tbody.appendChild(row);
  });
  console.log(data);
}

// adding the project the table is not auto updated

function addProjects() {
  const id = prompt("Enter the project id");
  const projectName = prompt("Enter the project name");
  const projectStatus = prompt("Enter the project status");
  const project = {
    id: id.toString(),
    name: projectName.toString(),
    status: projectStatus.toString(),
  };

  console.log(`Add Project logs ${project}`);

  fetch("http://localhost:3000/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  })
    .then((response) => response.json())
    .then((data) => {
      renderTable([data]); // Update only with the newly added project
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateProject(project) {
  fetch(`http://localhost:3000/projects/${project.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Project updated successfully:", data);
      renderTable(data);
    })
    .catch((err) => {
      console.error("Error updating project:", err);
    });
}

// Updating the project with new data
// const updatedProject = {
//   id: "3",
//   name: "Fintech Solution",
//   status: "On Hold",
// };
// updateProject(updatedProject);

// getAllProjects();

function deleteProject(id) {
  fetch(`http://localhost:3000/projects/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      // Refresh the table by removing the deleted item
      const tbody = document.getElementById("project-list");
      const row = tbody
        .querySelector(`tr td:nth-child(1):contains(${id})`)
        .closest("tr");
      tbody.removeChild(row);
      console.log("Project deleted successfully:", response);
    })
    .catch((err) => {
      console.error("Error deleting project:", err);
    });
}

// deleteProject("4");
// getAllProjects();
document.addEventListener("DOMContentLoaded", () => {
  getAllProjects();
});
