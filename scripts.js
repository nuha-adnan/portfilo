document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A brief description of project one.',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'A brief description of project two.',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'A brief description of project three.',
            link: '#'
        }
    ];

    const projectContainer = document.querySelector('.project-container');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectElement);
    });
});
