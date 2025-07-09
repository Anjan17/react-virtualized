import throttleAndDebounceFn from "./util.js";

class ReactVirtualizer {
  constructor(item_height, scroll_container, total_items, onUpdateCallback) {
    this.item_height = item_height;
    this.total_items = total_items;
    this.scroll_container = scroll_container;
    this.scroll_offset = 0;
    this.onUpdateCallback = onUpdateCallback;
    this.list_container = null;
    // add event listener for scroll element
    const context = this;
    this.scroll_container.addEventListener(
      "scroll",
      throttleAndDebounceFn(this.scrollHander.bind(context), 700, 1000)
    );
    this.getVirtualizedItems();
  }

  scrollHander() {
    const scrollOffset = this.scroll_container.scrollTop;
    console.log("scrolloffset", scrollOffset);
    this.scroll_offset = scrollOffset;
    this.getVirtualizedItems();
  }

  getVirtualizedItems() {
    // calculate the virtualized items
    const elementsAbove = Math.floor(this.scroll_offset / this.item_height);

    console.log(
      "itemsToDisplay start",
      elementsAbove,
      "items to display end",
      elementsAbove +
        Math.ceil(
          this.scroll_container.getBoundingClientRect().height /
            this.item_height
        ) +
        5
    );
    this.onUpdateCallback([
      elementsAbove,
      elementsAbove +
        Math.ceil(
          this.scroll_container.getBoundingClientRect().height /
            this.item_height
        ) +
        5,
    ]);
  }
}

export default ReactVirtualizer;
