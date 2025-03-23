fetch("http://localhost:3000/projects")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      const projectTable = document.getElementById("projectable");
      projectTable.innerHTML += `<tbody> <tr>
<td>${project.id}</td>
<td>${project.name}</td>
<td>${project.status}</td> </tbody>`;
    });
  });
