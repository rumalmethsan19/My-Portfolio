import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) {
  const baseStyles =
    'inline-block font-medium rounded-lg transition-all hover:scale-105 active:scale-95';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  );
}
