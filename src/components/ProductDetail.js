import React from 'react';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

export default function ProductDetail({ item, addItem, addWish }) {
  const { imageUrl, price, name } = item;
  return (
    <div>
      <div className="container-fluid container-product">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-md-6 col-left">
            <ReactFancyBox thumbnail={imageUrl} image={imageUrl} />
          </div>
          <div className="col-md-12 col-lg-6 right-col">
            <div className="body">
              <h4>{name}</h4>
              <div className="detail-product">
                <span className="price-num">€{price}</span>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo
              </p>
              <div className="st-info">
                <div className="extra-info">
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                  <span>Order before tomorrow 15:00 to receive tomorrow.</span>
                </div>
                <div className="extra-info">
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                  <span>Worldwide shipping.</span>
                </div>
              </div>
            </div>
            <div className="btn-wrapper">
              <button
                type="button"
                className="btn btn-lg btn-add-cart"
                onClick={() => addItem(item)}
              >
                Add to cart
              </button>

              <button
                type="button"
                className="btn btn-lg btn-add-wish"
                onClick={() => addWish(item)}
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
