/*
 *  Copyright 2022 Patrick L. Branson
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const cloud1 = document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
const cloud3 = document.getElementById("cloud3");
const cloud4 = document.getElementById("cloud4");
const cloud5 = document.getElementById("cloud5");

const airBalloon = document.getElementById("air-balloon");

const react = document.getElementById("react");
const graphql = document.getElementById("graphql");
const javascript = document.getElementById("javascript");

/**
 * Animates the movement when the user scrolls down
 */
const animate = () => {
  const incrementor = window.scrollY;

  cloud1.style.bottom = 40 + incrementor * 0.12 + "%";
  cloud1.style.left = 75 + incrementor * 0.1 + "%";

  cloud2.style.bottom = 80 + incrementor * 0.14 + "%";
  cloud2.style.left = 70 + incrementor * 0.15 + "%";

  cloud3.style.bottom = 60 + incrementor * 0.1 + "%";
  cloud3.style.left = 0 + incrementor * -0.12 + "%";

  cloud4.style.bottom = 70 + incrementor * 0.16 + "%";
  cloud4.style.left = 20 + incrementor * -0.15 + "%";

  cloud5.style.bottom = 60 + incrementor * 0.2 + "%";
  cloud5.style.left = 60 + incrementor * 0.16 + "%";

  // The 10 refers to the height of the bottom of
  // the sky section. The 10 was added in the CSS file.
  airBalloon.style.bottom = 10 + incrementor * 0.1 + "%";

  react.style.left = 26 + incrementor * -1.5 + "%";
  javascript.style.left = 20 + incrementor * -2.2 + "%";
};

window.addEventListener("scroll", animate);
