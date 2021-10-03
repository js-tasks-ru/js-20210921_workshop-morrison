export default class ColumnChart {
  constructor({ data = [], label = '', link = '', value = 0 }) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;

    this.render();

    // tmp
    this.getChartsValues();
  }

  getColumnProps(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });

  }

  getChartsValues() {
    const newData = Object.assign({}, ...this.getColumnProps(this.data));
    console.log(newData);
  }

  getChartsTemplate() {


    return `
    <div class="column-chart__container">
      <div data-element="header" class="column-chart__header">${this.value}</div>
      <div data-element="body" class="column-chart__chart">
      <div style="--value: 6" data-tooltip="1%"></div>
    </div>
    </div>
  `
  }
  getTemplate() {
    const link = `<a href="${this.link}" class="column-chart__link">View all</a>`;
    return `
    <div class="column-chart ${this.data[0] ? '' : 'column-chart_loading'}" style="--chart-height: 50">
    <div class="column-chart__title">
      Total ${this.label}
      ${this.link ? link : ''}
    </div>
    ${this.getChartsTemplate()}
  </div>
  `
  }

  render() {
    const element = document.createElement('div'); // (*)

    element.innerHTML = this.getTemplate();
    // console.log(this)
    // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
    // который мы создали на строке (*)
    this.element = element.firstElementChild;
  }
}
