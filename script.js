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
        title: "CodePenn",
        date: "2026",
        tags: ["photography", "fine arts"], // Shows up in both!
        image: "images/gltch.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://codepen.io/joannarr/pen/pvbrvKN",
        link: "https://codepen.io/joannarr/pen/pvbrvKN" // Optional link for PDFs
    },
    // Add all 10 projects here
];





const categories = ["Home", "all", "app development", "architecture", "branding", "illustrations", "photography", "ux_ui design", "web design"]; // Add all 28 here
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
    // Shuffles the projects array
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    
    gallery.innerHTML = shuffled.map(p => `
        <div class="gallery-item" onclick="openFromGallery(${p.id}, '${p.tags[0]}')">
            <img src="${p.image}">
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
            <img src="${p.image}">
            <div style="padding:10px"><h3>${p.title}</h3></div>
        </div>
    `).join('');
}

function expandProject(id) {
    const p = projects.find(item => item.id === id);
    const detail = document.getElementById('project-detail');
    detail.innerHTML = `<hr style="margin:40px 0"><h2>${p.title}</h2><p>${p.doc}</p>`;
    detail.scrollIntoView({ behavior: 'smooth' });
}

// Initial Load
showView('Home');