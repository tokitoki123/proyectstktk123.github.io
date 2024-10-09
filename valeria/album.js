new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/vasvy.jpeg",
          img2: "images/qxLiKVPs.jpeg",
          img3: "images/vall.jpeg",
          title: "linda",
          isOpen: false,
        },
        {
          img1: "images/vi1.jpeg",
          img2: "images/vi2.jpeg",
          img3: "images/vi3.jpeg",
          title: "chikita",
          isOpen: false,
        },
        {
          img1: "images/lila1.jpeg",
          img2: "images/lila2.jpeg",
          img3: "images/lila3.jpeg",
          title: "blanquita",
          isOpen: false,
        },
        {
          img1: "images/sisi.jpeg",
          img2: "images/sisi2.jpeg",
          img3: "images/sisi3.jpeg",
          title: "preciosa",
          isOpen: false,
        },
        {
          img1: "images/cora.jpeg",
          img2: "images/cora4.jpg",
          img3: "images/cora5.jpeg",
          title: "alegre",
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
