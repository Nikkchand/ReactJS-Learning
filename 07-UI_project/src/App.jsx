import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'royalblue',
      intro: 'Regular users who actively use digital banking services, trust the platform, prefer online transactions, and expect fast, secure, and seamless financial experiences.',
      tag:'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Users with limited access to banking services due to lack of awareness, poor connectivity, or complex processes, needing simple, affordable, and accessible solutions.',
      color:'yellow',
      tag:'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'People who have bank accounts but rarely use digital services, relying more on cash, needing better education, trust, and user-friendly digital interfaces.',
      color:'red',
      tag:'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Young users comfortable with mobile apps, online payments, and fintech tools, expecting innovative features, speed, personalization, and smooth user experience.',
      color:'orange',
      tag:'Tech-Savvy Youth'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      color:'green',
      intro: 'First-time digital banking users from rural areas, needing easy onboarding, regional language support, guidance, and trust-building features for confident usage.',
      tag:'Rural & New Users'
    }
  ]
  return (
    <div >
      <Section1 users={users}/>
    </div>
  )
}

export default App
