import React from 'react'
import image12 from '../../../assets/image12.png'
import image13 from '../../../assets/image13.png'
import image14 from '../../../assets/image14.png'
import Quotes from '../../../assets/Quotes.png'

function Section1() {
  return (
    <>
    <div className="px-[180px] pb-[100px] flex flex-col gap-[50px] justify-between max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:gap-[30px] max-[640px]:px-[50px] max-[640px]:gap-[30px] max-[640px]:flex-col max-[768px]:px-[100px]">
      <img src={image12} alt="" />
      <div className="px-[134px] flex flex-col gap-[50px] max-[450px]:px-[15px]">
         <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[24px]">
              <div className="flex items-center gap-[6px]  z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 2.25V5.25" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 2.25V5.25" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 8.25H20.25" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <p className='text-[16px] font-medium text-[#9AA1A6]'>15 Jan, 2021</p>
              </div>
              <div className="flex items-center gap-[6px]  z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 16.5L12 21.75L21 16.5" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12L12 17.25L21 12" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <p className='text-[16px] font-medium text-[#9AA1A6]'>5 Min read</p>
              </div>
              <div className="flex items-center gap-[6px]  z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z" stroke="#1777E5" stroke-width="1.5" stroke-miterlimit="10"/><path d="M14.5688 5.42813C14.9998 5.31124 15.4442 5.25136 15.8907 5.25C17.1837 5.25 18.4236 5.76361 19.3379 6.67785C20.2521 7.59209 20.7657 8.83207 20.7657 10.125C20.7657 11.4179 20.2521 12.6579 19.3379 13.5721C18.4236 14.4864 17.1837 15 15.8907 15" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.5 18.5066C2.2612 17.4234 3.27191 16.5393 4.44676 15.9289C5.6216 15.3186 6.92608 15 8.25 15C9.57392 15 10.8784 15.3186 12.0532 15.9289C13.2281 16.5393 14.2388 17.4234 15 18.5066" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.8906 15C17.2147 14.9992 18.5194 15.3174 19.6944 15.9277C20.8693 16.5381 21.8799 17.4225 22.6406 18.5063" stroke="#1777E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <p className='text-[16px] font-medium text-[#9AA1A6]'>95,741 View</p>
              </div>
            </div>
            <h1 className='text-[40px] font-semibold'>Why does a week have 7 days?</h1>
          </div>
          <p className='text-[18px] font-normal text-[#9AA1A6]'>There’s only one thing that every single culture, religion, and country in the world, agrees on? and it’s that there are only seven days in the week. Not one more or not one less. The reason why we organize our lives around a 7-day week is, quite literally, above our heads. Like many other calendars, today's Gregorian calendar is ultimately based on the phases of the Moon. It takes the Moon around 29.5 days to cycle through all Moon phases. For everyday purposes, this is a fairly long and impractical time span, so it makes sense to break it down into smaller segments.</p>
          <img src={image13} alt="" />
          <p className='text-[18px] font-normal text-[#9AA1A6]'>Enter the Babylonians. This ancient society, which lived in Mesopotamia in what is now Iraq, rounded the Moon cycle down to 28 days and divided this time span into 4 periods of 7 days each, using leap days to stay in sync with the Moon phases in the long run. This 7-day structure is also believed to have ultimately informed a number of popular creation myths, such as the Book of Genesis in the Hebrew and Christian Bibles, which states that God created the world in seven days: six days of work followed by one day of rest.</p>
         </div>
         <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[20px]">
            <p className='text-[24px] font-bold'>📌 Named after gods and planets</p>
            <p className='text-[18px] font-normal text-[#9AA1A6]'>Thousands of years ago there was no iPhone or watches to tell the time. So they would look up at the planet and their positions to guess it! They saw seven planets including the sun and the moon. Believe that each had superpowers. so they started to worship them. One planet will be the God of Justice, one planet will be the god of love. And just like that, every planet becomes a god. They wanted this god to watch over them 24/7. So they assign on god to every hour of the day. and eventually, they even gave a whole day to each. AND THAT’S HOW WE ENDED UP WITH 7 DAYS FOR 7 GODS.</p>
          </div>
          <div className="p-[48px] flex items-start gap-[32px] bg-[#125FB7] rounded-[12px]">
            <img src={Quotes} alt="" />
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <h2 className='text-[24px] font-normal'>Christians, Muslims, Jews, Europeans, Arabs, Asians and from china to Antarctica everybody has 7 days a week.</h2>
                <p className='text-[15px] font-normal text-[#B8CFE9]'>There’s only one thing that every single culture, religion, and country in the world, agrees on? and it’s that there are only seven days in the week. Not one more or not one less.</p>                
              </div>
              <p className='text-[16px] font-semibold'>Jamel Eusebio</p>
            </div>
          </div>
         </div>
         <p className='text-[18px] font-normal text-[#9AA1A6]'>Enter the Babylonians. This ancient society, which lived in Mesopotamia in what is now Iraq, rounded the Moon cycle down to 28 days and divided this time span into 4 periods of 7 days each, using leap days to stay in sync with the Moon phases in the long run. This 7-day structure is also believed to have ultimately informed a number of popular creation myths, such as the Book of Genesis in the Hebrew and Christian Bibles, which states that God created the world in seven days: six days of work followed by one day of rest.</p>
         <div className="flex gap-[24px]">
          <p className='text-[18px] font-normal text-[#9AA1A6]'>The names of the 7 days of the week in most Latin-based languages come from the Roman calendar, which related each day to 7 celestial bodies considered to be gods: the Sun, the Moon, Mercury, Venus, Mars, Jupiter, and Saturn. The English language has retained the planet names for Saturday, Sunday, and Monday. However, the names for the other days of the week have been replaced by their equivalent Norse or Germanic gods.</p>
          <img src={image14} alt="" />
         </div>
      </div>
    </div>
    </>
  )
}

export default Section1