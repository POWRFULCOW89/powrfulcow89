export default function Footer(){
  //   return <div className="container">

  //   <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  //     <div className="col-md-4 d-flex align-items-center">
  //       <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
  //         {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
  //       </a>
  //       <span className="text-muted">© 2021 Company, Inc</span>
  //     </div>
  
  //     <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
  //       {/* <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
  //       <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
  //       <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
  //     </ul>
  //   </footer>
  // </div>

  return (
    <div className="container" style={{zIndex: 5}}>
      <footer className="row py-3 mt-4">
        <ul className="col list-unstyled d-flex justify-content-center h3">
          <li className="ms-3 social-button"><a className="text-muted social-button" href="https://github.com/POWRFULCOW89" target="_blank" ><i className="fab fa-linkedin-in"></i></a></li>
          <li className="ms-3 social-button"><a className="text-muted" href="https://mx.linkedin.com/in/diego-melo-mx" target="_blank" ><i className="fab fa-github"></i></a></li>
          {/* <li className="ms-3"><a className="text-muted" href="#"><i className="fab fa-linkedin-in"></i></a></li> */}
        </ul>
        {/* <div className="border-bottom mt-3 mb-4" style={{borderColor: 'gray'}}  /> */}
        <div className='divider m-2'  />
        <p className="text-center text-muted">© 2021 Diego Melo</p>
      </footer>
    </div>
  );
}