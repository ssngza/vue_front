// import React from 'react';
// import { Route } from 'react-router-dom';
//************************************************물류정보 관리 ********************************************************
// import { default as CodeInfo } from 'erp/logistic/base/page/CodeInfo/CodeInfo'; //*****2020-11-28 이숭규 코드관리
// import { default as ItemInfo } from 'erp/logistic/base/page/ItemInfo/ItemInfo'; //*****2020-11-28 황경윤 품목관리
// import { default as WarehouseInfo } from 'erp/logistic/base/page/WareHouseInfo/WareHouseInfo'; //*****2020-11-28 노원찬 창고관리
//
// function LogisticsInfoRoute() {
//     return (
//         <>
//             {/* 물류 정보 관리 */}
//             <Route exact path="/app/logistic/base/codeInfo" component={CodeInfo} />
//             {/*2020-11-18 이숭규 */}
//             <Route exact path="/app/logistic/base/itemInfo" component={ItemInfo} />
//             {/*2020-11-28 황경윤 */}
//             <Route exact path="/app/logistic/base/wareHouseInfo" component={WarehouseInfo} />
//         </>
//     );
// }
//
// export default LogisticsInfoRoute;


const LogisticsInfoRoute = [
//물류 정보 : 코드 관리, 품목 관리, 창고 관리
    {
        path: '/logi/base/codeInfo',
        name: 'codeInfo',
        component: () => import('@/views/logistic/base/codeInfo/codeInfoPage'),
        meta: {
            pageTitle: '코드 정보',
            breadcrumb: [
                {text: '물류 정보',},
                {text: '코드 관리',},
            ],
        },
    },
    {
        path: '/logi/base/itemInfo',
        name: 'itemInfo',
        component: () => import('@/views/logistic/base/itemInfo/itemInfoPage'),
        meta: {
            pageTitle: '품목 정보',
            breadcrumb: [
                {text: '물류 정보',},
                {text: '품목 관리',},
            ],
        },
    },
    {
        path: '/logi/base/warehouseInfo',
        name: 'warehouseInfo',
        component: () => import('@/views/logistic/base/warehouseInfo/WarehouseInfoPage'),
        meta: {
            pageTitle: '코드정보',
            breadcrumb: [
                {text: '물류 정보',},
                {text: '창고 관리',},
            ],
        },
    },





    // {
    //
    //     path: '/logi/production/mrpRegister',
    //     name: 'mrpRegister',
    //     component: () => import('@/views/logistic/production/mrp/MrpRegisterPage'),
    //     meta: {
    //         pageTitle: '소요량전개 등록/취합',
    //         breadcrumb: [
    //             {
    //                 text: '생산관리',
    //             },
    //             {
    //                 text: '소요량전개/취합(MRP)',
    //             },
    //             {
    //                 text: '소요량전개 등록/취합(MRP)',
    //             },
    //         ],
    //     },
    // },
    // {
    //     path: '/logi/production/mrpInfo',
    //     name: 'mrpInfo',
    //     component: () => import('@/views/logistic/production/mrp/MrpInfoPage'),
    //     meta: {
    //         pageTitle: '소요량전개/취합 조회',
    //         breadcrumb: [
    //             {
    //                 text: '생산관리',
    //             },
    //             {
    //                 text: '소요량전개/취합(MRP)',
    //             },
    //             {
    //                 text: '소요량전개/취합 조회',
    //             },
    //         ],
    //     },
    // },
    // {
    //     path: '/logi/production/WorkInstruction',
    //     name: 'workInstruction',
    //     component: () => import('@/views/logistic/production/WorkInstructionPage'),
    // },
]
export default LogisticsInfoRoute

