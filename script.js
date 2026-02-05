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
            title: "Recycled Wind Turbine",
            images: [
                "images/WindTurbine1.jpg",
                "images/WindTurbine2.jpg",
                "images/WindTurbine3.jpg",
                "images/WindTurbine4.jpg"
            ],
            description: `
                <p>    As an independent side project, I designed and built a wind turbine primarily from recycled PVC pipe, reclaimed wood, and 3D printed parts to study the technology as well as learn how to build under resource constraints. I enjoy finding new uses for old things, so I challenged myself to design the wind turbine structure based on random materials available on the Northeastern Makerspace recycle shelf and attempt to charge a phone.</p>
                <p>    Working with a $40 budget over two months, I gathered materials from the makerspace and designed parts in OnShape that securely joined the wood platforms and PVC pipe and provided structure for the inner workings of the turbine. The turbine runs off a 6V DC motor with rotation generated through blades made from PVC pipe. The curvature of the pipe catches the flowing air and transfers it into rotational motion. The primary challenge was achieving precision with my chosen materials. Given the tools available in the makerspace, I had to cut the blades out on a bandsaw, and I quickly realized it was impossible to keep the blade perpendicular to the tangent line of the circle at the point I was cutting, as it was constantly rotating. After some experimenting, I developed a solution where I used a template to cut a small offset on the PVC pipe which could be sanded down later. </p>
                <p>    During testing, the turbine successfully generated 5V but it wasn’t able to generate sufficient current to sustainably charge my phone. If I wanted to be able to continuously charge a phone I would need much larger blades and therefore a much larger structure, as well as a battery system to store power when there is no wind. While the wind turbine didn’t function in the way I intended, I learned a lot about designing around the resources I had available and how wind turbines are a promising source of renewable energy. </p>
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
            title: "Wooden Pergola",
            images: [
                "images/Pergola1.jpg",
                "images/Pergola2.jpg",
                "images/Pergola3.jpg",
            ],
            description: `
                <p>My biggest woodworking project to date. I designed and built a 13ft x 9ft x 8ft wooden pergola in my backyard to challenge my woodworking and engineering skills while revitalizing an unused outdoor space. The inspiration for this project came from my trip to Greece, where I saw an endless amount of these beautiful structures that provided a calming aesthetic to the space beneath it. I knew the perfect place for one would be in place of the dead patch of pachysandra in my parents’ backyard. The project required not only woodworking but landscaping and concrete work too, the latter of which I hadn’t done before. This project allowed me to apply engineering principles to the unpredictable natural environment where precision is difficult but necessary.</p>
                <p>Over one month, I designed the structure by adapting inspiration from existing pergolas and executed the full build within a $1,000 budget. Construction began with digging four 4-foot deep post holes, lining them with aggregate and bigger rocks for water drainage, and pouring concrete foundations with embedded anchor bolts to attach to the wooden posts. The primary challenge was working with ground that was filled with small rocks that made post hole digging very difficult and laborious. The rocks would absorb all the energy of the downward push stopping the shovel from fully penetrating the dirt. Rather than get discouraged, I realized as I was digging I could use a wagon I had with a mesh bottom to sift out the dirt from the mixture, leaving me with the small rocks I used as aggregate for the concrete. The second major challenge was achieving structural precision without expensive professional grade tools. To make sure the foundations and posts were level and equal with each other, I used a long plank, small pieces of wood, and a bubble level to measure the height offsets at each post to ensure the frame would be equal despite uneven anchor bolt placement. </p>
                <p>The completed pergola successfully transformed an unused backyard space into a functional outdoor structure. Later in the fall, the stone patio was extended to the pergola. Staying under $1,000 while dealing with the unpredictable outdoor environment gave me a challenge in managing material and tool costs, designing structural systems, and thinking outside of the box to achieve my goals. This project taught me how engineering in the natural world differs from the controlled environments often seen in the mechanical engineering world, requiring adaptability and persistence when things go awry, which they often do.</p>
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
