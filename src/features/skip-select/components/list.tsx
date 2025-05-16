import type {
  SkipSelectListProps,
  SkipType,
} from "@/features/skip-select/types";
import { CgArrowRight } from "react-icons/cg";
import SkipCardImage from "@/assets/images/skip.jpg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedSkip } from "@/features/skip-select/store/skip-select-slice";
import Button from "@/common/components/button";

export default function List({ list }: SkipSelectListProps) {
  const dispatch = useAppDispatch();
  const selectedSkip = useAppSelector((state) => state.skipSelect.selectedSkip);

  // Update selected skip in store
  const handleSkipSelect = (skip: SkipType) => {
    dispatch(setSelectedSkip(skip));
  };

  // Show message if no items
  if (!list || list.length === 0) {
    return (
      <div className="text-primary text-center py-12 px-12">
        No skips available
      </div>
    );
  }

  return (
    <div className="px-12 pt-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
      {list?.map((skip: SkipType) => (
        <div
          key={skip.id}
          onClick={() => handleSkipSelect(skip)}
          className={`${
            selectedSkip?.id === skip.id
              ? "border-white/60"
              : "border-border-color"
          } shadow-[0px_4px_16px_px_#367E08] cursor-pointer  group gap-[0.5em] rounded-[1.5em] border relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden`}
        >
          {/* Dark overlay */}
          <div className="absolute top-0 left-0 h-full w-full bg-tertiary"></div>

          {/* Content */}
          <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
            <div className="h-fit w-full">
              <div className="mt-2 mb-4">
                <img
                  src={SkipCardImage}
                  className="rounded-[1.5em]"
                  alt="skip"
                />
              </div>
              <p className="text-primary">{skip.size} Yard Skip</p>
              <span className="text-primary">
                {skip.hire_period_days} day hire period
              </span>
            </div>

            <div className="w-fit h-fit">
              <p className="text-primary font-bold">£{skip.price_before_vat}</p>
            </div>
          </div>

          {/* Action button on hover */}
          <div className="block group-hover:-mb-8 relative h-[0em] group-hover:h-[5em] overflow-hidden duration-500">
            <Button
              text={
                selectedSkip?.id === skip.id
                  ? "Selected Skip"
                  : "Select This Skip"
              }
              theme={selectedSkip?.id === skip.id ? "light" : "dark"}
              icon={selectedSkip?.id === skip.id ? undefined : <CgArrowRight />}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
