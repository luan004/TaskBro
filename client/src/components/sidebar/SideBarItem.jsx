import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBarItem = ({ item }) => {
  const { title, icon, path } = item
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {

    switch (window.location.pathname === path) {
      case true: setIsActive(true)
        break
      case false: setIsActive(false)
        break
    }

  })

  return (
    <li>
      <Link to={path} className={`block cursor-pointer px-4 py-2 hover:ring-1 ring-gray-600 hover:shadow-md rounded-md text-sm w-full hover:bg-gray-700 transition duration-300 text-left ${isActive ? 'bg-gray-700 ring-1' : ''}`}>
        <FontAwesomeIcon icon={icon} className="mr-3"/>
        <span>
          {title}
        </span>
      </Link>
    </li>
  )
}

export default SideBarItem;