
import { useRef, useEffect } from "react";

const useDragScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    // Mouse Events
    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.style.cursor = "grab";
    };

    // Touch Events
    let touchStartX = 0;
    let touchScrollLeft = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].pageX - scrollContainer.offsetLeft;
      touchScrollLeft = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - touchStartX) * 2; // Adjust scroll speed
      scrollContainer.scrollLeft = touchScrollLeft - walk;
    };

    // Attach event listeners
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mouseleave", handleMouseUp);
    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMove);

    return () => {
      // Cleanup event listeners
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mouseleave", handleMouseUp);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return scrollRef;
};

export default useDragScroll;
