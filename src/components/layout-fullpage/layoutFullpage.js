
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import './layoutFullpage.scss'; // contains some updates of basic styles

// import Swiper JS
import Swiper, {Navigation, Pagination, Mousewheel} from 'swiper';


export {initLayoutFullpage};

function initLayoutFullpage() {

    const swiper = new Swiper(".fullpage-slider", {
        modules: [Navigation, Pagination, Mousewheel],
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 0,
        mousewheel: true,
        autoHeight: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}