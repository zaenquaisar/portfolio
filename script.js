// PROJECT DATA - EDIT THIS SECTION with your actual project information
const projectData = {
    energy: [
        {
            title: "Dual-Axis Solar Tracker",
            images: [
                "images/energy-project1-photo1.jpg",
                "images/energy-project1-photo2.jpg",
                "images/energy-project1-photo3.jpg"
            ],
            description: `
                <p>First paragraph describing your solar tracker project. Explain the problem you were solving and your approach.</p>
                <p>Second paragraph with technical details - components used, design decisions, challenges faced.</p>
                <p>Third paragraph about results, what you learned, and future improvements.</p>
            `
        },
        {
            title: "Solar Pyrolysis Reactor",
            images: [
                "images/energy-project2-photo1.jpg",
                "images/energy-project2-photo2.jpg"
            ],
            description: `
                <p>Description of your pyrolysis reactor project.</p>
                <p>Technical details and methodology.</p>
                <p>Results and conclusions.</p>
            `
        },
        {
            title: "Energy Storage Analysis",
            images: [
                "images/energy-project3-photo1.jpg",
                "images/energy-project3-photo2.jpg",
                "images/energy-project3-photo3.jpg",
                "images/energy-project3-photo4.jpg"
            ],
            description: `
                <p>Description of your energy storage analysis project.</p>
                <p>Technical approach and tools used.</p>
                <p>Findings and impact.</p>
            `
        },
        {
            title: "Energy Project 4",
            images: [
                "images/energy-project4-photo1.jpg",
                "images/energy-project4-photo2.jpg"
            ],
            description: `
                <p>Replace this with your fourth energy project description.</p>
                <p>Add as many paragraphs as needed.</p>
            `
        }
    ],
    
    woodworking: [
        {
            title: "Woodworking Project 1",
            images: [
                "images/wood-project1-photo1.jpg",
                "images/wood-project1-photo2.jpg",
                "images/wood-project1-photo3.jpg"
            ],
            description: `
                <p>Description of your first woodworking project.</p>
                <p>Design process and construction details.</p>
                <p>Final results and what you learned.</p>
            `
        },
        {
            title: "Woodworking Project 2",
            images: [
                "images/wood-project2-photo1.jpg",
                "images/wood-project2-photo2.jpg"
            ],
            description: `
                <p>Description of your second woodworking project.</p>
                <p>Technical details and challenges.</p>
            `
        },
        {
            title: "Woodworking Project 3",
            images: [
                "images/wood-project3-photo1.jpg",
                "images/wood-project3-photo2.jpg",
                "images/wood-project3-photo3.jpg"
            ],
            description: `
                <p>Description of your third woodworking project.</p>
            `
        },
        {
            title: "Woodworking Project 4",
            images: [
                "images/wood-project4-photo1.jpg",
                "images/wood-project4-photo2.jpg"
            ],
            description: `
                <p>Description of your fourth woodworking project.</p>
            `
        },
        {
            title: "Woodworking Project 5",
            images: [
                "images/wood-project5-photo1.jpg",
                "images/wood-project5-photo2.jpg"
            ],
            description: `
                <p>Description of your fifth woodworking project.</p>
            `
        },
        {
            title: "Woodworking Project 6",
            images: [
                "images/wood-project6-photo1.jpg",
                "images/wood-project6-photo2.jpg"
            ],
            description: `
                <p>Description of your sixth woodworking project.</p>
            `
        },
        {
            title: "Woodworking Project 7",
            images: [
                "images/wood-project7-photo1.jpg",
                "images/wood-project7-photo2.jpg"
            ],
            description: `
                <p>Description of your seventh woodworking project.</p>
            `
        }
    ],
    
    rd: [
        {
            title: "R&D Project",
            images: [
                "images/rd-project1-photo1.jpg",
                "images/rd-project1-photo2.jpg",
                "images/rd-project1-photo3.jpg",
                "images/rd-project1-photo4.jpg",
                "images/rd-project1-photo5.jpg"
            ],
            description: `
                <p>Description of your R&D project.</p>
                <p>Research methodology and experimental setup.</p>
                <p>Results and future work.</p>
            `
        }
    ]
};

// TRACKING VARIABLES
let currentCategory = '';
let currentProjectIndex = 0;

// FUNCTION: Show/hide navigation based on current section
function updateNavVisibility(sectionId) {
    const nav = document.getElementById('main-nav');
    if (sectionId === 'home') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

// FUNCTION: Show a specific section and hide all others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the requested section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation visibility
    updateNavVisibility(sectionId);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// FUNCTION: Display a specific project detail page
function showProject(category, index) {
    currentCategory = category;
    currentProjectIndex = index;
    
    // Get project data
    const project = projectData[category][index];
    
    // Update project title
    document.getElementById('project-title').textContent = project.title;
    
    // Update project description
    document.getElementById('project-description').innerHTML = project.description;
    
    // Clear and populate images
    const imagesContainer = document.getElementById('project-images-container');
    imagesContainer.innerHTML = '';
    
    project.images.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = project.title;
        imagesContainer.appendChild(img);
    });
    
    // Show the project detail section
    showSection('project-detail');
}

// FUNCTION: Navigate to previous project in current category
function previousProject() {
    const projectCount = projectData[currentCategory].length;
    currentProjectIndex--;
    
    // Loop back to last project if at beginning
    if (currentProjectIndex < 0) {
        currentProjectIndex = projectCount - 1;
    }
    
    showProject(currentCategory, currentProjectIndex);
}

// FUNCTION: Navigate to next project in current category
function nextProject() {
    const projectCount = projectData[currentCategory].length;
    currentProjectIndex++;
    
    // Loop back to first project if at end
    if (currentProjectIndex >= projectCount) {
        currentProjectIndex = 0;
    }
    
    showProject(currentCategory, currentProjectIndex);
}

// FUNCTION: Copy email to clipboard with visual feedback
function copyEmail() {
    const email = "quaisar.z@northeastern.edu"; // EDIT: Your actual email
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(function() {
        // Show notification
        const notification = document.getElementById('copy-notification');
        notification.classList.add('show');
        
        // Hide after 2 seconds
        setTimeout(function() {
            notification.classList.remove('show');
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy email: ', err);
    });
}

// INITIALIZATION: Set up page when it loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    updateNavVisibility('home');
});

// INSTRUCTIONS FOR EDITING:
// 1. Edit projectData object above with your actual project information
// 2. Replace image paths with your actual image filenames
// 3. Replace placeholder text with your real project descriptions
// 4. Update the email in copyEmail() function with your actual email
// 5. Make sure image filenames match exactly what you upload to images/ folder
