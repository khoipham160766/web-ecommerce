import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import SuggestProduct from "./suggestProduct";
import "./style.css";

const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const plus_quantity = () => {
        setQuantity(quantity + 1);
    }
    const minus_quantity = () => {
        setQuantity((quantity - 1) < 1?1:quantity-1);
    }
    const config_screen_swiper = {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    }
    return(
        <Fragment>
            <div className="row mb-4">
                {/* list images */}
                <div className="d-none d-lg-block col-lg-1">
                    <div className="image-vertical-scroller">
                        <div className="d-flex flex-column">
                            <img className="rounded mb-2 ratio" alt="" src="../../images/book-1.jpg"/>
                            <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                            <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                            <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                            <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                            <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                            <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                            <img className="rounded mb-2 ratio opacity-img" alt="" src="../../images/book-1.jpg"/>
                        </div>
                    </div>
                </div>
                {/* main image */}
                <div className="col-lg-5 main-image">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <img className="border rounded ratio ratio-1x1" alt="" src="../../images/book-1.jpg"/>
                        </div>
                    </div>
                </div>
                {/* content product */}
                <div className="col-lg-6 detail-content-product">
                    <div className="d-flex flex-column h-100">
                        <h2 className="mb-1">S??ch V??n H???c Th???i K??? Trung ?????i ?????n Hi???n ?????i</h2>
                        <dl className="row mt-3">
                            <dd className="col-sm-3">Nh?? xu???t b???n</dd>
                            <dt className="col-sm-9 mb-2">NXB T???ng H???p TPHCM</dt>
                            <dd className="col-sm-3">T??c gi???</dd>
                            <dt className="col-sm-9 mb-2">Nguy???n Ph??c An</dt>
                            <dd className="col-sm-3">Th??? lo???i</dd>
                            <dt className="col-sm-9 mb-2">S??ch V??n H???c</dt>
                        </dl>
                        <div className="mt-3">
                            <span className="price">63.000</span>
                            <span className="old-price">99.000</span>
                            <span className="sale-percent">-15%</span>
                        </div>
                        <div className="row mt-4">
                            <div className="col-4 col-sm-3 mt-1">
                                <span className="title-quantity">S??? l?????ng</span>
                            </div>
                            <div className="col-8 col-sm-9">
                                <div className="buttons_added">
                                    <input className="minus is-form" type="button" value="-" onClick={minus_quantity}/>
                                    <input aria-label="quantity" name="quantity" class="input-qty" type="text" value={quantity}/>
                                    <input className="plus is-form" type="button" value="+" onClick={plus_quantity}/>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 mb-4 mt-4">
                            <div className="col">
                                <button className="btn btn-outline-dark py-2 w-100 custom-add-cart">
                                    <FontAwesomeIcon icon={faShoppingCart}/>
                                    Th??m v??o gi??? h??ng
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-dark py-2 w-100 custom-buy-now">
                                    Mua ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row description">
                <h2 className="title-description">M?? t???</h2>
                <span>
                    Cha m???t khi c???u ng?????i trong m???t tr???n l??. Th????ng m??? v???t v??? m???t m??nh nu??i hai anh em ??n h???c, H??ng ???? s???m bi???t lo toan vi???c nh??, ch??m s??c em. ?????t nhi??n n???n d???ch Covid tr??n v???, l??m cu???c s???ng c???a ba m??? con ???? kh?? kh??n c??ng kh?? kh??n h??n.
                    Ba m??? con h???c c??ch th??ch nghi v???i ho??n c???nh, h???c nh???ng k?? n??ng t??? b???o v??? m??nh v?? gi??p ?????,
                    th????ng y??u m???i ng?????i.
                    B??o l?? c??ng ??ua nhau ???p t???i???
                    Trong nh???ng ng??y hoang mang lo l???ng c??ng c???c, b?? m???t gia ????nh ???????c ti???t l??????
                    Nh??ng sau t???t c??? l?? t??nh y??u v?? s??? tr?????ng th??nh. Nh???ng ng?????i d??ng ??? m???t nh??, y??u nhau h??n ru???t th???t.

                    Nh?? v??n NGUY???N B?? H??A sinh n??m 1955, qu?? qu??n Qu???ng Nam, l?? gi???ng vi??n ?????i h???c ???? ngh??? h??u.
                </span>
            </div>
            <div className="row suggestion">
                <h2 className="title-suggestion">G???i ?? s???n ph???m c??ng lo???i</h2>
                <SuggestProduct breakpoints_data={config_screen_swiper}/>
            </div>
        </Fragment>
    )
}

export default DetailProduct;