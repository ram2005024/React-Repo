import React from 'react'

const Index = ({userName="Anonymous",type="Not assigned Brother", image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/476448098_955044163396477_1012802184725272920_n.jpg?stp=c0.205.800.800a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=JmohM_EZn2AQ7kNvgEHQFfX&_nc_oc=Adg1wpn1Zc5tk645t6eaKP1Z4yX_alVHLiN46JeEYjHUb-eg2UrF6iflR-tbS5JEs6EoPxybGKIfTwsA71_j5mDG&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=AX7CzS2u1h_HxBKumAjuPwG&oh=00_AYCZpmSiBtImZ57ahfCk1trW4OSHjNMMzub9rF2rFUSlWg&oe=67CF3AC1"}) => {
  return (
<>
<div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src={image} alt='My-image'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src={image} alt='My-image'/>
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold">{userName}</h2>
        <p class="text-gray-500">{type}</p>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div>2k</div>
        </li>
        <li class="flex flex-col items-center justify-between">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
            </svg>
            <div>10k</div>
        </li>
        <li class="flex flex-col items-center justify-around">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            <div>15</div>
        </li>
    </ul>
    <div class="p-4 border-t mx-8 mt-2">
        <button class="w-auto  block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div>
</>
  )
}

export default Index
