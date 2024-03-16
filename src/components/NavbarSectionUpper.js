const createNavbar = () =>{
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar')

    createUpperSection(navbar)
    createLowerSection(navbar)


    document.body.appendChild(navbar)
}

const createUpperSection = (parent) =>{
    const navbarUpper = document.createElement('div')
    navbarUpper.classList.add('navbarUpper')


     

    createUpperLeft(navbarUpper)
    createReachIcons(navbarUpper)

    parent.appendChild(navbarUpper)
}

const createLowerSection = (parent) =>{
    const navbarLower = document.createElement('div')
    navbarLower.classList.add('navbarLower')

    const textSpan = document.createElement('span')
    textSpan.textContent = "I'm an automatic control and robotics student passionate about creating innovative robotics solutions. With experience in freelance web development, I also craft engaging internet projects. If you believe I can contribute to your business, please don't hesitate to reach out. "

    navbarLower.appendChild(textSpan)


    parent.appendChild(navbarLower)

}

const createUpperLeft = (parent) =>{
    const UpperLeftContainer = document.createElement('div');
    UpperLeftContainer.classList.add("upper-left-container")
    


    //createProfilePic(UpperLeftContainer);
    createProfileDescription(UpperLeftContainer)

    parent.appendChild(UpperLeftContainer)
}

const createProfilePic = (parent) =>{
    const img = document.createElement('img')
    img.src = "../src/assets/pfp.jpg"
    img.classList.add('pfp')

    parent.appendChild(img)

    
}

const createProfileDescription = (parent) =>{
    const divContainer = document.createElement('div') //Container for name and student desc

    const name = document.createElement('span')
    name.classList.add('name')
    name.innerText = 'Michał Borowski'

    const status = document.createElement('span')
    status.classList.add('student-status')
    status.innerText = 'Automation and Robotics student.'

    divContainer.appendChild(name)
    divContainer.appendChild(status)

    parent.appendChild(divContainer)
} 

const createReachIcons = (parent) =>{
    const IconContainer = document.createElement('div');
    IconContainer.classList.add('ico-container')
    const iconsSources = ['../src/assets/github.svg', '../src/assets/linkedin.svg', '../src/assets/mail.svg']
    const iconsHrefs = ['https://github.com/f3bot', 'https://www.linkedin.com/in/micha%C5%82-borowski-4266b4245/', 'google.com'] // fix email

    for(let i = 0; i < iconsSources.length; i++){
        createIcon(iconsSources[i] ,iconsHrefs[i], IconContainer)
        
    }

    parent.appendChild(IconContainer)
}

const createIcon = (src, href, parent) =>{
    const iconParent = document.createElement('div')
    const ico = document.createElement('img');
    ico.classList.add('reach-icon')
    ico.src = src;
    ico.href = href;

    iconParent.appendChild(ico)

    parent.appendChild(iconParent)
}

export {createNavbar}