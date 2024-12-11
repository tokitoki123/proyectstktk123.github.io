new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/increible (11).img",
          img2: "images/increible (8).img" ,
          img3: "images/increible (9).img",
          title: "linda",
          isOpen: false,
        },
        {
          img1: "images/increible (1).img",
          img2: "images/increible (2).img" ,
          img3: "images/increible (3).img",
          title: "margarita",
          isOpen: false,
        },
        {
          img1: "images/increible (12).img",
          img2: "images/increible (13).img" ,
          img3: "images/increible (6).img",
          title: "gafitas",
          isOpen: false,
        },
        {
          img1: "images/lol (1).img",
          img2: "images/lol (2).img" ,
          img3: "images/lol (3).img",
          title: "preciosa",
          isOpen: false,
        },
        {
          img1: "images/loll (1).jpg",
          img2: "images/increible (7).img" ,
          img3: "images/loll (2).jpg",
          title: "mi bb",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
