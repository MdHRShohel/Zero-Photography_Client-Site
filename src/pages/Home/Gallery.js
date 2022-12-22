import React from "react";
import Masonry from "react-responsive-masonry";

const images = [
  "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",

  "https://th.bing.com/th/id/R.0813b2feaa45ed846086f778eb812397?rik=2RqJIeKdIXwDtg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-vLaPjSSQmpg%2fUmZrKZRA8SI%2fAAAAAAAAG0s%2fG3AMsr9ML_k%2fs1600%2fFashion%2bPhotography%2b(30).jpg&ehk=BuDjL4GM8MiFj%2bPKD0NTu05z9I7TqlDZU%2ba8C7Z2fEU%3d&risl=&pid=ImgRaw&r=0",
  //...
  "https://editaphotography.in/wp-content/uploads/2019/07/Turning_ONE_baby_photo_shoot_Pune897.jpg",
  //...
  "https://i.pinimg.com/736x/5e/57/b7/5e57b7c812c35ebade1aafc722b9c91d.jpg",
  //...
  "https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/elementor/thumbs/portfolio-02-free-img-oevpiny5t3v9akx61kcx7y0mz7pws1g6oq9dc30pd6.jpg",
  //...
  "https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/elementor/thumbs/portfolio-06-free-img-oevpivgvbs5jvgm8tnlxrw4bqaouhma1drh96apjze.jpg",
  //...
  "https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/elementor/thumbs/portfolio-10-free-img-on73tcon0s75yu4nfrzzfs3x80zztyqoax331bueei.jpg",
  //...
  "https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/elementor/thumbs/portfolio-03-free-img-oevpiovzzxwjm6vsw2rjsfs3kll9zqjx0uwutczb6y.jpg",
  //...
  "https://i.insider.com/5d5ea2ec2da4481b680fec34?width=1000&format=jpeg&auto=webp",
];

const Gallery = () => {
  return (
    <div className="container mx-auto">
      <Masonry className=" px-12" columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <img
            alt=""
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
