import { NavLink } from 'react-router-dom';

const linkClass =
  'px-4 py-2 rounded text-sm font-medium transition';

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-3 flex gap-4">
      <NavLink
        to="all"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700'}`
        }
      >
        All Posts
      </NavLink>

      <NavLink
        to="my"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700'}`
        }
      >
        My Posts
      </NavLink>

      <NavLink
        to="create"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700'}`
        }
      >
        Create New Post
      </NavLink>
    </nav>
  );
};

export default Navbar;
