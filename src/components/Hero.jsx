
import React from 'react'

const HeroSection = () => {
  return (
  <main className="hero container">
    <div className="hero-content">
        <h1>'Ab Har Koi Reason Chalega!</h1>
        <p>The dress must not hang on the body but follow its lines. When a woman smiles, a dress must smile with her.</p>
        <div className="hero-btn">
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="amazon-logo" />
            </div>
        </div>
    </div>
    <div className="hero-image">
    <img src="/images/hero-image.png" alt="amazon-logo" />
    </div>
  </main>
                 
  );
}

export default HeroSection