// Your code here

const moveDodgerLeft = () => {
  let dodger = document.querySelector('#dodger');
  dodger.style.left = 0;
};

// style="bottom: 0px; left: 180px;"


const moveDodgerRight = () => {
  let dodger = document.querySelector('#dodger');
  dodger.style.left = "180px";
  dodger.style.right = 0;
}