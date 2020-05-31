import React from "react";
import "./header.scss";
import { Row, Col, Button } from "antd";

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="header_main">
          <Row type="flex" justify="center" align="middle">
            {/* <div className="header_banner"> */}
            <Col className="hmm" lg={23}>
              <a href="/vi/" className="header__logo">
                <svg
                  version="1.1"
                  viewBox="0 0 50 50"
                  className="svg-icon svg-fill"
                  style={{ width: "34px", height: "34px" }}
                >
                  <path
                    pid="0"
                    d="M25.093 0c13.781.06 24.94 11.317 24.882 25.106C49.917 38.894 38.663 50.058 24.88 50 11.1 49.942-.059 38.683.001 24.894.057 11.106 11.31-.058 25.092 0zm11.801 31.9L14.398 16.053c.241-.26.48-.518.74-.777 2.7-2.687 5.971-4.031 9.775-4.015 3.804.015 7.064 1.388 9.741 4.098.238.241.476.482.694.743l-5.951 4.133 2.381 1.688 5.153-3.576v.02L39.33 16.7c-.692-1.203-1.584-2.325-2.616-3.39-3.231-3.292-7.167-4.947-11.788-4.967-4.6-.019-8.53 1.603-11.809 4.867a17.806 17.806 0 0 0-2.682 3.408l1.429 1.004 23.429 16.51c-.24.26-.48.518-.74.777-2.7 2.687-5.971 4.011-9.775 3.996-3.803-.016-7.063-1.37-9.74-4.08-.258-.26-.496-.521-.734-.782l6.111-4.251-.139-.181-2.183-1.528-5.373 3.735v-.021l-2.377 1.65a17.824 17.824 0 0 0 2.654 3.43c3.253 3.291 7.169 4.946 11.769 4.965 4.62.021 8.549-1.602 11.83-4.866 1.06-1.075 1.96-2.21 2.682-3.406l-2.383-1.67z"
                  ></path>
                </svg>
              </a>
              <Col className="" lg={10}>
                <div className="search_box">
                  <div className="search-location">
                    <svg
                      version="1.1"
                      viewBox="0 0 15 15"
                      class="mr--12 svg-icon svg-fill"
                      style={{ width: "14px", height: "14px" }}
                    >
                      <g
                        stroke="#919191"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <path pid="0" d="M10 10l4 4"></path>
                        <circle pid="1" cx="6.5" cy="6.5" r="5.5"></circle>
                      </g>
                    </svg>
                    <input
                      className="span_search"
                      placeholder="Tìm kiếm"
                    ></input>
                  </div>
                  <div className="search-location lo1">
                    <svg
                      version="1.1"
                      viewBox="0 0 14 16"
                      class="svg-icon svg-fill"
                      style={{ width: "14px", height: "16px" }}
                    >
                      <path
                        pid="0"
                        d="M9 2V1a1 1 0 1 1 2 0v1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3V1a1 1 0 1 1 2 0v1h4zM2 7v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7H2z"
                        fill="#666"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    <h4 className="span_search">Ngày</h4>
                  </div>
                  <div className="search-location lo2">
                    <svg
                      version="1.1"
                      viewBox="0 0 16 16"
                      class="mr--12 svg-icon svg-fill"
                      style={{ width: "14px", height: "16px" }}
                    >
                      <path
                        pid="0"
                        d="M8 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c4.926 0 7.59 1.966 7.995 5.898A1.002 1.002 0 0 1 14.994 16H1.006a1.003 1.003 0 0 1-1-1.102C.408 10.966 3.073 9 8 9z"
                        fill="#666"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    <h4 className="span_search">Số khách</h4>
                  </div>
                  <div className="search-location lo3">
                    <button
                      type="button"
                      id="search-btn"
                      class="booking__btn btn btn--secondary bold mt--12 mt--md--0"
                    >
                      <svg
                        version="1.1"
                        viewBox="0 0 15 15"
                        class="svg-icon svg-fill"
                        style={{ width: "14px", height: "16px" }}
                      >
                        <g
                          stroke="#FFF"
                          stroke-width="2"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <path pid="0" d="M10 10l4 4"></path>
                          <circle pid="1" cx="6.5" cy="6.5" r="5.5"></circle>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </Col>
              <Col className="title" lg={12}>
                <div className="title_header">
                  <h4 className="span_tit acti">Host</h4>
                  <h4 className="span_tit">Đăng ký</h4>
                  <h4 className="span_tit">Đăng nhập</h4>
                  <h4 className="span_sele">VND</h4>
                </div>
              </Col>
            </Col>

            {/* </div> */}
          </Row>
        </div>
      </div>
      <Row type="flex" justify="center" align="middle">
        <Col className="img_banner" lg={22}>
          <div className="img_ban"></div>
          <div className="tittle tit">
            <h2 className="tittle_span">Chào mừng đến với Luxstay!</h2>
          </div>
          <p class="p_span">
            Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên
            Luxstay
          </p>
          <p class="p_span">
            <a> Đăng nhập </a>
            hoặc <a> Đăng ký</a> {""}
            để trải nghiệm !
          </p>
          <div className="list_stay">
            <Col className="item " lg={5}>
              <div className="item_img "></div>
              <h2 class="item_span">Homestay</h2>
              <p class="item_p">Căn hộ dịch vụ &amp; Biệt thự</p>
            </Col>
            <Col className="item  " lg={5}>
              <div className="item_img it1"></div>
              <h2 class="item_span">Vé tham quan</h2>
              <p class="item_p">Mua vé thật dễ dàng</p>
            </Col>
            <Col className="item " lg={5}>
              <div className="item_img it2"></div>
              <h2 class="item_span">Thuê xe ô tô</h2>
              <p class="item_p">Bao gồm tài xế</p>
            </Col>
            <Col className="item " lg={5}>
              <div className="item_img it3"></div>
              <h2 class="item_span">Đưa đón sân bay</h2>
              <p class="item_p">Xe sang chỉ từ 199.000đ</p>
            </Col>
          </div>
          <div className="tittle tit">
            <h2 className="tittle_span">Ưu đãi độc quyền</h2>
          </div>
          <p class="p_span">
            Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!
          </p>
          {/* list click change */}
          <div className="list_img">
            <div className="list_stay">
            <div className="list_stay-width"></div>
              <Col className="item play" lg={7}>
                <div className="item_img play"></div>
              </Col>
              <Col className="item play" lg={7}>
                <div className="item_img play1"></div>
              </Col>
              <Col className="item play" lg={7}>
                <div className="item_img play2"></div>
              </Col>
              <Col className="item play " lg={7}>
                <div className="item_img play3"></div>
              </Col>
            </div>
          </div>
          <div className="tittle tit">
            <h2 className="tittle_span">
              Me Before Deadline 30. "Chơi" xong rồi cưới!
            </h2>
          </div>
          <p class="p_span">
            Đừng lo lắng dù deadline cưới xin trước 30 đang gần kề. Cứ bình tĩnh
            book nhà vô tư cùng bạn bè vi vu khắp nơi nhé. Nhập mã 30LOGI | Giảm
            thêm đến 300.000đ.
          </p>
          <div className="list_stay">
            <Col className="item" lg={4}>
              <div className="item_img"></div>
              <h2 class="item_span">Homestay</h2>
              <p class="item_p">Căn hộ dịch vụ &amp; Biệt thự</p>
            </Col>
            <Col className="item " lg={4}>
              <div className="item_img it1"></div>
              <h2 class="item_span">Vé tham quan</h2>
              <p class="item_p">Mua vé thật dễ dàng</p>
            </Col>
            <Col className="item " lg={4}>
              <div className="item_img it2"></div>
              <h2 class="item_span">Thuê xe ô tô</h2>
              <p class="item_p">Bao gồm tài xế</p>
            </Col>
            <Col className="item " lg={4}>
              <div className="item_img it3"></div>
              <h2 class="item_span">Đưa đón sân bay</h2>
              <p class="item_p">Xe sang chỉ từ 199.000đ</p>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
