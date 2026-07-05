const Button = ({ children, className = "", type = "button", ...props }) => (
  <button className={`button ${className}`.trim()} type={type} {...props}>
    {children}
  </button>
);

export default Button;
