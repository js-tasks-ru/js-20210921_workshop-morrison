
export default class ColumnChart {
  element;
  subElements = {};
  chartHeight = 50;

  constructor({
    data = [],
    label = '',
    link = '',
    value = 0,
    formatHeading = data => data } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.value = formatHeading(value);

    this.render();
    this.initEventListeners();
  }

  get template() {
    const link = /*html*/`<a href="${this.link}" class="column-chart__link">View all</a>`;
    return /*html*/`
    <div class="column-chart ${this.data[0] ? '' : 'column-chart_loading'}" style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">
        Total ${this.label}
        ${this.link ? link : ''}
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
          ${this.getChartsTemplate(this.data)}
        </div>
      </div>
    </div>
  `
  }

  getChartsTemplate(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;
    return data
      .map(item => {
        const percent = (item / maxValue * 100).toFixed(0);
        return `<div style="--value: ${Math.floor(item * scale)}" data-tooltip="${percent}%"></div>`;
      })
      .join('');
  }

  getSubElements(element) {
    const result = {};
    const elements = element.querySelectorAll('[data-element]');

    for (const subElement of elements) {
      const name = subElement.dataset.element;

      result[name] = subElement;
    }
    return result;
  }


  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;

    if (this.data.length) {
      this.element.classList.remove('column-chart_loading');
    }
    this.subElements = this.getSubElements(this.element);
  }

  update(data) {
    this.subElements.body.innerHTML = this.getChartsTemplate(data);
  }
  
  initEventListeners() { }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
