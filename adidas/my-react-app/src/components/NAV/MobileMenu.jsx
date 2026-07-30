import { FiX } from "react-icons/fi";

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className=" md:hidden ">
      <div
        className={`fixed inset-y-0 right-0 z-20 w-[85vw] max-w-xs transform rounded-[10px] border border-slate-200 bg-white p-4 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          className="ml-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-black hover:bg-slate-300 "
          onClick={onClose}
          aria-label="Close mobile menu"
          type="button"
        >
          <FiX size={20} />
        </button>
        <div className="flex flex-col items-center justify-center mt-8 gap-4">
          <div className="text-sm font-medium text-black">WOMAN</div>
          <div className="text-sm font-medium text-black">MEN</div>
          <div className="text-sm font-medium text-black">KIDS</div>
          <div className="text-sm font-medium text-black">NEWS</div>
          <div className="text-sm font-medium text-black">SPORTS</div>
          <div className="text-sm font-medium text-black">ADIDAS WORLD</div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
