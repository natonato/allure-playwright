'use strict';

allure.api.addTranslation('en', {
    tab: {
        customTab: {
            name: 'CustomTab',
        },
    },
    widget: {
        customWidget: {
            name: 'CustomWidget',
            showAll: 'show all',
        },
    },
});

allure.api.addTranslation('kr', {
    tab: {
        customTab: {
            name: '동작',
        },
    },
    widget: {
        customWidget: {
            name: '스토리별 기능',
            showAll: '전체 보기',
        },
    },
});

allure.api.addTab('custom', {
    title: 'tab.customTab.name',
    icon: 'fa fa-list',
    route: 'custom(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',
    onEnter: function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: 'tab.customTab.name',
            baseUrl: 'custom',
            url: 'data/behaviors.json',
            csvUrl: 'data/behaviors.csv',
        });
    },
});

// allure.api.addWidget(
//     'graph',
//     'status-chart',
//     allure.components.WidgetStatusView.extend({
//         rowTag: 'a',
//         title: 'widget.customWidget.name',
//         baseUrl: 'custom',
//         showLinks: true,
//     })
// );

allure.api.addWidget(
    'widgets',
    'custom',
    allure.components.WidgetStatusView.extend({
        rowTag: 'a',
        title: 'widget.customWidget.name',
        baseUrl: 'custom',
        showLinks: true,
    })
);
