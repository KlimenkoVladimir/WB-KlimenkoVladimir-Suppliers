import { FC } from "react";
import Navigation from "./Navigation/Navigation";
import GridHeader from "./GridHeader/GridHeader";
import SuppliersTable from "./SuppliersTable/SuppliersTable";

const Content: FC = () => {
  return (
    <div className="content">
      <Navigation></Navigation>
      <GridHeader></GridHeader>
      <SuppliersTable></SuppliersTable>
    </div>
  );
};

export default Content;
