import BaseRoute from "@/router/hr/BaseRoute";
import AttdRoute from "@/router/hr/AttdRoute";
import DayWorkerRoute from "@/router/hr/DayWorkerRoute";
import EmpRoute from "@/router/hr/EmpRoute";
import SalaryRoute from "@/router/hr/SalaryRoute";


const ERP = '/hr'
const insaRouter = [
  {
    path: `${ERP}/home`,
    name: 'hrHome',
    component: () => import('@/views/hr/Home.vue'),
    meta: {
      pageTitle: 'HR',
      breadcrumb: [
        {
          text: 'HR Home',
          active: true,
        },
      ],
    },
  },
  ...BaseRoute,
  ...AttdRoute,
  ...DayWorkerRoute,
  ...EmpRoute,
  ...SalaryRoute
]
export default insaRouter
