import React from 'react'

function Header() {
  return (
    <div>
      <div className='bg-dark text-white py-4 d-flex justify-content-between'>
          
          <div className='nav '>
          <img src="https://www.vhv.rs/dpng/d/590-5902776_technology-icon-png-transparent-technology-icon-white-png.png" width="40px" className='ms-5 border rounded-circle' alt="" />
            <li className='nav-item ps-5'>Home</li>
            <li className='nav-item ps-5'>About Author</li>
            <li className='nav-item ps-5'>About this Project</li>
          </div>
          <div className='nav'>
              <li className="nav-item ps-5">
                  <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" width="40px" className='ms-5 border rounded-circle' alt="" />
              </li>
              <li className="nav-item ps-5">
                  <img src="https://freesvg.org/img/Mail-Icon-White-on-Black.png" width="40px" className='border rounded-circle' alt="" />
              </li>
              <li className="nav-item ps-5">
                  <img src="https://w7.pngwing.com/pngs/389/604/png-transparent-logo-computer-icons-youtube-insta-circle-label-logo-social-media-marketing-thumbnail.png" width="40px" className='border rounded-circle' alt="" />
              </li>
              <li className="nav-item ps-5">
                  <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png" width="40px" className='me-5 border rounded-circle' alt="" />
              </li>
          </div>
      </div>
      <div >
          
      </div>
    </div>
  )
}

export default Header