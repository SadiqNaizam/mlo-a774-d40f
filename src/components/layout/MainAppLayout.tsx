import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 * @interface MainAppLayoutProps
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is a mandatory prop.
   */
  children: React.ReactNode;
  /**
   * Optional additional CSS classes to apply to the layout container.
   */
  className?: string;
}

/**
 * A full-screen layout component that centers its content.
 * It uses flexbox to align children vertically and horizontally in the center of the viewport,
 * applying the project's default background color.
 *
 * @param {MainAppLayoutProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        "flex min-h-screen w-full items-center justify-center bg-background font-sans",
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
