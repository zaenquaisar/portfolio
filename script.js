// PROJECT DATA - EDIT THIS SECTION with your actual project information
const projectData = {
    energy: [
        {
            title: "Dual-Axis Solar Tracker",
            images: [
                "images/SESCover2.JPG",
                "images/SESBare.JPG",
                "images/SESCAD3.JPG", 
                "images/SESCAD4.JPG",
                "images/SESSchematic.jpg",
                "images/SESCover.JPG"
            ],
            description: `
                <h3> What </h3>
                <p>Inspired by my capstone project, I designed and built a dual-axis solar tracking system with integrated battery storage and power delivery. The idea was to build a portable solar energy system that could be placed anywhere and start tracking the sun to deliver maximum efficiency. Wherever there is adequate sunlight, you can drop the tracker, input your location and the current time, and now you have a small-scale clean energy source to charge phones, laptops, or power a solar pyrolysis reactor. I wanted to challenge myself by building this system from the ground up, covering everything from mechanical tracking structure to power electronics to the firmware tying everything together. </p>
               <h3> How </h3>
                <p>Working with a budget of about $800, I built the system around a DC motor with a quadrature encoder for azimuth and a microstepped stepper motor for elevation, both driven through worm gears and monitored via limit switches. Two 3-channel current sensors monitor current and voltage across the power system in real time. Power flows from the solar panel through a 4S LiPo battery and BMS, then out through regulators providing 5V, 9V, 12V, and 20V. 12V is dedicated to motor control, while the rest feed USB-C power delivery modules. The system runs on an ESP32 microcontroller with custom firmware across modular subsystems, including motor control, power management, sun-position calculation, and safety. I modeled the mechanical design in SolidWorks and the electronics schematic in KiCad.
The two biggest challenges were elevation control and hardware debugging. Getting a motor/gear subsystem with a small footprint that could handle full panel torque at the lowest elevation angle took several iterations of motor and gear sizing, guided by SolidWorks modeling. On the hardware side, I hit repeated ESP32 crash loops from boot-strapping pin conflicts, and the power sensors weren't showing up on the I2C bus despite wiring and voltages checking out. I worked through both systematically, testing different I2C speeds, isolating sensors individually, and checking GPIO behavior at the bit level to separate hardware from software causes.
</p>
                <h3> Results </h3>
                <p>The finished system is able to track the sun with accuracy within 2 degrees and delivers regulated power through USB-C at three different voltage levels, enabling it to charge a phone or a laptop through clean energy, something I wanted to do since the limitations I ran into with my wind turbine project. Beyond the finished build, this project deepened my understanding of embedded systems and the debugging side of engineering as well as the design side. Tracing hardware faults through a full stack of firmware, wiring and power electronics takes a lot of patience, and I ended the project being much more comfortable diagnosing issues instead of building around them. 
</p>
        },
        {
            title: "Solar Pyrolysis Reactor",
            images: [
                "images/CapstoneCover.jpg",
                "images/CapstoneCAD1.jpg", 
                "images/CapstoneCondenser1.jpg",
                "images/CapstoneCondenser2.jpg"
            ],
            description: `
                <h3> What </h3>
                <p>As part of a four-person, six-month capstone project, our team built a solar pyrolysis reactor that converts sargassum seaweed into bio-oil, bio-gas, and bio-char, using a parabolic dish to concentrate sunlight into a hot zone where an auger moves material through as it pyrolyzes. We inherited the dish, tracking frame, and system architecture from previous capstone teams. My independent contributions were designing the condenser system that collects the resulting bio-oil and bio-gas and rebuilding the sun-tracking system with a more reliable sensor approach and manual backup control. </p>
                <h3> How </h3>
                <p>Sargassum moves through an auger into a pipe at the dish's focal hot zone, reaching temperatures up to 400°C to drive pyrolysis, while nitrogen flushes oxygen from the system to prevent combustion. Azimuth and elevation tracking run on a DC motor and stepper motor mounted on the inherited 80/20 frame.
I replaced the original light sensor based tracking, which was prone to hardware failures and easily fooled by clouds, with a BNO055 absolute orientation sensor, adding manual keyboard control as a backup. Since no schematic or code existed for the inherited hardware, I reverse engineered the wiring through visual inspection before writing new code around it. The BNO055 itself needed enough clearance from the metal frame to read accurately, which took some repositioning to solve.
For the condenser, I designed a passive system requiring no power, using gravity and gas pressure to separate the outputs: liquid bio-oil falls into a collection jar while bio-gas rises through the tubing. I sized the copper tubing using an LMTD approach to hit a 100°C condensation target with a safety factor, using an ice bath to maintain the temperature drop.
 <p>
                <h3> Results </h3>
                <p>The reactor yielded 63% bio-char, 11.5% bio-oil and water, and 25.5% bio-gas and nitrogen, sustaining hot zone temperatures up to 400°C. The biggest challenge was working with inherited hardware with no documentation, especially the tracking system, which required reverse engineering a schematic from scratch. Testing through winter months added further difficulty, requiring added insulation and careful timing to reach pyrolysis temperature. The project pushed me to build reliable systems from undocumented hardware and work effectively through real ambiguity. <p>
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
                <h3> What </h3>
                <p>    As an independent side project, I designed and built a wind turbine primarily from recycled PVC pipe, reclaimed wood, and 3D printed parts to study the technology as well as learn how to build under resource constraints. I enjoy finding new uses for old things, so I challenged myself to design the wind turbine structure based on random materials available on the Northeastern Makerspace recycle shelf and attempt to charge a phone.</p>
                <h3> How </h3>
                <p>    Working with a $40 budget over two months, I gathered materials from the makerspace and designed parts in OnShape that securely joined the wood platforms and PVC pipe and provided structure for the inner workings of the turbine. The turbine runs off a 6V DC motor with rotation generated through blades made from PVC pipe. The curvature of the pipe catches the flowing air and transfers it into rotational motion. The primary challenge was achieving precision with my chosen materials. Given the tools available in the makerspace, I had to cut the blades out on a bandsaw, and I quickly realized it was impossible to keep the blade perpendicular to the tangent line of the circle at the point I was cutting, as it was constantly rotating. After some experimenting, I developed a solution where I used a template to cut a small offset on the PVC pipe which could be sanded down later. </p>
                <h3> Results </h3>
                <p>    During testing, the turbine successfully generated 5V but it wasn’t able to generate sufficient current to sustainably charge my phone. If I wanted to be able to continuously charge a phone I would need much larger blades and therefore a much larger structure, as well as a battery system to store power when there is no wind. While the wind turbine didn’t function in the way I intended, I learned a lot about designing around the resources I had available and how wind turbines are a promising source of renewable energy. </p>
            `
        },
        {
            title: "Sugarcane Bagasse Filtering System",
            images: [
                "images/biomassdrawing.JPG",
                "images/biomasscost.JPG",
                "images/biomassstone.JPG",
                "images/biomassstonecost.JPG"
            ],
            description: `
                <h3> What </h3>
                <p>As part of a three-person project during a one-month sustainable energy study abroad program in Brazil, our team analyzed a real problem at Com Bio, a plant burning sugarcane bagasse for steam energy: rocks mixed into the bagasse during transport were damaging feed machinery and causing costly downtime. My contributions were proposing an industrial blower based winnowing solution, and working on the combustion chemistry, energy calculations, and cost analysis behind our proposals.<p>
                <h3> How </h3>
                <p>After an onsite visit to see the plant's conveyor and boiler system firsthand, we worked with engineering directors to estimate cost and downtime figures, since detailed operational data wasn't readily available. I calculated the boiler's effective energy extraction using bagasse's heating value and estimated efficiency, and proposed a mechanized winnowing solution that uses directed airflow to separate lighter bagasse from heavier rocks as they fall off the conveyor, then ran the cost analysis comparing this against a mechanical destoner alternative.<p>
                <h3> Result </h3>
                <p>We found that rock related downtime costs Com Bio roughly R$27,000 (about $4,650) per hour in lost revenue, and that both the blower and destoner solutions were financially strong, each projected to net about R$17,395 in hourly profit after operating costs. Working with real plant constraints and limited data pushed me to build sound engineering estimates from incomplete information and tie technical solutions directly to financial impact.<p>
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
                <h3> What </h3>
                <p>My biggest woodworking project to date. I designed and built a 13ft x 9ft x 8ft wooden pergola in my backyard to challenge my woodworking and engineering skills while revitalizing an unused outdoor space. The inspiration for this project came from my trip to Greece, where I saw an endless amount of these beautiful structures that provided a calming aesthetic to the space beneath it. I knew the perfect place for one would be in place of the dead patch of pachysandra in my parents’ backyard. The project required not only woodworking but landscaping and concrete work too, the latter of which I hadn’t done before. This project allowed me to apply engineering principles to the unpredictable natural environment where precision is difficult but necessary.</p>
                <h3> How </h3>
                <p>Over one month, I designed the structure by adapting inspiration from existing pergolas and executed the full build within a $1,000 budget. Construction began with digging four 4-foot deep post holes, lining them with aggregate and bigger rocks for water drainage, and pouring concrete foundations with embedded anchor bolts to attach to the wooden posts. The primary challenge was working with ground that was filled with small rocks that made post hole digging very difficult and laborious. The rocks would absorb all the energy of the downward push stopping the shovel from fully penetrating the dirt. Rather than get discouraged, I realized as I was digging I could use a wagon I had with a mesh bottom to sift out the dirt from the mixture, leaving me with the small rocks I used as aggregate for the concrete. The second major challenge was achieving structural precision without expensive professional grade tools. To make sure the foundations and posts were level and equal with each other, I used a long plank, small pieces of wood, and a bubble level to measure the height offsets at each post to ensure the frame would be equal despite uneven anchor bolt placement. </p>
                <h3> Results </h3>
                <p>The completed pergola successfully transformed an unused backyard space into a functional outdoor structure. Later in the fall, the stone patio was extended to the pergola. Staying under $1,000 while dealing with the unpredictable outdoor environment gave me a challenge in managing material and tool costs, designing structural systems, and thinking outside of the box to achieve my goals. This project taught me how engineering in the natural world differs from the controlled environments often seen in the mechanical engineering world, requiring adaptability and persistence when things go awry, which they often do.</p>
            `
        },
        {
            title: "Recycled Desk",
            images: [
                "images/WoodenDesk.JPG"
            ],
            description: `
                 <h3> What </h3>
                <p>I built a desk for my college apartment using recycled wood from a pergola project I'd previously worked on and metal desk stands that were headed for disposal during an office clean up. I wanted a functional desk that cost next to nothing and could be broken down easily, since I knew I'd be moving between housing throughout college.</p>
                <h3> How </h3>
                <p>Working with about $30 in materials and basic woodworking tools, I built the desktop and a large central drawer from the reclaimed pergola wood, then sanded and stained everything for a clean finish. The whole piece was designed to disassemble into three parts, the legs, the wooden board, and the drawer, making it easy to move without needing to build a new desk each time. The hardest part was getting the drawer to fit smoothly and precisely into the frame, since reclaimed wood isn't perfectly uniform and small inconsistencies make a noticeable difference in how well a drawer slides. </p>
                <h3> Results </h3>
                <p>The finished desk took about a week to build and has held up well through multiple moves, thanks to the disassemble/reassemble design. Beyond the finished product, the project was a good exercise in working precisely with imperfect, reclaimed materials, and in designing for a real constraint (portability) from the start rather than as an afterthought.</p>
            `
               
            `
        },
        {
            title: "No Screw Wooden Shelf",
            images: [
                "images/WoodShelf1.jpg"
            ],
            description: `
                <h3> What </h3>
                <p>I was contracted by a family friend to build a five-tier wooden shelf designed to hold statues for a religious festival. The client's requirements were specific and non-negotiable: the shelf needed to fully disassemble for storage during the rest of the year, and it couldn't use any screws, which meant the entire structure had to rely on wooden dowel joinery. Working within those constraints, I was responsible for the full design and build.</p>
                <h3> How </h3>
                <p>Working with about $200 in materials over two weeks, I designed and built the five-tier structure using wooden dowels for every joint, since this was my first time building with dowel joinery instead of screws. Without proper dowel drilling tools like a doweling jig, the hardest part was getting the dowel holes aligned precisely enough across each joint for the pieces to fit together cleanly, which I worked through with careful, methodical measuring and marking before drilling each hole. </p>
                <h3> Results </h3>
                <p>The finished shelf holds up well structurally, disassembles and reassembles as required for festival storage, and has performed reliably since delivery. This was my first paid contract project, and it pushed me to design around a client's fixed requirements rather than my own preferences, and to solve a new joinery technique without the specialized tools that normally make it straightforward.</p>
            `
            `
        },
        {
            title: "Adirondack Chairs",
            images: [
                "images/ADChairs1.jpg"
            ],
            description: `
                <h3> What </h3>
                <p>I built a pair of Adirondack chairs, styled as a matching king and queen set, following an online design as my base and adding my own custom detail to differentiate the two. This was one of my first major woodworking projects, and I ended up building the two chairs with different tool sets: I built the first entirely with hand tools, then built the second with power tools like a miter saw once I had access to them.</p>
                <h3> How </h3>
                <p>Working from an online Adirondack chair design, I built each chair over about two weeks at a materials cost of around $150 per chair. To give the pair a distinct king and queen look, I customized the back support planks on each chair with a diagonal cutout, cutting the corners at an angle rather than leaving them square, giving each chair its own top profile. As one of my first major builds, precision was the main challenge throughout, since small measurement errors compound quickly across a multi-piece structure like this. I worked through it by being meticulous about measuring and tracking every cut and reference point rather than eyeballing anything, especially on the hand tool build where there was no machine precision to fall back on.</p>
                <h3> Results </h3>
                <p>Both chairs came out sturdy and functional, with the diagonal cutout detail giving the set a clear, matching-but-distinct look. Building one with hand tools and one with power tools gave me a direct comparison of both approaches early on, and reinforced how much discipline around measuring and marking matters regardless of which tools are doing the cutting.</p>
           `
        }
    ],
    
    rd: [
        {
            title: "Wind Load Testing Rig",
            images: [
                "images/SNRig1.jpg",
                "images/SNRig3.jpg",
                "images/SNRig5.jpg"
            ],
            description: `
                <h3> What </h3>
                <p>As part of my R&D Engineering co-op at SharkNinja, I designed and fabricated a custom test rig to quantify wind load forces generated by consumer airflow products, giving the team a way to measure real, physical force data rather than relying on airflow metrics alone. The rig was used to help validate product design decisions and support competitor benchmarking.</p>
                <h3> How </h3>
                <p>I built the rig from 80-20 aluminum framing with an integrated load cell and an Arduino-based data acquisition system, displaying live force readings in Newtons on an LCD screen. The system could report instantaneous force as well as track force over time, which let the team see not just how strong the airflow was, but how consistent it stayed, revealing things like motor steadiness and turbulence in the air stream that a single static reading would miss. I calibrated the load cell using a set of known reference weights to make sure the force readings were accurate before collecting any product data. A key part of the mechanical design was constraining the load plate so it could only move slightly along a single vertical axis, with motion in the other two directions locked out, ensuring every force reading reflected true downward airflow force rather than noise from the plate shifting or wobbling. Getting that constraint right, along with dialing in a clean calibration, was the trickiest part of the build, since any freedom of movement outside the intended axis would have introduced error into every measurement taken afterward.</p>
                <h3> Results </h3>
                <p>The rig produced reliable, quantified wind load data that the team used to validate design decisions on products in development, as well as to benchmark performance directly against competitor products. Beyond the immediate use case, the project gave me hands-on experience designing a precise measurement system from the ground up, where the mechanical constraint of the rig mattered just as much as the sensor and code driving it.</p>
                
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
    
    // Clear and populate images (alternating between two stacks)
    const leftStack = document.getElementById('image-stack-left');
    const rightStack = document.getElementById('image-stack-right');
    leftStack.innerHTML = '';
    rightStack.innerHTML = '';
    
    project.images.forEach((imagePath, i) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = project.title;
        
        if (i % 2 === 0) {
            leftStack.appendChild(img);
        } else {
            rightStack.appendChild(img);
        }
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
