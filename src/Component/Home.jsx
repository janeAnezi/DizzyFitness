import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
const Home = () => {
    const slides = [
        {
          background: "url('/path-to-image1.jpg')",
          title: "Slide 1 Title",
          description: "This is the content for slide 1.",
        },
        {
          background: "url('/path-to-image2.jpg')",
          title: "Slide 2 Title",
          description: "This is the content for slide 2.",
        },
        {
          background: "url('/path-to-image3.jpg')",
          title: "Slide 3 Title",
          description: "This is the content for slide 3.",
        },
    ];
  return (
    <main className='pt-20'>
        <header  className='h-screen'>Landing</header>
        <section className='h-screen'>Below</section>
        <section className='h-screen'>Below</section>
    </main>
  )
}

export default Home
