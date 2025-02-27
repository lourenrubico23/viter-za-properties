import React from "react";
import { setIsAdd } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import DashboardNav from "../../../partials/dashboard/DashboardNav";
import Navigation from "../../../partials/dashboard/Navigation";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";

const Banner = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav menu="dashboard" />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3]">
              <div className="outer-wrapper">
                <div className="wrapper">
                  content
                  {/* <Header />
                  <About />
                  <Services />
                  <ContactUs />
                  <Testimonial />
                  <ReachUs />
                  <Footer /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Banner;
