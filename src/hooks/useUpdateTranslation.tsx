import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const useUpdateTranslation = (data:any, locale:any) => { 
  const { t, i18n } = useTranslation();
  i18n.addResource(locale, 'translation', 'store_details', data.c_store_details);
  i18n.addResource(locale, 'translation', 'day_of_the_week', data.c_dayOfTheWeek);
  i18n.addResource(locale, 'translation', 'am', data.c_aM);
  i18n.addResource(locale, 'translation', 'pm', data.c_pM);
  i18n.addResource(locale, 'translation', 'sunday', data.c_sunday);
  i18n.addResource(locale, 'translation', 'monday', data.c_monday);
  i18n.addResource(locale, 'translation', 'tuesday', data.c_tuesday);
  i18n.addResource(locale, 'translation', 'wednesday', data.c_wednesday);
  i18n.addResource(locale, 'translation', 'thursday', data.c_thursday);
  i18n.addResource(locale, 'translation', 'friday', data.c_friday);
  i18n.addResource(locale, 'translation', 'saturday', data.saturday);
  i18n.addResource(locale, 'translation', 'order_delivery', data.c_orderDelivery);
  i18n.addResource(locale, 'translation', 'order_pickup', data.c_orderPickup);
  i18n.addResource(locale, 'translation', 'order_online', data.c_order_online);
  i18n.addResource(locale, 'translation', 'restaurant_hours', data.c_restaurantHours);
  i18n.addResource(locale, 'translation', 'services', data.c_servicesLabel);
  i18n.addResource(locale, 'translation', 'restaurant_hours', data.c_restaurantHours);
};

export default useUpdateTranslation;