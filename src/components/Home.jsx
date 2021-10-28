import poly from '../poly.svg';

import {html, js, py, boolma, mongo, react, firebase, heroku} from '../assets/';

const languages = [
    {
        name: 'HTML & CSS',
        experience: 'Building static and dynamic websites, such as landing pages and ecommerces.',
        time: '2 years',
        img: html
    },
    {
        name: 'JavaScript',
        experience: 'Adding functionality to websites, mobile apps and APIs.',
        time: '2 years',
        img: js
    },
    {
        name: 'Python',
        experience: 'Building helper CLI tools and libraries to solve problems.',
        time: '1 year',
        img: py
    }
];

const technologies = [
    {
        name: 'Bootstrap & Bulma',
        experience: 'Quickly build beautiful sites with the help of CSS frameworks.',
        time: '1 year',
        img: boolma
    },
    {
        name: 'MongoDB',
        experience: 'Adding a persistence layer to data-driven applications.',
        time: '+6 months',
        img: mongo
    }, 
    {
        name: 'ReactJS',
        experience: 'Building rich, dynamic and scalable user interfaces on SPAs.',
        time: '1 year',
        img: react
    }
]

const platforms = [
    {
        name: 'Firebase',
        experience: 'Creating complex backends with live databases, authentication mechanisms and web hosting.',
        time: '1 year',
        img: firebase
    },
    {
        name: 'Heroku',
        experience: 'Deployment of production-ready projects such as REST APIs and bots.',
        time: '1 year',
        img: heroku
    }
];

const renderCards = arr => {
    return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {arr.map(({name, experience, time, img}) => (
            <div class="col" >
                <div class="card h-100 bg-dark" style={{border: '1px solid #6c757d'}}>
                    <img src={img} class="card-img-top" alt={`${name} logo`} />
                    <div class="card-body">
                        <h5 class="card-title fs-3 ">{name}</h5>
                        <p class="card-text lead">{experience}</p>
                    </div>
                    <div class="card-footer fs-5">
                        <small class="text-muted">Experience: {time}</small>
                    </div>
                </div>
            </div>
        ))}    
    </div>);
}

const Home = () => {
    return (
    <div >
        <div className='svg-container' style={{overflow: 'hidden'}}>
            <img src={poly} className='svg-1'/>
            <img src={poly} className='svg-2'/>
            {/* <div className='svg-sep' /> */}
            {/* <img src={poly} className='svg-3'/> */}
            {/* <img src={poly} className='svg-4'/> */}
        </div>


        <div className="container" style={{position: 'relative', zIndex: 5}}>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5" >
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
                            <a href='#contact' className="btn btn-primary btn-lg px-4 me-md-2">Let's talk!</a>
                            <a href='projects' className="btn btn-outline-light btn-lg px-4">Explore my work</a>
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

                <div className='row flex-lg-row align-items-center g-5 py-5 main-content ' >
                    {/* <div className="col"> */}
                        <h1 id='skills' className="display-5 fw-bold lh-1 mb-3 caret-underscore">Skills<span>&nbsp;</span> </h1>
                    {/* </div> */}

                    <div className="col-12 d-flex align-items-start skills" >
                        <div className="col-3 nav flex-column nav-pills me-3 fs-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="languages-tab" data-bs-toggle="pill" data-bs-target="#languages" type="button" role="tab" aria-controls="languages" aria-selected="true">Languages</button>
                            <button className="nav-link" id="techs-tab" data-bs-toggle="pill" data-bs-target="#techs" type="button" role="tab" aria-controls="techs" aria-selected="false">Technologies</button>
                            <button className="nav-link" id="platforms-tab" data-bs-toggle="pill" data-bs-target="#platforms" type="button" role="tab" aria-controls="platforms" aria-selected="false">Platforms</button>
                            <button className="nav-link" id="tools-tab" data-bs-toggle="pill" data-bs-target="#tools" type="button" role="tab" aria-controls="tools" aria-selected="false">Tools</button>
                        </div>
                        <div className="col-8 tab-content fs-4 " id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="languages" role="tabpanel" aria-labelledby="languages-tab">
                                {renderCards(languages)}
                            </div>
                            <div className="tab-pane fade" id="techs" role="tabpanel" aria-labelledby="techs-tab">
                                
                                {renderCards(technologies)}
                            </div>
                            <div className="tab-pane fade" id="platforms" role="tabpanel" aria-labelledby="platforms-tab">
                                {/* <div className='skill-tab'>

                                    <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" /> </a> 
                                    <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" /> </a>  

                                </div> */}
                                {renderCards(platforms)}
                            </div>
                            <div className="tab-pane fade" id="tools" role="tabpanel" aria-labelledby="tools-tab">
                                a
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row flex-lg-row align-items-center g-5 py-5 main-content'>
                    <div className="col">
                        <h1 id='contact' className="display-5 fw-bold lh-1 mb-3 caret-underscore">Contact<span>&nbsp;</span> </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Home;