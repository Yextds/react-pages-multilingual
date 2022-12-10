import * as React from "react";
import Cta from "./cta";
import { Address } from "@yext/pages/components";
import { useTranslation } from "react-i18next";

const Details = (props: any) => {
  const { address, phone } = props;
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="grid">
        <div className="text-xl font-semibold">{t("store_details")}</div>
        <div className="grid grid-cols-2 py-4">
          <div>
            <Address address={address} />
            <div className="pt-4">
              <a href="#">{phone}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
