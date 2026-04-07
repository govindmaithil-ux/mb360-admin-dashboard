import ROUTES from "./routePaths";
import ButtonPage from "../pages/ButtonPage";
import InputsPage from "../pages/InputsPage";
import BadgeShowcasePage from "../pages/BadgeShowcasePage";
import RadioGroupsPage from "../pages/RadioButtonGroup";
import TabsShowcasePage from "../pages/TabsShowcasePage";
import TooltipShowcasepPage from "../pages/TooltipShowcasepPage";

export const routes = [
  { path: ROUTES.BUTTON, component: ButtonPage },
    { path: ROUTES.INPUTS, component:  InputsPage},
  { path: ROUTES.RADIOBUTTONS, component: RadioGroupsPage},
  { path: ROUTES.TABS, component: TabsShowcasePage},
  { path: ROUTES.TOOLTIPS, component: TooltipShowcasepPage},
  { path: ROUTES.BADGES, component: BadgeShowcasePage},

];