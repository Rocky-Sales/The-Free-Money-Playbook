export function Card({ children, className }) {
    return (
      <div className={`bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="text-gray-400">{children}</div>;
  }
  