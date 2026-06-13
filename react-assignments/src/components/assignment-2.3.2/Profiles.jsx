import React from 'react'
import Profile from './Profile'

function Profiles() {
  let items=[
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1661436597788-920f2fa4cc7b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "News A@p using ReactJS |Parsing XML RSS feed to JSON|",
      desc: "News App using ReactJS (Parsing XML to JSON) Phase by Christina Monillo from ApenaLive Demo",
      bottom: {
        name: "Melai Kubheri",
        date: "Aug 11, 2019 04:33"
      }
    },
    {
      id: 2,
      image: "https://marketplace.canva.com/EAFbCxgyHF0/1/0/1600w/canva-black-and-white-aesthetic-minimalist-modern-simple-typography-coconut-cosmetics-logo-jUM1MX-sRvw.jpg",
      title: "Medium Like Blogging App Using Angular 9 and Firebase",
      desc: "Creating a medium like Blog App Using Angular 8 and Firebase Photo by Miguel d.Pedrihas A0ar.",
      bottom: {
        name: "Melai Kubheri",
        date: "Jul 18, 2020 10:58"
      }
    },
    {
      id: 3,
      image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/3/shutterstock_1702779493.jpg",
      title: "COVID 19 Tracker (Statistics) app Using Angular",
      desc: "COVID 19 Tracker (Statistics) app Using Angular Dark Mode Demonsrtoduction Everyone in aware",
      bottom: {
        name: "Melai Kubheri",
        date: "Aug 04, 2020 08:45"
      }
    }
  ]
  return (
    <div className='container d-flex justify-content-around'>
        <Profile userObj={items[0]} />
        <Profile userObj={items[1]} />
        <Profile userObj={items[2]} />
    </div>
  )
}

export default Profiles