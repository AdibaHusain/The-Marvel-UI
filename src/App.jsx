import React from 'react'
import Section1 from './assets/components/Section1/Section1.jsx'
import Section2 from './assets/components/Section2/Section2.jsx'
const users=[
  {img:'https://i.pinimg.com/1200x/e8/2c/b9/e82cb9d15a0d644292b7e0d45330e371.jpg',
    intro:'He wasn’t born a hero — he engineered one. A man of wit, flaws, and fire, Tony Stark proved that true power lies not in armor, but in heart.Part of the journey is the end, yet his spark keeps the world inspired.',
    tag:'Tony in Suit'},

  {img:'https://i.pinimg.com/736x/46/47/7f/46477fbd6ce2d387b6acb4291e81cbcb.jpg',
    intro:'Strength didn’t make him a hero — belief did. Steve Rogers stood for courage, loyalty, and what’s right, even when the world didn’t.His shield may rest, but his spirit still leads every fight.',
    tag:'I am IronMan'},

  {img:'https://i.pinimg.com/1200x/e2/e8/4b/e2e84be19b80a9efd84cea06d2a6e1a6.jpg',
    intro:'One led with technology, the other with faith. Together, they shaped the soul of the Avengers — intellect and integrity in perfect balance. Their bond reminds us: true heroes rise for something greater than themselves.',
    tag:'Genius'},
    
    {img:'https://i.pinimg.com/736x/92/aa/ef/92aaef8bba87db4b7f2aa0fc886d6f82.jpg',
    intro:'Wealth isn’t just about riches — it’s a responsibility. As a billionaire, he learned that true power lies in using resources for the greater good. His journey teaches us: with great wealth comes even greater duty.',
    tag:'Billionaire'},

    {img:'https://i.pinimg.com/736x/a0/41/fc/a041fc6b8e769f4708f725bb9f944536.jpg',
    intro:'Before the shield, he was just Steve Rogers — a kid who refused to back down. From Brooklyn’s streets to the battlefield, he proved that courage can’t be manufactured. “I can do this all day.” — and he truly did.',
    tag:'Captain America'},

    {img:'https://i.pinimg.com/736x/c3/15/26/c3152631247399fffd357983e9ebe61d.jpg',
    intro:'Power didn’t define him — purpose did. He fought not for glory, but for what was right, reminding the world that leadership is earned through heart, not fame. His moral compass never wavered, even when the world did.',
    tag:'The First Avenger'},

    {img:'https://i.pinimg.com/736x/04/15/75/0415758f288826cb8b93a47ca5aa8984.jpg',
    intro:'Captain America stood as the soul of the Avengers — their courage when all hope seemed lost. His shield wasn’t just defense; it was a symbol of unity and resilience. He didn’t command — he inspired.',
    tag:'Super Soldier'},
    
    {img:'https://i.pinimg.com/736x/a7/c1/d5/a7c1d5414966d9347722b46f20ffe7d1.jpg',
    intro:'In the end, it’s not about the suit — it’s about the man inside. He proved that true strength comes from within, and that anyone can be a hero with the right mindset.',
    tag:'The Shield'}

]
const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
