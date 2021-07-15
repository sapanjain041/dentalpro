import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBLogInfo } from "../../redux/action";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Blog = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.blogData);
  useEffect(() => {
    dispatch(getBLogInfo());
  }, [dispatch]);
  return (
    <section id="Blogs">
      <div className="container pb-50">
        <div className="section-title text-center">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="mt-0 line-height-1">
                Recent <span className="text-theme-colored"> News</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <div
                      className="post clearfix maxwidth600 mb-30 wow fadeInRight"
                      data-wow-delay=".2s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                      }}
                    >
                      <div className="entry-header">
                        <div className="post-thumb thumb">
                          <img
                            src={item.blog_image}
                            alt=""
                            className="img-responsive img-fullwidth"
                          />
                        </div>
                      </div>
                      <div className="bg-theme-colored2 p-5 text-center pt-10 pb-10">
                        <span className="mb-10 text-white mr-10 font-13">
                          <i className="fa fa-calendar mr-5 text-white"></i>21
                          February
                        </span>
                        <span className="mb-10 text-white mr-10 font-13">
                          <i className="fa fa-commenting-o mr-5 text-white"></i>{" "}
                          214 Comments
                        </span>
                        <span className="mb-10 text-white mr-10 font-13">
                          <i className="fa fa-heart-o mr-5 text-white"></i> 895
                          Likes
                        </span>
                      </div>
                      <div className="entry-content bg-lighter p-20 pr-10">
                        <div className="entry-meta mt-0 no-bg no-border">
                          <div className="event-content">
                            <h3 className="entry-title text-white text-capitalize m-0">
                              <a href="#">{item.title}</a>
                            </h3>
                          </div>
                        </div>
                        <p className="mt-10">{item.description}</p>
                        <div className="mt-10">
                          {" "}
                          <a
                            href="blog-single-left-sidebar.html"
                            className="btn btn-theme-colored btn-sm"
                          >
                            Read More
                          </a>{" "}
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              ...
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
