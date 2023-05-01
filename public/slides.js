const Slides = ({ images }) => {
  console.log(images);
  return (
    <swiper-container
      class="mySwiper"
      pagination="true"
      pagination-type="fraction"
    >
      {images.map((image) => {
        return (
          <swiper-slide key={image}>
            <img src={image} />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};
