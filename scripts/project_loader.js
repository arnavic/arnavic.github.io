document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the JSON file
    fetch('/scripts/projects.json')
        .then(response => response.json())
        .then(data => {
            // Iterate through the projects and create div elements
            data.projects.forEach(project => {
                createProjectElement(project);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to create project div elements
    function createProjectElement(project) {
        // Create a new div element
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        
        // Populate the div with project information
        var innerHTML = `
            <img src="${project.image_link}"/>
            <div>
                <h2>${project.name}</h2>
                <p>${project.details}</p>
        `;

        if (project.publication_link && project.publication_link != "") {
            innerHTML += `<a href="${project.publication_link}" target="_blank">Publication</a>`
        }

        if (project.learn_more_link && project.learn_more_link != "") {
            innerHTML += `<a href="${project.learn_more_link}" target="_blank">Learn More</a>`

        }
        innerHTML += `</div>`

        projectDiv.innerHTML = innerHTML;

        
   
        // Append the div to the container
        document.getElementById('projects').appendChild(projectDiv);
    }
});
