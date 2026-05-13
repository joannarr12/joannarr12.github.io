// 1. PROJECT DATABASE
const projects = [
    {
                id: 1,
        title: "Photography Series",
        date: "2024",
        tags: ["photography", "fine arts"], // Shows up in both!
        image: "images/_MG_0251.JPG", // Use relative path
        mediaType: "image", 
        doc: "This is a photo study on light.",
        link: "" // Optional link for PDFs
    },
   {
                id: 2,
        title: "Photography Series",
        date: "2024",
        tags: ["photography", "fine arts"], // Shows up in both!
        altText:"A high-contrast black and white studio portrait focusing on dramatic lighting across a subject's face." ,
        image: "images/_MG_0287.JPG", // Use relative path
        mediaType: "image", 
        doc: "This is a photo study on light.",
        link: "" // Optional link for PDFs
    },
       {
                id: 3,
        title: "Photography Series",
        date: "2024",
        tags: ["photography", "fine arts"], // Shows up in both!
        image: "images/_MG_0388.JPG", // Use relative path
        mediaType: "image", 
        doc: "This is a photo study on light.",
        link: "" // Optional link for PDFs
    },

           {
                id: 4,
        title: "Photography Series",
        date: "2024",
        tags: ["photography", "fine arts"], // Shows up in both!
        image: "images/_MG_0450.JPG", // Use relative path
        mediaType: "image", 
        doc: "This is a photo study on light.",
        link: "" // Optional link for PDFs
    },
    // Add all 10 projects here

               {
                id: 5,
        title: "Section 1, Assigment 1",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 1.1.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://codepen.io/joannarr/pen/qENVwoR",
        link: "https://codepen.io/joannarr/pen/qENVwoR" // Optional link for PDFs
    },

    {
                id: 6,
        title: "Section 1, Assigment 2",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 1.2.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://codepen.io/joannarr/pen/pvbrvKN",
        link: "https://codepen.io/joannarr/pen/pvbrvKN" // Optional link for PDFs
    },

        {
                id: 7,
        title: "Section 1, Final Project",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 1.3.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://joannarr12.github.io/photography_portfolio/",
        link: "https://joannarr12.github.io/photography_portfolio/" // Optional link for PDFs
    },

        {
                id: 8,
        title: "Section 2, Assigment 1",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 2.1.jpeg", // Use relative path
        mediaType: "image", 
        doc: "Web Ring in the bottom right corner of the website https://joannarr12.github.io/photography_portfolio/",
        link: "https://joannarr12.github.io/photography_portfolio/" // Optional link for PDFs
    },

            {
                id: 9,
        title: "Section 2, Assigment 2",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 2.2.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://joannarr12.github.io/locationblog/",
        link: "https://joannarr12.github.io/locationblog/" // Optional link for PDFs
        
    },

            {
                id: 10,
        title: "Section 2, Final Project",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 2.3.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://editor.p5js.org/joannarr/full/J6VRYjw36",
        link: "https://editor.p5js.org/joannarr/full/J6VRYjw36" // Optional link for PDFs
    },

            {
                id: 11,
        title: "Section 3, Assigment 1",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 3.1jpeg", // Use relative path
        mediaType: "image", 
        doc: "Collaborative project with Olivia, Jasmine and Priya. https://jasmine-wng.github.io/s3q1/ib2.html",
        link: "https://jasmine-wng.github.io/s3q1/ib2.html" // Optional link for PDFs
    },

                {
                id: 12,
        title: "Section 3, Assigment 2",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/gltch.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://codepen.io/joannarr/pen/pvbrvKN",
        link: "https://codepen.io/joannarr/pen/pvbrvKN" // Optional link for PDFs
    },

                {
                id: 13,
        title: "Section 3, Final Project",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/gltch.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://codepen.io/joannarr/pen/pvbrvKN",
        link: "https://codepen.io/joannarr/pen/pvbrvKN" // Optional link for PDFs
    },

                {
                id: 14,
        title: "Week 3 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-01.jpg", // Use relative path
        mediaType: "image", 
        doc: "The reading made me think of when I started using the internet for the first time. I think I was around 8 years old and while I had been using a computer for a while, mainly to do some illustrations and artworks in Photoshop and Illustrator, I hadn't really been exposed to the web before I was asked to research for school. I remember very quickly preferring the websites that had colors and the websites that were easily structured. By middle school, I would only trust as a resource for my research the websites that looked legit, which to me meant were designed correctly and didn't look like the Assignment 1 image with text I made. After a couple of years, the use of .edu, .org  and specific information on a website started becoming a more useful sign of trustworthiness of the information in it, but still, I tend to trust the websites that are designed to look appealing rather than those that are made by experts on different topics but that are not visually pleasing. I'm sure that with AI and new website developers, this might quickly change, but even now, there are specific things that UX/UI designers and website developers see wrong on a page that AI might miss because of the individual needs of the people using the space. It gives them a lot of responsibility and value to designers, because people do use heuristics like pretty to guide their decisions. I wonder now thought, how much AI will be able to really make functional, correctly designed websites. Can it really be as good as a human when it comes to brainstorming how to design a space on the web? I wonder as well what examples of big corporation websites that really are spot on with their designs? I've seen some amazing websites by designers and artists, but can companies that are more serious also get creative like that? ",
    },

                    {
                id: 15,
        title: "Week 4 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion week 4.jpg", // Use relative path
        mediaType: "image", 
        doc: "XXXXXX",
    },

    // Add all 10 projects here
];





const categories = ["Home", "all", "Art of the Web", "architecture", "branding", "illustrations", "photography", "ux_ui design", "web design"]; // Add all 28 here
const colors = ["#FFB6C1", "#FFD700", "#87CEFA", "#98FB98", "#DDA0DD"];

// 2. BUILD SIDEBAR
const nav = document.getElementById('folder-nav');
categories.forEach((cat, index) => {
    const f = document.createElement('div');
    f.className = 'folder';
    f.style.backgroundColor = colors[index % colors.length];
    f.innerHTML = cat;
    f.onclick = () => showView(cat);
    nav.appendChild(f);
});

// 3. NAVIGATION LOGIC
function showView(category) {
    const homeView = document.getElementById('view-home');
    const catView = document.getElementById('view-category');
    
    if (category === 'Home') {
        homeView.style.display = 'block';
        catView.style.display = 'none';
        renderHomeGallery(); // Refresh shuffle on Home click
    } else {
        homeView.style.display = 'none';
        catView.style.display = 'block';
        document.getElementById('cat-title').innerText = category;
        renderCarousel(category);
    }
}

// 4. RANDOM GALLERY FOR HOME
function renderHomeGallery() {
    const gallery = document.getElementById('home-gallery');
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    
    gallery.innerHTML = shuffled.map(p => `
        <div class="gallery-item" onclick="openFromGallery(${p.id}, '${p.tags[0]}')">
            <!-- ADDED alt="${p.altText || ''}" -->
            <img src="${p.image}" alt="${p.altText || 'Thumbnail for ' + p.title}">
            <div class="gallery-caption">
                <strong>${p.title}</strong><br>
                ${p.doc.substring(0, 40)}...
            </div>
        </div>
    `).join('') || "<p>Add projects to your script to see them here.</p>";
}


// Opens the project directly from the home gallery
function openFromGallery(id, firstTag) {
    showView(firstTag);
    expandProject(id);
}

// 5. CAROUSEL & DETAIL LOGIC (From previous step)
function renderCarousel(category) {
    const container = document.getElementById('project-carousel');
    const filtered = (category === 'all') ? projects : projects.filter(p => p.tags.includes(category));
    
    container.innerHTML = filtered.map(p => `
        <div class="project-card" onclick="expandProject(${p.id})">
            <!-- ADDED alt="${p.altText || ''}" -->
            <img src="${p.image}" alt="${p.altText || 'Preview of ' + p.title}">
            <div style="padding:10px"><h3>${p.title}</h3></div>
        </div>
    `).join('');
}


function expandProject(id) {
    const p = projects.find(item => item.id === id);
    const detail = document.getElementById('project-detail');
    
    detail.innerHTML = `
        <div class="expanded-card" style="border: 2px solid #222; padding: 20px; margin-top: 20px; background: #fff;">
            <h2>${p.title} (${p.date})</h2>
            <!-- ADDED alt="${p.altText || ''}" -->
            <img src="${p.image}" alt="${p.altText || ''}" style="max-width: 100%; height: auto; margin: 20px 0; border: 1px solid #ddd;">
            <p>${p.doc}</p>
            ${p.link ? `<br><a href="${p.link}" target="_blank" class="view-btn">View Live Project / Reading</a>` : ''}
        </div>
    `;
    detail.scrollIntoView({ behavior: 'smooth' });
}



// Initial Load
showView('Home');