export const PieChartOptions1 = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['Direct', 'Marketing advertising', 'Search engine', 'Mail marketing', 'Affiliate advertising', 'Video ad', 'Facebook', 'Google', 'Other']
  },
  series: [
    {
      name: 'Access source',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 335, name: 'Direct', selected: true },
        { value: 679, name: 'Marketing advertising' },
        { value: 1548, name: 'Search engine' }
      ]
    },
    {
      name: 'Access source',
      type: 'pie',
      radius: ['40%', '55%'],

      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Mail marketing' },
        { value: 234, name: 'Affiliate advertising' },
        { value: 135, name: 'Video ad' },
        { value: 1048, name: 'Facebook' },
        { value: 251, name: 'Google' },
        { value: 102, name: 'Other' }
      ]
    }
  ]
};