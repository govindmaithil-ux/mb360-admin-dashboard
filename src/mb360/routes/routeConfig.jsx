import ROUTES from "./routePaths";
import ButtonPage from "../pages/ButtonPage";
import InputsPage from "../pages/InputsPage";
import RadioGroupsPage from "../pages/RadioGroups";
import TabsShowcasePage from "../pages/TabSPage";
import TooltipShowcasepPage from "../pages/TooltipsPage";
import BadgeShowcasePage from "../pages/BadgePage";


export const routes = [
  { path: ROUTES.BUTTON, component: ButtonPage },
  { path: ROUTES.INPUTS, component:  InputsPage},
  { path: ROUTES.RADIOBUTTONS, component: RadioGroupsPage},
  { path: ROUTES.TABS, component: TabsShowcasePage},
  { path: ROUTES.TOOLTIPS, component: TooltipShowcasepPage},
  { path: ROUTES.BADGES, component: BadgeShowcasePage},
];