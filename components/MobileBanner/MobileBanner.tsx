import React from "react";

const MobileBanner = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-yellow-400 text-black text-center py-2 z-50 text-sm">
      <p>This website is best viewed on a desktop.</p>
      <p>Mobile version is under development.</p>
    </div>
  );
};

export default MobileBanner;
