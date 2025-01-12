import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "Motorcycle Training Directory",
    logo: "/logo.png",
    // iconLogo: "fluent-emoji-flat:leaf-fluttering-in-wind",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "Motorcycle Training Directory",
    description: "Directory of Motorcycle Training",
    url: "https://ParkingManagementHub.com",
    favicon: {
      image: "",
      emoji: "",
    },
  },
  directory: {
    search: {
      placeholder: "Search {0} Listings",
      icon: "tabler:bow",
      tags: {
        // options: none,select,show-all,
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Entry not found.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: false,
        first: false,
        title: "Submit a template",
        description:
          "Submit a template to show off a good project to other people.",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: false,
      showOnSide: false,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
    tags: [
{"name": "Motorcycle Safety Foundation", "color": "gray"},
  {"name": "Rider Safety Gear", "color": "gray"},
  {"name": "Basic Rider Training", "color": "gray"},
  {"name": "Motorcycle Safety Courses", "color": "gray"},
  {"name": "Professional Rider Coaches", "color": "gray"},
  {"name": "Motorcycle Licensing", "color": "gray"},
  {"name": "Advanced Riding Skills", "color": "gray"},
  {"name": "Motorcycle Safety Certification", "color": "gray"},
  {"name": "Training Locations Map", "color": "gray"},
  {"name": "DMV Test Waiver", "color": "gray"},
  {"name": "Novice Rider Instruction", "color": "gray"},
  {"name": "Motorcycle Endorsement", "color": "gray"},
  {"name": "Weekend Classes", "color": "gray"},
  {"name": "Custom Training Solutions", "color": "gray"},
  {"name": "Three-Wheel Motorcycle Training", "color": "gray"}
],
    tagPages: {
      title: "Available {0} items:",
      description:
        "View all items in the {0} category...",
    },
  },
  header: {
    banner: {
      show: false,
      text: "Add your listing",
      link: "https://Directory.com",
      brandText: "Directory",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Directory", to: "/" },
        { name: "Info", to: "/blog" },
        // { name: "Advertise", to: "/advertise" },
        // {
        //   name: "Analytics",
        //   to: "https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ",
        //   target: "_blank",
        // },
      ],
    },
    actionButton: {
      text: "Add a Listing",
      href:  "/submit",
    },
  },
  footer: {
    description: "Directory of Motorcycle Training",
    // socials: {
    //   github: {
    //     link: "",
    //     icon: "tabler:brand-github",
    //   },
    //   facebook: {
    //     link: "",
    //     icon: "tabler:brand-facebook",
    //   },
    //   instagram: {
    //     link: "",
    //     icon: "tabler:brand-instagram",
    //   },
    //   x: {
    //     link: "https://x.com/mark_bruderer",
    //     icon: "tabler:brand-twitter",
    //   },
    //   youtube: {
    //     link: "https://www.youtube.com/@mark_hacks",
    //     icon: "tabler:brand-youtube",
    //   },
    // },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
