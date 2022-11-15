import React from "react";
import 'mdb-react-ui-kit'

export const Compartir = () => {
    const share = document.querySelector('.share');

    setTimeout(() => {
      share.classList.add("hover");
    }, 1000);
    
    setTimeout(() => {
      share.classList.remove("hover");
    }, 3000);
  return (
    <div class="share">
      <span>Share</span>
      <nav>
        <a href="https://twitter.com/Apple">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-google"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
      </nav>
    </div>
  );
};
