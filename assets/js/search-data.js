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
        },{id: "news-seminar-at-icae-universidad-complutense-de-madrid",
          title: 'Seminar at ICAE — Universidad Complutense de Madrid.',
          description: "",
          section: "News",},{id: "news-presentation-at-the-workshop-on-empirical-macroeconomics-ghent",
          title: 'Presentation at the Workshop on Empirical Macroeconomics, Ghent.',
          description: "",
          section: "News",},{id: "news-seminar-at-norges-bank-oslo",
          title: 'Seminar at Norges Bank, Oslo.',
          description: "",
          section: "News",},{id: "news-presentation-at-the-31st-conference-on-computing-in-economics-and-finance-universidad-de-chile",
          title: 'Presentation at the 31st Conference on Computing in Economics and Finance, Universidad de...',
          description: "",
          section: "News",},{id: "news-presentation-at-applied-macroeconomics-in-a-changing-world-bi-norwegian-business-school-oslo",
          title: 'Presentation at Applied Macroeconomics in a Changing World, BI Norwegian Business School (Oslo)....',
          description: "",
          section: "News",},{id: "news-co-organised-the-1st-madrid-mountain-macro-conference-banco-de-españa-cercedilla",
          title: 'Co-organised the 1st Madrid Mountain Macro Conference (Banco de España, Cercedilla).',
          description: "",
          section: "News",},{id: "news-virtual-seminar-at-the-bis",
          title: 'Virtual seminar at the BIS.',
          description: "",
          section: "News",},{id: "news-presentation-at-london-business-school",
          title: 'Presentation at London Business School.',
          description: "",
          section: "News",},{id: "news-discussion-at-the-joint-banque-de-france-bundesbank-conference-on-monetary-policy-paris",
          title: 'Discussion at the Joint Banque de France – Bundesbank Conference on Monetary Policy,...',
          description: "",
          section: "News",},{id: "news-ies-ortega-y-gasset-is-the-winner-of-the-final-round-of-the-15th-edition-of-concurso-generación-euro",
          title: 'IES Ortega y Gasset is the winner of the Final round of the...',
          description: "",
          section: "News",},{id: "news-forthcoming-presentation-at-the-32nd-international-conference-on-computing-in-economics-and-finance-venice",
          title: '[forthcoming] Presentation at the 32nd International Conference on Computing in Economics and Finance,...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV.pdf", "_blank");
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
