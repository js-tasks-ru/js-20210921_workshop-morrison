
export default class ColumnChart {


  constructor({ data = [], label = '', link = '', value = 0 }) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.render();
    this.initEventListeners();
    this.chartPercent;
    this.chartValue;

  }
  // get chartColumns() {
  //   return this.getColumnProps(this.data);
  // }

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

  getChartsTemplate() {

    const chartsProps = this.getColumnProps(this.data);

    if (!chartsProps) return;

    for (const entry of chartsProps) {
      this.chartPercent = entry.percent;
      this.chartValue = entry.value;
    }
    // <div style="--value: " data-tooltip=""></div>
  }

  getTemplate() {
    const link = `<a href="${this.link}" class="column-chart__link">View all</a>`;
    return `
    <div class="column-chart ${this.data[0] ? '' : 'column-chart_loading'}" style="--chart-height: 50">
    <div class="column-chart__title">
      Total ${this.label}
      ${this.link ? link : ''}
    </div>
    <div class="column-chart__container">
    <div data-element="header" class="column-chart__header">${this.value}</div>
    <div data-element="body" class="column-chart__chart">

  </div>
  </div>
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
  initEventListeners() {
    // NOTE: в данном методе добавляем обработчики событий, если они есть
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    // NOTE: удаляем обработчики событий, если они есть
  }
}
