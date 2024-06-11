var dom = document.getElementById('Task');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
  //height: 200
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'item',
    align: 'left'
  },  
  legend: {
    top: 'center',
    orient: 'vertical',
    left: 15,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      position: 'left',
      color: [
        '#1A55AF',
        '#09C0BA',
        '#FF7F4D',
        '#4C1AAF'
      ],
      label: {
        show: false,
        position: 'right'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 60, name: 'Test Case Execution' },
        { value: 25, name: 'Test Script Preparation' },
        { value: 10, name: 'Coding' },
        { value: 5, name: 'Union Ads' }
      ]
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);


var dom = document.getElementById('Leave');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
  //height: 200
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'item'
  },  
  legend: {
    top: 'center',
    orient: 'vertical',
    left: 15,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      position: 'left',
      color: [
        '#1A55AF',
        '#09C0BA',
        '#FF7F4D',
        '#4C1AAF'
      ],
      label: {
        show: false,
        position: 'right'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 60, name: 'Test Case Execution' },
        { value: 25, name: 'Test Script Preparation' },
        { value: 10, name: 'Coding' },
        { value: 5, name: 'Union Ads' }
      ]
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);


var dom = document.getElementById('Project');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
  //height: 200
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'item'
  },  
  legend: {
    top: 'center',
    orient: 'vertical',
    left: 15,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      position: 'left',
      color: [
        '#1A55AF',
        '#09C0BA',
        '#FF7F4D',
        '#4C1AAF'
      ],
      label: {
        show: false,
        position: 'right'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 60, name: 'Test Case Execution' },
        { value: 25, name: 'Test Script Preparation' },
        { value: 10, name: 'Coding' },
        { value: 5, name: 'Union Ads' }
      ]
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);