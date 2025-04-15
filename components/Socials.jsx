import Link from "next/link"

import {
  RiFacebookBoxFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiInstagramFill,

} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookBoxFill/>,
    path:"",
  },
  {
    icon: <RiYoutubeFill/>,
    path:"",
  },
  {
    icon: <RiTwitterFill/>,
    path:"",
  },
  {
    icon: <RiInstagramFill/>,
    path:"",
  },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index}  className={`${iconStyles}`}>
            {item.icon}
          </Link>
        );

      })}
    </div>
  )
}

export default Socials