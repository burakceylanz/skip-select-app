import { CgArrowRight } from "react-icons/cg";
import { useAppSelector } from "@/store/hooks";
import Button from "@/common/components/button";

export default function Footer() {
  // Get selected skip from store
  const selectedSkip = useAppSelector((state) => state.skipSelect.selectedSkip);
  return (
    <div
      className={`shadow-inner z-1 fixed bottom-0 left-0 w-full bg-secondary text-primary py-4 px-8 flex justify-between items-center border-t border-border-color 
        transition-opacity duration-1000 ${
          selectedSkip ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Skip summary */}
      <div>
        <p className="text-primary">
          {selectedSkip?.size} Yard Skip - £{selectedSkip?.price_before_vat}
        </p>
        <span className="text-primary">
          {selectedSkip?.hire_period_days} day hire period
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <Button text="Back" theme="dark" />
        <Button text="Continue" theme="light" icon={<CgArrowRight />} />
      </div>
    </div>
  );
}
