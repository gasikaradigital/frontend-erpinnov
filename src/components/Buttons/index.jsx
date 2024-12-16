import { Link } from "react-router-dom";


export const ButtonPrimary = ({ children, props , className }) => {
  return ( 
  <button {...props}
  
className={`bg-[#7367f0] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ${className}`}

>
  
    {children}
    
    </button>);

}


export const LinkButton = ({ children, props , className , page }) => {

  return (
<div>
<Link 
to={page}
{...props}
className={`bg-[#7367f0] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ${className}`} >
{children}
</Link>
</div>

  );}


export const ButtonSecondary = ({ children, props , className }) => {
  return ( 
  <button {...props}
  
className={`bg-[#7367f0] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-3xl ${className}`}

>
  
    {children}
    
    </button>);

}


function Checkbox({ label, checked, onChange, className, ...props }) {
  return (
    <label className="flex items-center cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only" 
          {...props}
        />
        <div className={`
          w-5 
          h-5 
          border-2 
          rounded
          flex 
          items-center 
          justify-center
          transition-all 
          duration-200
          ${checked 
            ? 'bg-[#7367f0] border-[#7367f0]' 
            : 'bg-white border-gray-300 hover:border-[#7367f0]'
          }
          ${className}
        `}>
          {/* Icône de check */}
          {checked && (
            <svg 
              className="w-3 h-3 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      {label && (
        <span className="ml-2 text-gray-700">{label}</span>
      )}
    </label>
  );
}

export default Checkbox;