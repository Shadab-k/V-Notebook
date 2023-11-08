import React from 'react'

const About = () => {
  return (
    <>
     

        <div className="row featurette d-flex justify-content-center align-items-center  ">
          <div className="col-md-7">
            <h1 className="featurette-heading fw-normal lh-1">Welcome to Virtual Notebook!</h1>
            <h4 className="lead text-body-secondary">Save your data in the cloud</h4>
            <p className='my-3'>Hello users, This website is designed for saving your data safely to the cloud and you can use it later on.</p>
            <p>What We Offer: <br /><br />
              <h4 className='text-dark'>Write and Create:</h4>
              Express yourself with the freedom to write and create. Share your stories, ideas, and experiences in the form of titles, summaries, and author names. Our user-friendly platform makes it easy for you to draft and save your content.
              <br /><br />

              <h4 className='text-dark'> Save for Later:</h4>
              Life can be busy, and inspiration can strike at any moment. That's why we've made it simple for you to save your work for later. Your unfinished creations are safely stored, ready for you to pick up where you left off.
              <br /><br />

              <h4 className='text-dark'>Read and Reflect:</h4>
              Dive into a world of inspiration by revisiting your saved content. Read your stories, reflect on your thoughts, and watch your ideas grow. It's like having a personal library of your own creations.</p>
          </div>
          <div className="col-md-5 order-md-1">

            <img src="about1.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" height="800" alt="" />

          </div>
        </div>

        <div className="row featurette my-5 d-flex justify-content-center align-items-center">
          <div className="col-md-7 order-md-2">
            <h1 className="featurette-heading fw-normal lh-1">Why Choose Virtual Notebook?</h1>
            <p className="lead"><br />

              <h4 className='text-dark'> Empower Your Creativity: </h4>

              Writing is a journey, and we're here to empower your creativity. Whether you're an amateur writer or a seasoned author, our platform is designed for you.

              Privacy and Security: Your work is your own, and we take your privacy seriously. Your content is secure and accessible only to you.

              User-Friendly: Our intuitive platform is designed to make writing and saving effortless. No technical hurdles—just pure creativity.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src="about2.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="" />

          </div>
        </div>

        <div className="row featurette d-flex justify-content-center align-items-center ">
          <div className="col-md-7">
            <h1 className="featurette-heading fw-normal lh-1">Join Our Community</h1>
            <p className=' my-3 lead' >
              At Virtual Notebook, we're building a community of passionate writers and thinkers. Connect with fellow creators, share your experiences, and learn from one another.</p>
          </div>




          <div className="col-md-5 order-md-1">

            <img src="img2.webp" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" height="800" alt="" />

          </div>
        </div>
  

    </>

  )
}

export default About
