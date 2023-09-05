import { SlideShow, SlideShowItem } from "./SlideShow";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";

const items = [
  { src: slide1.src, alt: "slide 1" },
  { src: slide2.src, alt: "slide 2" },
];

const SlideShowView = () => {
  return (
    <div>
      <SlideShow
        items={items}
        renderItem={({ item, index, isActive, isSnapPoint }) => (
          <SlideShowItem
            key={index}
            isSnapPoint={isSnapPoint}
            isActive={isActive}
            src={item.src}
            title={item.alt}
          />
        )}
      />
    </div>
  );
};

export default SlideShowView;
