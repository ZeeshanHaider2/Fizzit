import React from "react";

const About = () => {
  return (
    <div style={{ textalign: "center" }}>
      <div className="card-panel teal lighten-2">
        <h1>About Us</h1>
        <p>
          Fizzit was founded in 2017. Stefan was an environmental <br />
          engineer and made a life cycle assessment of CO2 from the <br />
          world-renonwed industrial park Kalundborg Symbiosen.
        </p>
        <button>Watch Video</button>
        <h3>Scroll to find out more</h3>
      </div>

      <div>
        <h1>Our Mission</h1>
        <div>Bla Bla Bla</div>
      </div>

      <div className="card-panel teal lighten-2">
        <h1>Our Story</h1>
        <div>Bla Bla Bla</div>
        <h3>Read More</h3>
      </div>

      <div>
        <h1>Foot Print</h1>
        <div>Bla Bla Bla</div>
      </div>

      <div className="card-panel teal lighten-2">
        <h1>Our Team</h1>
        <div class="row">
          <div class="col s1">1</div>
          <div class="col s1">2</div>
          <div class="col s1">3</div>
        </div>
        <div class="row">
          <div class="col s1">1</div>
          <div class="col s1">2</div>
          <div class="col s1">3</div>
        </div>
      </div>

      <div>
        <h1>Sustainability</h1>
      </div>

      <div className="card-panel teal lighten-2">
        <h1>Check Our Blog</h1>
        <div class="row">
          <div class="col s1">1</div>
          <div class="col s1">2</div>
        </div>
        <button>See More</button>
      </div>
    </div>
  );
};

export default About;
