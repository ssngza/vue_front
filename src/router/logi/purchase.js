const purchaseRoute = [
    {
        path: '/logi/purchase/logisticsBOM',
        name: 'logisticsBOM',
        component: () => import('@/views/logistic/sales/contract/ContractInfoPage'),
        meta: {
            pageTitle: '자재구매 관리',
            breadcrumb: [
                {
                    text: '자재구매 관리',
                },
                {
                    text: '자재명세서(BOM)',
                    active: true
                },
            ],
        },
    },
    {
        path: '/logi/purchase/orderRegister',
        name: 'orderRegister',
        component: () => import('@/views/logistic/sales/contract/ContractInfoPage'),
        meta: {
            pageTitle: '자재구매 관리',
            breadcrumb: [
                {
                    text: '자재구매 관리',
                },
                {
                    text: '발주 및 재고처리',
                    active: true
                },
            ],
        },
    },    {
        path: '/logi/purchase/stockInfo',
        name: 'stockInfo',
        component: () => import('@/views/logistic/sales/contract/ContractInfoPage'),
        meta: {
            pageTitle: '자재구매 관리',
            breadcrumb: [
                {
                    text: '자재구매 관리',
                },
                {
                    text: '재고 관리',
                    active: true
                },
            ],
        },
    },
]

export default purchaseRoute