// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research-and-policy",
          title: "research and policy",
          description: "Published, working, and policy work. Section structure mirrors the previous Google Sites page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research-and-policy/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Past teaching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-the-site-has-moved-from-google-sites-to-github-pages-and-now-uses-the-al-folio-theme",
          title: 'The site has moved from Google Sites to GitHub Pages and now uses...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("https://drive.google.com/file/d/1WZ6ONatHAH3HqBk_-qAQoSDqcS8MHh1y/view", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6C%6F%64%6F%6D%69%72%6F.%66%65%72%72%65%69%72%61@%62%64%65.%65%73", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=76OpcOQAAAAJ", "_blank");
        },
      },{
        id: 'social-ideas_repec',
        title: 'Ideas_repec',
        section: 'Socials',
        handler: () => {
          window.open("https://ideas.repec.org/f/pfe533.html", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/clodoferreira", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ClodinFF", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ClodoFF", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
