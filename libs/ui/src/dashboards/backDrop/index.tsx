interface BackdropProps {
  isMobileOpen: boolean;
  toggleMobileSidebar: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({
  isMobileOpen,
  toggleMobileSidebar,
}) => {
  if (!isMobileOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
      onClick={toggleMobileSidebar}
    />
  );
};

export default Backdrop;
