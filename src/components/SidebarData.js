import { AiFillHome, AiOutlineQuestionCircle, AiOutlinePhone } from 'react-icons/ai';
import { FaProductHunt } from 'react-icons/fa';

const SidebarData = [
  {
    title: 'Home',
    icon: <AiFillHome />,
    path: '/',

  },
  {
    title: 'About',
    icon: <AiOutlineQuestionCircle />,
    path: '/about',

  },
  {
    title: 'Product',
    icon: <FaProductHunt />,
    path: '/product',

  },
  {
    title: 'Contact',
    icon: <AiOutlinePhone />,
    path: '/contact',

  }
]


export default SidebarData
