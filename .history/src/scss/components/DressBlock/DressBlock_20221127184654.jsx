import React from 'react';
import './_dress-block.scss';
function DressBlock() {
  return (
            <div class="dress-block">
              <img
                class="dress-block__image"
                src="/images/dresses/dress1.jpg"
                alt="Dress"
              />
              <h4 class="dress-block__title">Princess Dress</h4>
              <div class="dress-block__selector">
                <ul>
                  <li class="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul>
                  <li class="active">26 см.</li>
                  <li>XS</li>
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                </ul>
              </div>
              <div class="dress-block__bottom">
                <div class="dress-blockk__price">125</div>
                <div class="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
  )
}

export default DressBlock;