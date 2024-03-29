import React from 'react'

function Card({pictureName, description='No content'}) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="https://thumbs.dreamstime.com/b/smoky-mountain-sunset-sunset-over-great-smokey-mountains-forest-145206783.jpg" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{pictureName}</div>
            <p class="text-gray-700 text-base">
            {description}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
</div>
  )
}

export default Card