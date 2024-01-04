import React from "react";
import MainSheet from "./Elements/MainSheet";
import HitBlog from "./Elements/HitBlog";
import CollectionSpf from "./Elements/CollectionSpf";
import PersonalCare from "./Elements/PersonalCare";
import SkinCareBody from "./Elements/SkinCareBody";
import Together from "./Elements/Together";
import Contacts from "./Elements/Contacts";

const Home = () => {
  return (
    <div>
      <MainSheet />
      <HitBlog />
      <CollectionSpf />
      <PersonalCare />
      <SkinCareBody />
      <Together />
      <Contacts />
    </div>
  );
};

export default Home;
