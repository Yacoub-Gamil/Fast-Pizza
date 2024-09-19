import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styls = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "rounded-full text-sm border-2 rounded-full font-semibold uppercase  tracking-wide text-stone-400 transition-all duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5 ",
  };

  if (to)
    return (
      <Link to={to} className={styls[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styls[type]}>
      {children}
    </button>
  );
}

export default Button;
