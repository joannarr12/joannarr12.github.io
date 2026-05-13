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
        image: "images/_MG_0798.JPG", // Use relative path
        mediaType: "image", 
        doc: "This is a photo study on light.",
        link: "" // Optional link for PDFs
    },
       {
                id: 3,
        title: "Photography Series",
        date: "2024",
        tags: ["photography", "fine arts"], // Shows up in both!
        image: "images/_MG_0787.JPG", // Use relative path
        mediaType: "image", 
        doc: "This is a photo study on light.",
        link: "" // Optional link for PDFs
    },

           {
                id: 4,
        title: "Photography Series",
        date: "2024",
        tags: ["photography", "fine arts"], // Shows up in both!
        image: "images/_MG_0287.JPG", // Use relative path
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
        image: "images/assignment 3.1.jpeg", // Use relative path
        mediaType: "image", 
        doc: "Collaborative project with Olivia, Jasmine and Priya. https://jasmine-wng.github.io/s3q1/index.html",
        link: "https://jasmine-wng.github.io/s3q1/index.html" // Optional link for PDFs
    },

                {
                id: 12,
        title: "Section 3, Assigment 2",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 3.2.jpeg", // Use relative path
        mediaType: "image", 
        doc: "Collaborative project with Olivia and Jasmine. https://joannarr12.github.io/site/",
        link: "https://joannarr12.github.io/site/" // Optional link for PDFs
    },

                {
                id: 13,
        title: "Section 3, Final Project",
        date: "2026",
        tags: ["Web design", "Art of the Web"], // Shows up in both!
        image: "images/assignment 3.3.jpeg", // Use relative path
        mediaType: "image", 
        doc: "https://editor.p5js.org/joannarr/full/vxx3xyLDw",
        link: "https://editor.p5js.org/joannarr/full/vxx3xyLDw" // Optional link for PDFs
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
        image: "images/discussion-02.jpg", // Use relative path
        mediaType: "image", 
  doc: `The phrase "we look at the remains, like tourists in ancient Pompeii" made me think about how much the internet has become a far greater anthropological source than objects were in the past. Even diaries, which were normally in paper and documented all these internal thoughts, have turned to being digital and the lack of dimension that the internet sometimes encompasses, has made people share those same personal thoughts on the web. It is like we are aware of this incredibly huge audience that will read us, but at the same time, the lack of physical world visualization blurs the lines of how comfortable we feel online.<br><br>

I didn't have a YouTube profile as a kid, but most of my friends in Mexico did and the way they feel about what they posted there and how much they were sharing with the world now has changed as they've grown older and realized how global and everlasting the web is. I wonder if, as it says in the reading, YouTube decided not to store old videos anymore, my friend's views on the childish nature of their videos and wanting them not to see the light of day, would change to regret and sadness for the lost memories. I can say I would be devastated if I lost my Spotify playlists, my Pinterest boards and my Instagram account, because part of my identity is tied to them. That implies so much power and control that until this reading, I hadn't thought that much about it. I guess to an extent, the web has become an extension of our life and even though life could continue without it, it has become such a big part of who we are. Would I be the same person without the internet? Definitely not. I wonder if AI will do the same, if it will become an extension of our identity. I think I hope not, but mainly because I have no idea what that would entail.`,
    },

                        {
                id: 16,
        title: "Week 5 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-03.jpg", // Use relative path
        mediaType: "image", 
        doc: "The readings made me think about how I was exposed to art through the internet. I was very interested in learning more about how to create more professional art in high school, to the point where I would watch only artist videos on youtube following their process and my Instagram feed was pretty much art. I got introduced to a lot of my favorite artists through this process and even though most of them were doing human anatomy-based art, I liked very different styles and was drawn to a lot of artists who were using the internet to market their art. Last summer, while I was in New York and I got to visit art galleries in person, I noticed how much it was harder to connect directly with the artist, but easier to connect with art. It was like I had been used to liking something and instantly trying to find more about this person and their art, which sometimes meant my feed was pretty much just the artists I already knew of, very similar ones. But the art galleries, on the other hand, were easier to be surprised by and I realized how much I appreciated the curation of it by an expert and by someone differnt than me (the algorithm me). I wonder how much that art gallery scene has changed... because even when I say I thought it was more inspiring to look at the curated art in person, the way I found out about this was through an Instagram account that would post weekly locations, which shows how much the internet has changed art, especially in the way it is shared. Could that art account be post-internet art itself? Their emoji work was definitely well-designed. ",
    },

                        {
                id: 17,
        title: "Week 7 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-04.jpg", // Use relative path
        mediaType: "image", 
doc: `I learn how to use Alt-Text for my job as a graphic designer and the reading made me think about how long my descriptions normally are. I do try to be as "objective as possible" and tend to name a lot of colors, shapes and focus on the location of objects. The length of the descriptions is definitely also affected by the fact that most of the text in the design needs to be included in the Alt-Text, but I also sometimes forget to focus on evoking a feeling. My boss gave me that advice when I started working there, she told me the Alt-Text was meant to make the person using it see the image in their head, so that I had to include what my intention was as a designer on it so that the perception stayed constant. It helped me a lot to design by thinking about this, because it meant that I had to know how to communicate the idea correctly both visually and in text, and sometimes the text description informed the best path forward for communicating the information. so: <br><br>

1. Is Alt-Text useful for the designer in the initial creative process to keep the target audience in mind? How can Alt-Text inform the design process?<br><br>

2. Should Alt-Text be a requirement for posting on social media?`,
       
    },

                        {
                id: 18,
        title: "Week 8 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-05.jpg", // Use relative path
        mediaType: "image", 
doc: `The text made me think about two instances in which I've seen the enforced use of the English language in the professional world be biased or not inclusive. <br><br>

I have two last names and even though they don't have any é or ñ, I live in México and in a city called Querétaro, so when I describe myself, I tend to use the é a lot.  While applying for jobs (as a senior with no job does, Grey must be already tired of hiring about this hahaha), I was explaining one of my projects and before clicking submit, I went back to change Querétaro and México to have no punctuation above the e. It felt wrong to do it in a moral sense, but I thought, if AI is checking this resume and finds a é it might just scrap my application and flag an error.<br><br>

1. In what other ways can AI biasly reject applications because they are not written in English?  <br><br>

The second example is I recently was paying a friend for lunch and when I was going to Venmo them, I noticed a different name so I asked if it was their sibling. Their name is for ex. Jake and the name was Sun-Woo. They laughed a little and said to me, "That is my name". I have had the issue of being called Joanna Ruiz or having that wrong name on bank accounts and other documents that don't allow for two last names or ignore that you can have two or more. But I didn't have to change my name and the idea of having to do so seems to me archaic. Is this adapting to a different culture or having your culture and identity masked or erased? <br><br>

2. Should government world wide have systems that allow people to write their names like they would in their countries of residence? Is it necessary?`,
       
    },

                        {
                id: 19,
        title: "Week 10 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-08.jpg", // Use relative path
        mediaType: "image", 
doc: `The initial thoughts mentioned in the chapter made me think about the work I see designers create vs. the one created with tools like Canva. The software has a lot of preset that make it so easy to have a starting point. The templates themselves are great when you have no idea how to put all the material on a page. But the moment you want to change things, it becomes tricky. There is a limit to the flexibility of the design for creativity. The limit doesn't affect someone making a simple design, but something more complex? You end up having to use more tools to figure out something that maybe you could have created in Illustrator in 10 minutes. But with AI that changes, you can, to an extent ingput your thoughts and sketches to it and it will create everything. Does this mean the designer is not needed anymore? I would differ, because you still need someone to proofread and input those ideas into the AI. The qualities then becoming important definitely change from the skills to the mind, because not everyone can tell what is wrong with a design and how to fix it. Examples I can think of for full AI use are the following: <br><br>

1. What would happen if AI customized ads? Would it be less helpful? <br><br>

2. What about book covers and book design? Can an AI book designed cover be too generic? Do we value the designer's input when creating a map? <br><br>

        3. Will all art end up looking the same? Do people know design terminology that would make it look different? Would AI help with that?`,
       
    },

                            {
                id: 20,
        title: "Week 12 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-06.jpg", // Use relative path
        mediaType: "image", 
doc: `When I think of the internet as a place of archival I think a lot about blogs. They are at the end, a version of a dairy that is made public, but they are definitely extremely curated.  With Frenkel's projects regarding loss, and archival work and memories, I think it is interesting to see how much the digitality of the internet influences what we want to preserve. It sometimes feels so foreign and like an entirely separate realm, rather than as a part of daily life, so the way it has influenced memories is very complex and also has power imbalances.  <br><br>

The art stolen project pushed me toward thinking about accessibility to memories, accessibility to archives and the right to have an archive of your own. The internet is probably accessible almost everywhere on land, but there are so many restrictions to its use that definitely influence what is recorded and what is not. And so this definitely cancels the archives, because it creates so many biases regarding it. I've always been a bit frustrated with how, when I try to find historically accurate inspiration, the pictures shown by Google are sometimes new work reinterpreting the past.  For one of my projects for Graphic Design with Sharka, I had to find eclectic art and as soon as you look at those two words, everything that comes out is modern. But we all use the internet, so the veracity and objectivity of what is put there is modified by so many factors that take away a lot of its archival power.   <br><br>

        1. In what ways does the digitality of the internet affect archival work done through it? How does an online diary differ from a physical one? Do people feel less or more inclined to share their thoughts? <br><br>

        2. Using technology to preserve history helps with keeping it digitally safe and sharing it more widely, but what is it about physical archives that makes them more or less educational? Why not have digital museums of everything and restore it all to its owners (buildings, countries, communities)? Is it truly needed to have physically or is it prestige taken from the archive rather than the educational value of the archive itself?`,
        
    },

                            {
                id: 21,
        title: "Week 13 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-07.jpg", // Use relative path
        mediaType: "image", 
doc: `A feed in entertainment. The way the reading presented it made me think a lot about hwo much of my time I spent digitally. There are mutliple researchs about what are the effects of sociallzing only vietually and the effects of spending more and more time informt 0f s creen for your phusical health, but it goes beyond something controllable because it is a social activity. It is connecting to the most foundatiional thing of being human, connecting with others and forming a community. So the act of rebelling against it goes against the community.  <br><br>

What has changed from the community shaped before during the start of the internet is live broadcasting. The possibility of being watched all the time by everyone. It pushes us into a bigger performative way of behaving, but does it actually enforce better behavior? <br><br>

I think that is where the constant filming and sharing could be postive but I am not sure if it is creating a fear for behaving immorally rather than a fear for embarrassment. <br><br>

1. Could it be used to create a better society that behaves better because of the constant watching? Or is this impossible? <br><br>

2. Is it worth it to create places with no recordings or pictures? Is a party without phones possible and should we want that back?  <br><br>

        3. Are we performing for the feed or archiving?`,
        
    },

                            {
                id: 22,
        title: "Week 14 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-09.jpg", // Use relative path
        mediaType: "image", 
doc: `I really enjoyed the reading! It's really funny because today in the morning, I was scrolling on Instagram and ended up watching this video about cyberpunk and cyberdeck, this new trend about creating your new computers and doing that from scratch. The girl was saying how with Claude, you can pretty much figure out how to code a computer from beginning to end, so you can now create a laptop of your own with a weird an unexepected cover and some fun functions. I wonder how expensive that is, but I literally couldn't stop thinking about it for the whole morning. It is sad how sometimes, with the introduction of efficiency in our lives, we become so used to it that we lose part of the creativity it can bring. There is nothing inherently bad with an iPhone, but when you learn to use it and follow it instead of adapting it to you, you end up losing the value it is supposed to create for you. <br><br>

So what is the alternative for life in general? To always be curious, I think! And to also highlight the good of the new technologies, because I've gotten ideas for papers from a TED talk video I saw on Instagram from a neuroscientist and I basically use Pinterest for every single pitch deck I need to design.  <br><br>

        1. What are examples of websites that make us better? What do they have in common? Are the ads that need to go? How do you keep a platform free without ads?<br><br>

        2. How can you use AI to your advantage when creating a website? Is it popularity that will make you a primary destination in AI responses? Is it good code?`,
         
    },

                        {
                id: 23,
        title: "Week 15 Discussion Post",
        date: "2026",
        tags: ["Art of the Web"], // Shows up in both!
        image: "images/discussion-10.jpg", // Use relative path
        mediaType: "image", 
doc: `It is interesting to imagine the internet as a gallery because there is just so much in it. I think that for me, the idea that art can be displayed all over the web makes me think of how a library that is huge library needs a really good-looking system. I've always found it interesting how certain limitations of the internet really make it hard to use as inspiration, like, for example, if you know the melody of a song, you can't look it up on Google, and unless you are an astounding singer, most probably Siri won't be of help either. Or if you have a certain style in mind, or a painting in mind or a movie, how do you find that in the vast ocean of information? This made me tihnk of two questions;<br><br>

        1. Do we need to have a glossary like on the internet, like the one from Geocities?<br><br>

        2. What is the internet for when it comes to artists? Does it replace galleries? Is a digital gallery doing the same as a physical one?`,
        link: ""
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