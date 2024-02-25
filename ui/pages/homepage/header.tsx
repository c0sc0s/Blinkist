import Icon from "@/ui/components/icon";

export default function Header() {
  return (
    <header id="header" className="py-[1.75rem]">
      <div className="flex max-w-[1350px] px-[2rem] mx-auto  items-center justify-between">
        <div id="header__left" className="flex gap-6 items-center">
          <div className="h-[22px] md:h-[26px]">
            <Icon name="logo" />
          </div>
          <div className="hidden lg:block">
            <button className="cursor-pointer text-midnight hover:text-blue focus:text-blue active:text-blue">
              <div className="flex items-center justify-center">
                <span>Categories</span>
                <Icon name="arrow" />
              </div>
            </button>
          </div>
        </div>
        <ul
          id="header__right"
          className="flex text-primary gap-4 cursor-pointer text-midnight"
        >
          <li className="hover:text-blue hidden md:block">Coaching</li>
          <li className="hover:text-blue">For business</li>
          <li className="hover:text-blue">Log in</li>
        </ul>
      </div>
    </header>
  );
}
