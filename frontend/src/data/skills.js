import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiCplusplus } from 'react-icons/si'

// Edit this list to add/remove skill cards. `color` is used as a glow
// behind the icon, just to give each card a bit of its own identity.
export const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#2965f1' },
  { name: 'JavaScript', icon: FaJs, color: '#f0db4f' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Node.js', icon: FaNodeJs, color: '#3c873a' },
  { name: 'Express', icon: SiExpress, color: '#8a8a8a' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'SQL', icon: SiMysql, color: '#4479a1' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c' },
  { name: 'Python', icon: FaPython, color: '#ffd43b' },
]
