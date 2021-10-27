const Home = () => {
    return (
    <div className="container">
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="coder2.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    {/* <h1 className="display-5 fw-bold lh-1 mb-3">Front End Developer</h1> */}
                    <h1 class="display-5 fw-bold lh-1 mb-3 caret-underscore main-title">Front End Developer<span>&nbsp;</span>
</h1>
                    <p className="lead">
                        {/* Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. */}
                        {/* I strive producing tangible and usable products while maintaining user-friendliness and usability. */}

                        Tangible, meaningful and usable products are what I strive for, as well as keeping up 
                        with the latest tools and technologies.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Let's talk!</button>
                        <button type="button" className="btn btn-outline-light btn-lg px-4">Explore my work</button>
                    </div>
                </div>
            </div>

            <div className='center m-5'>
                {/* <div className='scroll-down center border rounded-circle'>
                    <i className="fs-1 fas fa-chevron-down"></i>
                </div> */}
                <a href='#skills'><i className="fs-1 fas fa-chevron-down" /></a>
                {/* <div className='divider' /> */}
            </div>

            <div className='row flex-lg-row align-items-center g-5 py-5'>
                <div className="col-lg-6">
                    <h1 id='skills' className="display-5 fw-bold lh-1 mb-3 caret-underscore">Skills<span>&nbsp;</span> </h1>
                </div>
            </div>
        </div>
    </div>);
}

export default Home;