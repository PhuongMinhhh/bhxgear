import React from 'react'
import Image from 'next/image'
const header = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                

                
                </div>
            

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-xl uppercase">
                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Lịch Bảo Hành  </a>
                    </li>
                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/address"> Địa chỉ bảo hành  </a>
                    </li>
                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/warranty"> Thông tin đi bảo hành  </a>
                    </li>
                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/support"> Hỗ trợ  </a>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                {/* content right */}
            </div>
        </div>
        </div>
</header>
    </div>
  )
}

export default header
