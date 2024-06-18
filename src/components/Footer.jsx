import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            +992 000-0000-00
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copyright @ 2024 Shabnam.</p>

          <div className="appleLinks">
            <a href="https://www.apple.com/legal/privacy/" className="font-semibold text-gray text-xs">Privacy Policy</a>
            <a href="https://www.apple.com/legal/sales-support/sales-policies/retail_us.html" className="font-semibold text-gray text-xs">Sales and Refunds</a>
            <a href="https://www.apple.com/tj/" className="font-semibold text-gray text-xs">Tajikistan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer