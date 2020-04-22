import Dashboard from "views/Dashboard.js";
import Mapview from "views/Mapview.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-pin",
    component: Mapview,
    layout: "/admin"
  }
];
export default routes;
