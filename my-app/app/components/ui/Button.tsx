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
    'inline-block font-semibold rounded-lg transition-all hover:scale-105 active:scale-95';

  const variantStyles = {
    primary: 'bg-[#38BDF8] text-[#0F172A] hover:bg-[#0EA5E9] hover:shadow-lg hover:shadow-[#38BDF8]/50',
    secondary:
      'bg-transparent text-[#38BDF8] border-2 border-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0F172A]',
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
