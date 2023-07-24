"use client"

import { Carousel } from 'react-carousel-minimal';

function Gallery() {
 const data = [
    {
      image: "/images/demo/demo1.png",
      caption: `<div>
                  Landing Page
                  <br/>
                </div>`
    },
    {
      image: "/images/demo/demo3.png",
      caption: "Lannding Page"
    },
    {
      image: "/images/demo/demo4.png",
      caption: "Student Sign In"
    },
    {
      image: "/images/demo/demo5.png",
      caption: "Student Sign In (OTP)"
    },
    {
      image: "/images/demo/demo6.png",
      caption: "OTP Email"
    },
    {
      image: "/images/demo/demo8.png",
      caption: "Student Dashboard"
    },
    {
      image: "/images/demo/demo9.png",
      caption: "All Issues"
    },
    {
      image: "/images/demo/demo10.png",
      caption: "Profile Page"
    },
    {
      image: "/images/demo/demo11.png",
      caption: "Top Navbar"
    },
    {
      image: "/images/demo/demo12.png",
      caption: "Create Issue"
    },
    {
      image: "/images/demo/demo13.png",
      caption: "Issues Page"
    },
    {
      image: "/images/demo/demo14.png",
      caption: "Issue Mail"
    },
    {
      image: "/images/demo/demo15.png",
      caption: "Edit Issue"
    },
    {
      image: "/images/demo/demo16.png",
      caption: "Admin Login"
    },
    {
      image: "/images/demo/demo17.png",
      caption: "Admin Dashboard"
    },
    {
      image: "/images/demo/demo18.png",
      caption: "Staff List"
    },
    {
      image: "/images/demo/demo19.png",
      caption: "Create Staff"
    },
    {
      image: "/images/demo/demo20.png",
      caption: "Issue Status"
    },
    {
      image: "/images/demo/demo21.png",
      caption: "Assign Staff"
    },
    {
      image: "/images/demo/demo22.png",
      caption: "Staff Login"
    },
    {
      image: "/images/demo/demo23.png",
      caption: "Staff Dashboard"
    },
    {
      image: "/images/demo/demo25.png",
      caption: "Staff Email"
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2 className='text-5xl font-bold mt-32 mb-5'>Gallery</h2>
        <p className="mb-12 mx-36 sm:mx-5 text-base !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
          Well we believe that you should not trust anything until you see it yourself. So here are some screenshots from our solution.
        </p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery