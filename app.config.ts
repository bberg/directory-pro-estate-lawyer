import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "Well Water Filter Directory",
    logo: "/logo.png",
    // iconLogo: "fluent-emoji-flat:leaf-fluttering-in-wind",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "Well Water Filter Directory",
    description: "Directory of Well Water Filters",
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
{"name": "Well Water Treatment", "color": "gray"},
  {"name": "Arsenic Removal", "color": "gray"},
  {"name": "Water Softeners", "color": "gray"},
  {"name": "UV Sterilization", "color": "gray"},
  {"name": "Iron Removal Filters", "color": "gray"},
  {"name": "Sediment Filters", "color": "gray"},
  {"name": "Whole House Filtration", "color": "gray"},
  {"name": "Reverse Osmosis Systems", "color": "gray"},
  {"name": "Water Filters", "color": "gray"},
  {"name": "Alkaline Systems", "color": "gray"},
  {"name": "Lead Reduction", "color": "gray"},
  {"name": "Under-Sink Filters", "color": "gray"},
  {"name": "Countertop Dispensers", "color": "gray"},
  {"name": "Pitcher Filters", "color": "gray"}
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
        { name: "Well Water Filter Directory", to: "/" },
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
    description: "Directory of Well Water Filters",
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
