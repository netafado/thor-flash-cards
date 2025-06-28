export type VariantType = 'info' | 'success' | 'warning' | 'error' | 'default';

export type StatusProps = {
  /**
   * The status message to display.
   */
  title: string;
  description?: string | React.ReactNode;

  /**
   * The type of status, which determines the styling.
   * Can be 'info', 'success', 'warning', or 'error'.
   */
  type: VariantType;

  /**
   * Optional className for additional styling.
   */
  className?: string;

  /**
   * Optional children to render inside the status component.
   */
  leftContent?: React.ReactNode;
  icon?: React.ReactNode;
};
