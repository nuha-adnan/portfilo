document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: '18-SE',
            description: 'Das Repository enthält die Vorlage einer Projektstruktur und Template-Dokumente im AsciiDoc-Format. Dies wird für die Bearbeitung der Belegarbeit in Software Engineering I und II benötigt. Im Detail wären dies:Projektstruktur anhand der Work Products im OpenUP Templates der benötigten OpenUP-Dokumente (AsciiDoc-Format) Vorlage für die Belegabgabe in SE I (AsciiDoc-Format) ',
            link: 'https://github.com/Norinofa/I8-SE'
        },
        {
            title: 'APLIT',
            description: 'web-based learning application .',
            link: 'https://github.com/nuha-adnan/APLIT'
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
