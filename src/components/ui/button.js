export function Button({ children, className, ...props }) {
    return (
      <button className={`px-4 py-2 bg-yellow-500 text-black rounded-lg ${className}`} {...props}>
        {children}
      </button>
    );
  }
  